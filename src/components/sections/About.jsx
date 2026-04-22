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
    <section id="value" className="relative scroll-mt-28 pt-28 sm:scroll-mt-32 sm:pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr,1.1fr] lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Value"
            title="If the website feels average, people assume the business is too."
            description="I help startups and businesses replace weak, generic web presence with something sharper, clearer, and easier to trust. The point is not just better visuals. It is a better first impression, better structure, and a stronger reason to take action."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {strengths.map((item, index) => {
            const Icon = iconMap[item.title];

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <GlowCard className="h-full p-6 sm:p-7">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-white/80">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/62">{item.text}</p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
