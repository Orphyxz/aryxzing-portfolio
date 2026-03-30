import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Process({ steps }) {
  return (
    <section id="process" className="relative pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A simple process that keeps the work clear, collaborative, and well executed."
            description="The workflow is built to stay practical: understand what the client needs, build with precision, share progress early, and refine until the final product feels right."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(246,185,117,0.45),rgba(93,210,255,0.08),transparent)] md:block" />
          <div className="grid gap-5">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="group relative rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl transition duration-300 hover:border-white/16 sm:p-7 md:pl-20">
                  <div className="absolute left-4 top-7 hidden h-5 w-5 rounded-full border border-glow-amber/35 bg-base shadow-[0_0_22px_rgba(246,185,117,0.35)] md:block" />
                  <div className="flex flex-col gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.34em] text-white/42">
                        0{index + 1}
                      </div>
                      <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-3xl leading-7 text-white/62">{step.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
