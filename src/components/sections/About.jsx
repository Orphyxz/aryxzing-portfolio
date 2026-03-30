import { Code2, Palette, Rocket, Smartphone } from "lucide-react";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap = {
  "UI/UX Design": Palette,
  "Frontend Development": Code2,
  "Responsive Design": Smartphone,
  "Conversion Thinking": Rocket,
};

export function About({ strengths }) {
  return (
    <section id="about" className="relative pt-28 sm:pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr,1.1fr] lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A designer-developer profile shaped by real builds, not just polished mockups."
            description="I&apos;m Aryxzing, a web designer and full-stack developer focused on building websites and web platforms that feel sharp, modern, and credible. My work now spans premium marketing sites, admin dashboards, student-facing systems, MongoDB-backed applications, and AI/ML-aware product thinking when the project calls for smarter functionality."
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
