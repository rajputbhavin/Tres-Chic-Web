import { FieldLabel } from "@/components/ui/FormField";
import { startPlanningCopy } from "@/data/forms";
import { site } from "@/data/site";

/** Contact details beside the inquiry form. */
export function InquiryAside() {
  const { aside } = startPlanningCopy;

  return (
    <div className="space-y-8">
      <div>
        <FieldLabel>{aside.talkLabel}</FieldLabel>
        <a
          href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
          className="mt-3 block font-display text-2xl text-emerald transition-colors hover:text-gold"
        >
          {site.phone}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="mt-2 block text-muted-foreground transition-colors hover:text-emerald"
        >
          {site.email}
        </a>
      </div>
      <div>
        <FieldLabel>{aside.whereLabel}</FieldLabel>
        <p className="mt-3 text-muted-foreground">{site.serviceArea}</p>
      </div>
      <div>
        <FieldLabel>{aside.nextLabel}</FieldLabel>
        <p className="mt-3 text-muted-foreground">{aside.nextBody}</p>
      </div>
    </div>
  );
}
