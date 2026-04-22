import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { Reveal } from "../ui/Reveal";

export function Hero({ trustSignals, heroStats, showcaseProjects = [] }) {
  const [primaryProject, secondaryProject] = showcaseProjects;

  return (
    <section id="top" className="relative overflow-hidden scroll-mt-28 pt-28 sm:scroll-mt-32 sm:pt-32 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr,0.98fr] lg:gap-14 lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <Reveal>
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60 backdrop-blur-xl sm:gap-3 sm:text-[11px] sm:tracking-[0.28em]">
              <Sparkles size={14} className="shrink-0 text-glow-amber" />
              <span className="break-words">Freelance website design / development / results-first builds</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading text-[2.35rem] font-semibold leading-[0.96] text-white sm:mt-7 sm:text-6xl lg:text-[5.6rem]">
              Websites that turn
              <span className="bg-[linear-gradient(120deg,#ffffff_0%,#f6b975_38%,#8fdfff_78%,#ffffff_100%)] bg-clip-text text-transparent">{" "}visitors{" "}</span>
              into customers.
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/66 sm:mt-8 sm:text-xl sm:leading-8">
              I design and build modern, high-performing websites for startups and businesses that actually want results.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.18em] text-white/50 sm:text-[13px] sm:tracking-[0.26em]">
              Most websites lose users in the first few seconds. I design around that.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <MagneticButton href="#contact" className="w-full gap-2 sm:w-auto sm:min-w-[11.5rem]">
                Work With Me
                <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href="#work" variant="secondary" className="w-full sm:w-auto sm:min-w-[10rem]">
                View Projects
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-8 grid gap-3 text-sm text-white/56 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur transition duration-300 hover:border-white/14 hover:bg-white/[0.05]"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-glow-cyan/80 shadow-[0_0_18px_rgba(93,210,255,0.7)]" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          className="relative flex min-h-0 flex-col gap-4 rounded-[28px] border border-white/10 p-3 shadow-float sm:min-h-[620px] sm:rounded-[32px] sm:p-0 lg:block lg:min-h-[640px] lg:border-0 lg:p-0"
          delay={0.18}
        >
          <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,19,40,0.82),rgba(6,10,22,0.4))] shadow-float sm:rounded-[32px]">
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
            className="relative z-10 w-full rounded-[24px] border border-white/12 bg-[#0c152d]/80 p-4 shadow-halo backdrop-blur-2xl sm:absolute sm:left-6 sm:top-6 sm:w-[min(78vw,23rem)] sm:rounded-[28px] sm:p-5 lg:left-10 lg:top-10 lg:p-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f6b975]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5dd2ff]" />
            </div>

            {primaryProject ? (
              <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01))] p-4 sm:rounded-[24px] sm:p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-white/45">Featured client-style build</div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-heading text-lg font-semibold text-white sm:text-2xl">
                      {primaryProject.title}
                    </div>
                    <div className="mt-1 text-sm text-white/55">{primaryProject.category}</div>
                  </div>
                  <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/52">
                    {primaryProject.year}
                  </div>
                </div>
                <div className="mt-5 overflow-hidden rounded-[18px] border border-white/10 bg-[#081122] sm:rounded-[22px]">
                  <img
                    src={primaryProject.thumbnail}
                    alt={primaryProject.title}
                    className="h-40 w-full object-cover object-top sm:h-48"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-white/62">{primaryProject.result}</p>
              </div>
            ) : null}
          </motion.div>

          <motion.div
            className="relative z-10 w-full rounded-[24px] border border-white/12 bg-[#0c152a]/78 p-4 shadow-halo backdrop-blur-2xl sm:absolute sm:bottom-10 sm:right-6 sm:w-[min(72vw,20rem)] sm:rounded-[28px] sm:p-5 lg:bottom-12 lg:right-4"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-4 text-xs uppercase tracking-[0.28em] text-white/45">What I help with</div>
            <div className="space-y-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[20px] border border-white/10 bg-white/[0.05] p-4 sm:rounded-[22px]"
                >
                  <div className="font-heading text-xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-white/55">{stat.label}</div>
                </div>
              ))}
            </div>

            {secondaryProject ? (
              <div className="mt-4 rounded-[20px] border border-white/10 bg-[#0a1224]/85 p-4 sm:rounded-[22px]">
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/42">Recent example</div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#081122] sm:h-16 sm:w-16">
                    <img
                      src={secondaryProject.thumbnail}
                      alt={secondaryProject.title}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-heading text-base font-semibold text-white sm:text-lg">
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
