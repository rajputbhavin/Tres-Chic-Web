import type { FormEvent } from "react";

import {
  CheckboxField,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/ui/FormField";
import { formOptions, startPlanningCopy } from "@/data/forms";
import { site } from "@/data/site";
import { useInquiryForm } from "@/hooks/useInquiryForm";

const { labels, placeholders } = startPlanningCopy;

/** The inquiry form. All state is React-controlled via useInquiryForm. */
export function InquiryForm() {
  const { values, setField, status, submit, honeypot, setHoneypot } = useInquiryForm();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submit();
  }

  if (status === "sent") {
    return (
      <div className="border-t border-gold pt-10">
        <h2 className="display-lg text-emerald">{startPlanningCopy.success.heading}</h2>
        <p className="mt-6 text-muted-foreground">
          {startPlanningCopy.success.body} {site.phone}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Spam protection: visually hidden honeypot field */}
      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        <label htmlFor="inquiry_company">Leave this field blank</label>
        <input
          type="text"
          id="inquiry_company"
          name="inquiry_company"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        <TextField
          id="names"
          label={labels.names}
          value={values.names}
          onChange={(value) => setField("names", value)}
          required
        />
        <TextField
          id="email"
          label={labels.email}
          type="email"
          value={values.email}
          onChange={(value) => setField("email", value)}
          required
        />
        <TextField
          id="phone"
          label={labels.phone}
          type="tel"
          value={values.phone}
          onChange={(value) => setField("phone", value)}
        />
        <TextField
          id="event_date"
          label={labels.eventDate}
          type="date"
          value={values.event_date}
          onChange={(value) => setField("event_date", value)}
          disabled={values.date_undecided}
        >
          <CheckboxField
            id="date_undecided"
            label={labels.dateUndecided}
            checked={values.date_undecided}
            onChange={(checked) => setField("date_undecided", checked)}
          />
        </TextField>
        <SelectField
          id="celebration_type"
          label={labels.celebrationType}
          value={values.celebration_type}
          onChange={(value) => setField("celebration_type", value)}
          options={formOptions.celebration}
          placeholder={placeholders.select}
        />
        <SelectField
          id="support_level"
          label={labels.supportLevel}
          value={values.support_level}
          onChange={(value) => setField("support_level", value)}
          options={formOptions.support}
          placeholder={placeholders.select}
        />
        <TextField
          id="location"
          label={labels.location}
          value={values.location}
          onChange={(value) => setField("location", value)}
        />
        <SelectField
          id="guest_range"
          label={labels.guestRange}
          value={values.guest_range}
          onChange={(value) => setField("guest_range", value)}
          options={formOptions.guests}
          placeholder={placeholders.select}
        />
      </div>

      <TextField
        id="traditions"
        label={labels.traditions}
        value={values.traditions}
        onChange={(value) => setField("traditions", value)}
        placeholder={placeholders.traditions}
      />

      <TextAreaField
        id="notes"
        label={labels.notes}
        value={values.notes}
        onChange={(value) => setField("notes", value)}
      />

      <SelectField
        id="referral_source"
        label={labels.referralSource}
        value={values.referral_source}
        onChange={(value) => setField("referral_source", value)}
        options={formOptions.referral}
        placeholder={placeholders.select}
      />

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 border border-emerald bg-emerald px-8 py-4 text-[0.6875rem] tracking-[0.18em] text-ivory uppercase transition-colors duration-500 hover:bg-emerald-deep disabled:opacity-60"
        >
          {status === "sending" ? startPlanningCopy.submitting : startPlanningCopy.submit}
        </button>
        {status === "error" ? (
          <p className="text-sm text-destructive" role="alert">
            Something went wrong sending that. Please try again or contact {site.phone} or {site.email}.
          </p>
        ) : null}
      </div>
    </form>
  );
}
