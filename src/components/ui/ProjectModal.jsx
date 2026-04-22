import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

export function ProjectModal({ project, onClose }) {
  const [selectedShot, setSelectedShot] = useState(null);

  useEffect(() => {
    setSelectedShot(null);
  }, [project]);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (selectedShot) {
        setSelectedShot(null);
        return;
      }

      onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, project, selectedShot]);

  const scopeItems = project?.scope?.length
    ? project.scope
    : [
        { label: "UI Design", value: "End to end" },
        { label: "Build", value: "Production-ready website" },
      ];

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#03050f]/82 p-2 backdrop-blur-xl sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative my-4 max-h-[calc(100vh-1rem)] w-full max-w-4xl overflow-y-auto rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,40,0.96),rgba(8,10,22,0.97))] shadow-float sm:my-0 sm:max-h-[calc(100vh-2rem)] sm:rounded-[32px]"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={18} />
            </button>

            <div className={`relative overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.accent}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%)]" />
              <div className="relative grid gap-6 px-4 pb-5 pt-14 sm:px-8 sm:pb-8 sm:pt-16 lg:grid-cols-[1.1fr,0.9fr] lg:gap-8 lg:px-12">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/55">
                    <span>{project.category}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/72 sm:text-lg sm:leading-7">
                    {project.problem}
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-[#07101f]/65 p-5 backdrop-blur-xl">
                  <div className="mb-3 text-xs uppercase tracking-[0.28em] text-white/45">What I Improved</div>
                  <p className="text-lg font-medium text-white/88">{project.improved}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/68"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 px-4 py-5 sm:px-8 sm:py-8 lg:grid-cols-[1.1fr,0.9fr] lg:gap-8 lg:px-12">
              <div>
                {project.screenshots?.length ? (
                  <>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/45">Selected Screens</div>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {project.screenshots.map((shot) => (
                        <button
                          key={shot.src}
                          type="button"
                          onClick={() => setSelectedShot(shot)}
                          className="group overflow-hidden rounded-[22px] border border-white/10 bg-[#081122] text-left transition hover:border-glow-cyan/35"
                          aria-label={`Open ${shot.label}`}
                        >
                          <div className="relative">
                            <img
                              src={shot.src}
                              alt={`${project.title} - ${shot.label}`}
                              className="h-36 w-full object-cover object-top transition duration-300 group-hover:scale-[1.02] sm:h-48"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,5,15,0.2))]" />
                            <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#07101f]/78 px-3 py-1 text-[11px] font-medium text-white/78 backdrop-blur">
                              <Search size={12} />
                              Zoom
                            </div>
                          </div>
                          <div className="border-t border-white/8 px-4 py-3 text-sm text-white/62">
                            {shot.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                <div className="mt-8 text-xs uppercase tracking-[0.3em] text-white/45">Case Study Notes</div>
                <div className="mt-5 space-y-4">
                  {project.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-white/72"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-white/45">Outcome</div>
                <p className="mt-4 text-xl font-semibold leading-8 text-white">{project.result}</p>
                <div className="mt-8 text-sm uppercase tracking-[0.28em] text-white/45">Scope</div>
                <div className="mt-4 space-y-3 text-white/68">
                  {scopeItems.map((item) => (
                    <div
                      key={`${project.title}-${item.label}`}
                      className="flex items-center justify-between gap-4 border-b border-white/8 pb-3"
                    >
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-glow-amber"
                >
                  Discuss a build like this
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <AnimatePresence>
              {selectedShot ? (
                <motion.div
                  className="absolute inset-0 z-20 flex items-center justify-center bg-[#03050f]/92 p-2 backdrop-blur-xl sm:p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedShot(null)}
                >
                  <motion.div
                    className="relative w-full max-w-6xl"
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: 12 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-[#07101f]/78 p-2 text-white/75 transition hover:bg-white/10 hover:text-white"
                      onClick={() => setSelectedShot(null)}
                      aria-label="Close image preview"
                    >
                      <X size={18} />
                    </button>
                    <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#081122] shadow-float sm:rounded-[24px]">
                      <img
                        src={selectedShot.src}
                        alt={`${project.title} - ${selectedShot.label}`}
                        className="max-h-[72vh] w-full object-contain bg-[#050915] sm:max-h-[78vh]"
                        decoding="async"
                      />
                    </div>
                    <div className="mt-3 px-1 text-sm text-white/68 sm:text-base">
                      {selectedShot.label}
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
