import { LayoutTemplate, RefreshCcw, Send, ShieldCheck } from "lucide-react";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap = {
  "Static Websites": LayoutTemplate,
  "Full-Stack Websites": Send,
  "Cloudflare Deployment": ShieldCheck,
  "Website Redesigns": RefreshCcw,
};

export function Services({ services }) {
  return (
    <section id="services" className="relative pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Built for clients who want sharp design backed by real technical ability."
            description="Whether the project needs a high-trust website, a more capable full-stack build, or a cleaner redesign, the work stays custom, responsive, and deliberately polished."
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
