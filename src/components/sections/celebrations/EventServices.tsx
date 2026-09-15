import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { eventServices } from "@/data/celebrations";

export function EventServices() {
  return (
    <Section tone="soft">
      <Reveal className="max-w-3xl">
        <Eyebrow>Events services</Eyebrow>
        <h2 className="display-lg rule-gold mt-5 text-emerald">A proposal shaped around your celebration.</h2>
        <p className="mt-8 text-muted-foreground">
          Events are priced individually because guest count, venue, design scope and production needs vary. After an initial conversation, you will receive a clear custom proposal.
        </p>
      </Reveal>

      <div className="mt-14 grid border-t border-border lg:grid-cols-3">
        {eventServices.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 100}
            className="border-b border-border py-9 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
          >
            <p className="eyebrow text-gold">0{index + 1}</p>
            <h3 className="display-md mt-4 text-emerald">{service.title}</h3>
            <div className="mt-6 border-y border-gold/60 py-4">
              <p className="eyebrow text-muted-foreground">Investment</p>
              <p className="mt-1 font-display text-2xl text-emerald">{service.investment}</p>
            </div>
            <p className="mt-6 text-muted-foreground">{service.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12" delay={250}>
        <CtaButton to="/start-planning">Request Your Proposal</CtaButton>
      </Reveal>
    </Section>
  );
}