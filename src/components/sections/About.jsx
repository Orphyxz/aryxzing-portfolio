import { BriefcaseBusiness, LayoutPanelTop, Sparkles, Target } from "lucide-react";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap = {
  "Who I help": BriefcaseBusiness,
  "What I build": LayoutPanelTop,
  "What makes it different": Target,
  "How I work": Sparkles,
};

export function About({ strengths }) {
  return (
    <section id="value" className="relative scroll-mt-28 pt-24 sm:scroll-mt-32 sm:pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] lg:items-start lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Value"
            title="If the website feels average, people assume the business is too."
            description="I help startups and businesses replace weak, generic web presence with something sharper, clearer, and easier to trust. The point is not just better visuals. It is a better first impression, better structure, and a stronger reason to take action."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {strengths.map((item, index) => {
            const Icon = iconMap[item.title];

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <GlowCard className="h-full p-5 sm:p-6 lg:p-7">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-white/80">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white sm:mt-6 sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-white/62 sm:mt-4">{item.text}</p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
