import emailjs from "@emailjs/browser";
import { useState } from "react";

import { EMAILJS_CONFIG } from "@/config/emailjs";
import { supabase } from "@/integrations/supabase/client";

export type InquiryValues = {
  names: string;
  email: string;
  phone: string;
  event_date: string;
  date_undecided: boolean;
  celebration_type: string;
  support_level: string;
  traditions: string;
  location: string;
  guest_range: string;
  notes: string;
  referral_source: string;
};

export type InquiryStatus = "idle" | "sending" | "sent" | "error";

const emptyValues: InquiryValues = {
  names: "",
  email: "",
  phone: "",
  event_date: "",
  date_undecided: false,
  celebration_type: "",
  support_level: "",
  traditions: "",
  location: "",
  guest_range: "",
  notes: "",
  referral_source: "",
};

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/**
 * Parses YYYY-MM-DD manually to prevent day-shifting bugs in non-UTC timezones.
 * Returns 'Not set yet' if undecided or empty, or formatted date like 'June 14, 2027'.
 */
export function formatEventDate(dateStr: string, dateUndecided: boolean): string {
  if (dateUndecided || !dateStr || !dateStr.trim()) {
    return "Not set yet";
  }

  const parts = dateStr.trim().split("-");
  const [yStr, mStr, dStr] = parts;
  if (parts.length === 3 && yStr && mStr && dStr) {
    const year = parseInt(yStr, 10);
    const month = parseInt(mStr, 10) - 1;
    const day = parseInt(dStr, 10);

    if (!isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 0 && month < 12) {
      return `${MONTH_NAMES[month]} ${day}, ${year}`;
    }
  }

  return dateStr.trim();
}

/** Formats the submission timestamp for America/New_York (e.g. 'Sep 28, 2026, 10:45 AM ET'). */
export function formatSubmittedAt(date: Date = new Date()): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${formatter.format(date)} ET`;
}

/** Returns the trimmed value or 'Not provided' if empty. */
function withFallback(value?: string | null): string {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "Not provided";
}

/**
 * Builds the exact templateParams object expected by the EmailJS template.
 * Variable names MUST match exactly:
 * from_name, from_email, reply_to, phone, referral_source, event_type,
 * event_date, location, guest_count, service_type, traditions, vision, submitted_at
 */
export function buildTemplateParams(values: InquiryValues): Record<string, string> {
  return {
    from_name: values.names.trim() || "Not provided",
    from_email: values.email.trim(),
    reply_to: values.email.trim(),
    phone: withFallback(values.phone),
    referral_source: withFallback(values.referral_source),
    event_type: withFallback(values.celebration_type),
    event_date: formatEventDate(values.event_date, values.date_undecided),
    location: withFallback(values.location),
    guest_count: withFallback(values.guest_range),
    service_type: withFallback(values.support_level),
    traditions: withFallback(values.traditions),
    vision: withFallback(values.notes),
    submitted_at: formatSubmittedAt(),
  };
}

/** Optional text fields helper for Supabase */
const orNull = (value: string) => {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

/**
 * Fully React-controlled state for the Start Planning inquiry form with
 * EmailJS delivery and silent honeypot spam protection.
 */
export function useInquiryForm() {
  const [values, setValues] = useState<InquiryValues>(emptyValues);
  const [honeypot, setHoneypot] = useState<string>("");
  const [status, setStatus] = useState<InquiryStatus>("idle");

  function setField<K extends keyof InquiryValues>(key: K, value: InquiryValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function submit() {
    setStatus("sending");

    // Honeypot spam check: if filled by a bot, silently succeed without sending email
    if (honeypot.trim().length > 0) {
      setValues(emptyValues);
      setHoneypot("");
      setStatus("sent");
      return;
    }

    const templateParams = buildTemplateParams(values);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );

      // Best-effort optional DB sync with Supabase (non-blocking)
      try {
        void supabase.from("inquiries").insert({
          names: values.names.trim(),
          email: values.email.trim(),
          phone: orNull(values.phone),
          event_date: values.date_undecided ? null : orNull(values.event_date),
          date_undecided: values.date_undecided,
          celebration_type: orNull(values.celebration_type),
          support_level: orNull(values.support_level),
          traditions: orNull(values.traditions),
          location: orNull(values.location),
          guest_range: orNull(values.guest_range),
          notes: orNull(values.notes),
          referral_source: orNull(values.referral_source),
        });
      } catch {
        // Ignore DB insert failure if Supabase is unconfigured
      }

      setValues(emptyValues);
      setHoneypot("");
      setStatus("sent");
    } catch (error) {
      console.error("Failed to send inquiry email via EmailJS:", error);
      // Keep form values intact on error so user doesn't lose entered data
      setStatus("error");
    }
  }

  return { values, setField, status, submit, honeypot, setHoneypot };
}
