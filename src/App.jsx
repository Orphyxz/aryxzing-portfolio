import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  featuredProjects,
  heroStats,
  navItems,
  processSteps,
  services,
  socialLinks,
  strengths,
  trustSignals,
} from "./data/content";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { FeaturedWork } from "./components/sections/FeaturedWork";
import { Hero } from "./components/sections/Hero";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";
import { BackgroundFX } from "./components/ui/BackgroundFX";
import { ProjectModal } from "./components/ui/ProjectModal";

function App() {
  const [activeSection, setActiveSection] = useState("work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const updateActiveSection = () => {
      const headerOffset = 120;
      const probeY = window.scrollY + headerOffset + window.innerHeight * 0.2;

      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) {
          return;
        }

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (probeY >= top && probeY < bottom) {
          currentSection = id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentSection);
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });

      ticking = true;
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  useEffect(() => {
    const hasSeenLoader = window.sessionStorage.getItem("aryxzing-loader-seen") === "1";

    if (hasSeenLoader) {
      setIsLoaded(true);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem("aryxzing-loader-seen", "1");
      setIsLoaded(true);
    }, 650);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject || menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, selectedProject]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base text-white">
      <BackgroundFX />

      <AnimatePresence>
        {!isLoaded ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#02040d]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          >
            <motion.div
              className="px-4 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-heading text-2xl font-semibold tracking-[0.18em] text-white sm:text-3xl">
                ARYXZING
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-white/42 sm:text-xs sm:tracking-[0.45em]">
                Premium websites and full-stack builds
              </div>
              <div className="mx-auto mt-8 h-px w-40 overflow-hidden bg-white/10 sm:w-52">
                <motion.div
                  className="h-full bg-[linear-gradient(90deg,transparent,rgba(246,185,117,0.95),transparent)]"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.15, ease: "easeInOut", repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto max-w-7xl rounded-full border border-white/10 bg-[rgba(8,12,24,0.72)] px-3 py-3 shadow-halo backdrop-blur-2xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] font-heading text-sm font-semibold tracking-[0.28em] text-white sm:h-11 sm:w-11">
                A
              </div>
              <div className="min-w-0">
                <div className="truncate font-heading text-xs font-semibold uppercase tracking-[0.24em] text-white sm:text-sm sm:tracking-[0.28em]">
                  Aryxzing
                </div>
                <div className="hidden text-xs text-white/42 sm:block">Freelance designer, developer, and web product builder</div>
              </div>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-white/56 hover:text-white/82"
                  }`}
                >
                  {activeSection === item.id ? (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.06]"
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/75 transition hover:bg-white/[0.08] lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-30 bg-[#040714]/80 px-4 pt-24 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-auto max-w-xl rounded-[28px] border border-white/10 bg-[#0c1328]/96 p-5 shadow-float sm:rounded-[30px] sm:p-6"
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 18, opacity: 0 }}
            >
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="block rounded-2xl border border-transparent px-4 py-4 text-lg text-white/72 transition hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-glow-amber/25 bg-[linear-gradient(135deg,rgba(246,185,117,0.2),rgba(255,255,255,0.08))] px-5 py-3 text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="relative z-10">
        <Hero
          trustSignals={trustSignals}
          heroStats={heroStats}
          showcaseProjects={[
            featuredProjects.find((project) => project.title === "Aptisense"),
            featuredProjects.find((project) => project.title === "E-Placement Hub"),
          ].filter(Boolean)}
        />
        <FeaturedWork projects={featuredProjects} onProjectOpen={setSelectedProject} />
        <About strengths={strengths} />
        <Services services={services} />
        <Process steps={processSteps} />
        <Contact socialLinks={socialLinks} />
      </main>

      <footer className="relative z-10 border-t border-white/8 px-5 py-8 text-sm text-white/45 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">Copyright 2026 Aryxzing. All rights reserved.</div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
