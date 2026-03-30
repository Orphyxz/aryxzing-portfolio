import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { Reveal } from "../ui/Reveal";

export function Hero({ trustSignals, heroStats, showcaseProjects = [] }) {
  const [primaryProject, secondaryProject] = showcaseProjects;

  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-32 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr,0.98fr] lg:gap-14 lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <Reveal>
            <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 backdrop-blur-xl sm:text-[11px] sm:tracking-[0.32em]">
              <Sparkles size={14} className="shrink-0 text-glow-amber" />
              <span className="truncate">Fiverr freelancer • designer • full-stack builder</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading text-[2.85rem] font-semibold leading-[0.95] text-white sm:mt-7 sm:text-6xl lg:text-[5.6rem]">
              I design and build websites that make you look
              <span className="bg-[linear-gradient(120deg,#ffffff_0%,#f6b975_38%,#8fdfff_78%,#ffffff_100%)] bg-clip-text text-transparent">
                {" "}instantly credible.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/66 sm:mt-8 sm:text-xl sm:leading-8">
              I build premium websites, dashboards, and full-stack platforms for brands,
              businesses, and founders who need sharper design, cleaner UX, and a stronger
              digital presence. The goal is simple: fast, polished work that feels high trust
              from the first click.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href="#work" className="w-full gap-2 sm:w-auto">
                View Work
                <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary" className="w-full sm:w-auto">
                Let&apos;s Talk
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 grid gap-3 text-sm text-white/56 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur"
                >
                  <span className="h-2 w-2 rounded-full bg-glow-cyan/80 shadow-[0_0_18px_rgba(93,210,255,0.7)]" />
                  {signal}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          className="relative flex min-h-0 flex-col gap-4 rounded-[32px] border border-white/10 p-4 shadow-float sm:min-h-[620px] sm:p-0 lg:block lg:min-h-[640px] lg:border-0 lg:p-0"
          delay={0.18}
        >
          <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,19,40,0.82),rgba(6,10,22,0.4))] shadow-float">
            <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(246,185,117,0.16),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(93,210,255,0.12),transparent_26%)]" />
          </div>

          <motion.div
            className="absolute right-2 top-4 hidden h-28 w-28 rounded-full bg-glow-amber/25 blur-3xl sm:block sm:right-10 sm:top-10 sm:h-40 sm:w-40"
            animate={{ scale: [1, 1.12, 0.96, 1], opacity: [0.35, 0.55, 0.28, 0.35] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-6 left-4 hidden h-32 w-32 rounded-full bg-glow-cyan/14 blur-3xl sm:block sm:bottom-12 sm:left-12 sm:h-48 sm:w-48"
            animate={{ scale: [1, 0.95, 1.08, 1], opacity: [0.3, 0.46, 0.26, 0.3] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative z-10 w-full rounded-[28px] border border-white/12 bg-[#0c152d]/80 p-4 shadow-halo backdrop-blur-2xl sm:absolute sm:left-6 sm:top-6 sm:w-[min(78vw,23rem)] sm:p-5 lg:left-10 lg:top-10 lg:p-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f6b975]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5dd2ff]" />
            </div>

            {primaryProject ? (
              <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01))] p-5">
                <div className="text-xs uppercase tracking-[0.34em] text-white/45">Featured build</div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-heading text-xl font-semibold text-white sm:text-2xl">
                      {primaryProject.title}
                    </div>
                    <div className="mt-1 text-sm text-white/55">{primaryProject.category}</div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/52">
                    {primaryProject.year}
                  </div>
                </div>
                <div className="mt-5 overflow-hidden rounded-[22px] border border-white/10 bg-[#081122]">
                  <img
                    src={primaryProject.thumbnail}
                    alt={primaryProject.title}
                    className="h-48 w-full object-cover object-top"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-white/62">{primaryProject.impact}</p>
              </div>
            ) : null}
          </motion.div>

          <motion.div
            className="relative z-10 w-full rounded-[28px] border border-white/12 bg-[#0c152a]/78 p-4 shadow-halo backdrop-blur-2xl sm:absolute sm:bottom-10 sm:right-6 sm:w-[min(72vw,20rem)] sm:p-5 lg:bottom-12 lg:right-4"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-4 text-xs uppercase tracking-[0.34em] text-white/45">Capability stack</div>
            <div className="space-y-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.05] p-4"
                >
                  <div className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-white/55">{stat.label}</div>
                </div>
              ))}
            </div>

            {secondaryProject ? (
              <div className="mt-4 rounded-[22px] border border-white/10 bg-[#0a1224]/85 p-4">
                <div className="text-[10px] uppercase tracking-[0.32em] text-white/42">Also built</div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-[#081122]">
                    <img
                      src={secondaryProject.thumbnail}
                      alt={secondaryProject.title}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-heading text-lg font-semibold text-white">
                      {secondaryProject.title}
                    </div>
                    <div className="mt-1 text-sm text-white/55">{secondaryProject.category}</div>
                  </div>
                </div>
              </div>
            ) : null}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
