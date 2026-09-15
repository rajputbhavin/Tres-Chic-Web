import { useState } from "react";

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

/** Optional text fields are stored as null rather than empty strings. */
const orNull = (value: string) => {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

/**
 * Fully React-controlled state for the Start Planning inquiry, plus the single
 * insert into the `inquiries` table. Keeps the page component presentational.
 */
export function useInquiryForm() {
  const [values, setValues] = useState<InquiryValues>(emptyValues);
  const [status, setStatus] = useState<InquiryStatus>("idle");

  function setField<K extends keyof InquiryValues>(key: K, value: InquiryValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function submit() {
    setStatus("sending");
    const { error } = await supabase.from("inquiries").insert({
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

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }

    setValues(emptyValues);
    setStatus("sent");
  }

  return { values, setField, status, submit };
}
