import { ArrowUpRight } from "lucide-react";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function FeaturedWork({ projects, onProjectOpen }) {
  return (
    <section id="work" className="relative scroll-mt-28 pt-24 sm:scroll-mt-32 sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Projects"
            title="Selected work that shows how I think about clarity, positioning, and stronger conversion flow."
            description="These projects are presented like short case studies so the thinking is visible, not just the final screen design."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <GlowCard className="h-full shadow-[0_22px_60px_rgba(3,6,18,0.34)]">
                <button
                  type="button"
                  onClick={() => onProjectOpen(project)}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-[28px] text-left transition-transform duration-300"
                >
                    <div className={`relative overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.accent}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)]" />
                    <div className="relative p-4 sm:p-5 lg:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-white/58 sm:text-[11px] sm:tracking-[0.34em]">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      <div className="mt-5 rounded-[22px] border border-white/10 bg-[#081122]/82 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:mt-6 sm:rounded-[24px] sm:p-4">
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
                              className="aspect-[5/3] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                              loading="lazy"
                              decoding="async"
                              width="900"
                              height="540"
                              sizes="(max-width: 1024px) calc(100vw - 3rem), 38rem"
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

                  <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-white sm:text-[1.75rem]">{project.title}</h3>
                        <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/42 sm:text-sm">
                          {project.category}
                        </p>
                        <p className="mt-4 max-w-[34rem] text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
                          {project.summary}
                        </p>
                      </div>
                      <span className="hidden rounded-full border border-white/10 bg-white/[0.04] p-3 text-white/70 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-glow-amber/30 group-hover:text-glow-amber sm:inline-flex">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    <div className="mt-6 grid gap-4 rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-4 sm:p-5">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.26em] text-white/42">Challenge</div>
                        <p className="mt-2 text-sm leading-6 text-white/76">{project.problem}</p>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.26em] text-white/42">What I Improved</div>
                        <p className="mt-2 text-sm leading-6 text-white/76">{project.improved}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/66 transition duration-300 hover:border-white/18 hover:bg-white/[0.07]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-white/8 pt-5 sm:mt-7">
                      <div className="text-[10px] uppercase tracking-[0.26em] text-white/42">Outcome</div>
                      <div className="mt-2 text-sm leading-6 text-white/84">
                        {project.result}
                      </div>
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
