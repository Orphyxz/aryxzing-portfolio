import { ArrowUpRight } from "lucide-react";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function FeaturedWork({ projects, onProjectOpen }) {
  return (
    <section id="work" className="relative scroll-mt-28 pt-28 sm:scroll-mt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Work"
            title="Real projects across websites, dashboards, and full-stack product workflows."
            description="This work now goes beyond static visuals. It includes service websites, admin systems, student platforms, analytics dashboards, and interface decisions built to create trust fast."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <GlowCard className="h-full">
                <button
                  type="button"
                  onClick={() => onProjectOpen(project)}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-[28px] text-left"
                >
                  <div className={`relative overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.accent}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)]" />
                    <div className="relative p-4 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-[11px] sm:tracking-[0.34em]">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      <div className="mt-5 rounded-[22px] border border-white/10 bg-[#081122]/82 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:mt-8 sm:rounded-[24px] sm:p-4">
                        <div className="mb-4 flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#f6b975]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#5dd2ff]" />
                        </div>
                        {project.thumbnail ? (
                          <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#0a1222]">
                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              className="h-44 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] sm:h-56"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        ) : (
                          <div className="grid gap-3 sm:grid-cols-[1.1fr,0.9fr]">
                            <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                              <div className="h-3 w-24 rounded-full bg-white/20" />
                              <div className="mt-3 h-3 w-40 rounded-full bg-white/10" />
                              <div className="mt-6 h-28 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))]" />
                            </div>
                            <div className="space-y-3">
                              <div className="h-16 rounded-[18px] bg-white/[0.05]" />
                              <div className="h-16 rounded-[18px] bg-white/[0.05]" />
                              <div className="h-16 rounded-[18px] bg-white/[0.05]" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-white/64 sm:text-base sm:leading-7">
                          {project.summary}
                        </p>
                      </div>
                      <span className="hidden rounded-full border border-white/10 bg-white/[0.04] p-3 text-white/70 transition duration-300 group-hover:border-glow-amber/30 group-hover:text-glow-amber sm:inline-flex">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/62"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-white/8 pt-5 text-sm leading-6 text-white/58 sm:mt-8">
                      {project.impact}
                    </div>
                  </div>
                </button>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
