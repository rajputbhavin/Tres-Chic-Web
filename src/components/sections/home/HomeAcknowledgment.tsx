import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeAcknowledgment } from "@/data/home";

/** Section 2. The quiet acknowledgment of everything a couple is carrying. */
export function HomeAcknowledgment() {
  return (
    <Section className="py-24 text-center md:py-36">
      <Reveal className="mx-auto max-w-[42rem]">
        <p className="font-display text-[1.375rem] leading-[1.55] text-emerald md:text-[1.75rem]">
          {homeAcknowledgment.body}
        </p>
        <p className="mt-8 font-display text-[1.375rem] text-gold md:text-[1.75rem]">
          {homeAcknowledgment.close}
        </p>
      </Reveal>
    </Section>
  );
}
