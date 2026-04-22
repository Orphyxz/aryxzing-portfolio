import { BriefcaseBusiness, LayoutTemplate, MonitorSmartphone, PanelsTopLeft } from "lucide-react";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap = {
  "Landing Pages": PanelsTopLeft,
  "Business Websites": BriefcaseBusiness,
  "Portfolio Websites": LayoutTemplate,
  "Frontend Development": MonitorSmartphone,
};

export function Services({ services }) {
  return (
    <section id="services" className="relative scroll-mt-28 pt-28 sm:scroll-mt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What I Can Help With"
            title="The kind of web work businesses usually need, done with more polish and better execution."
            description="Whether you need a sharper landing page, a stronger business website, or frontend implementation that actually feels premium, the work stays focused, responsive, and built around outcomes."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.title];

            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <GlowCard className="h-full p-6 sm:p-7">
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-white/82">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/62">{service.description}</p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
