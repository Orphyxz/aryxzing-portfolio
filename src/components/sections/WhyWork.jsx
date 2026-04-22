import { Gauge, Gem, ScanSearch, Target } from "lucide-react";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap = {
  "No template-looking design": Gem,
  "Clarity-first design thinking": Target,
  "Fast, responsive builds": Gauge,
  "Results over empty visuals": ScanSearch,
};

export function WhyWork({ points }) {
  return (
    <section id="why" className="relative scroll-mt-28 pt-24 sm:scroll-mt-32 sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Work With Me"
            title="Built for clients who want sharper work and a website that actually pulls its weight."
            description="The difference is not just styling. It is how quickly the site communicates value, how cleanly it guides attention, and how credible it feels in the first few seconds."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {points.map((point, index) => {
            const Icon = iconMap[point.title];

            return (
              <Reveal key={point.title} delay={index * 0.05}>
                <GlowCard className="h-full p-5 sm:p-6 lg:p-7">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-white/82">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white sm:mt-6 sm:text-xl">{point.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-white/62 sm:mt-4">{point.text}</p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
