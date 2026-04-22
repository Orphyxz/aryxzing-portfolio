import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { Reveal } from "../ui/Reveal";

export function Contact({ socialLinks }) {
  return (
    <section id="contact" className="relative scroll-mt-28 pb-20 pt-24 sm:scroll-mt-32 sm:pb-24 sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,40,0.88),rgba(7,10,22,0.96))] px-5 py-8 shadow-float sm:rounded-[34px] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,185,117,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(93,210,255,0.12),transparent_28%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)] lg:items-end lg:gap-10">
              <div className="max-w-3xl xl:max-w-[42rem]">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/58 backdrop-blur">
                  Final CTA
                </div>
                <h2 className="mt-6 max-w-[12ch] font-heading text-[clamp(2.1rem,5vw,4.25rem)] font-semibold leading-[1.03] text-white">
                  Your website shouldn&apos;t be the reason you&apos;re losing customers.
                </h2>
                <p className="mt-5 max-w-[36rem] text-base leading-7 text-white/66 sm:mt-6 sm:text-lg sm:leading-8">
                  Let&apos;s build something cleaner, sharper, and designed to actually move people to act.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
                  <MagneticButton href="mailto:aryxzing@gmail.com" className="w-full sm:w-auto sm:min-w-[11.5rem]">
                    Work With Me
                  </MagneticButton>
                  <MagneticButton href="#work" variant="secondary" className="w-full sm:w-auto sm:min-w-[10rem]">
                    View Projects
                  </MagneticButton>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-5">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-6">
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-white/42">
                    <Mail size={16} />
                    Email
                  </div>
                  <a
                    href="mailto:aryxzing@gmail.com"
                    className="mt-4 inline-flex break-all text-lg font-semibold text-white transition hover:text-glow-amber"
                  >
                    <span>aryxzing@gmail.com</span>
                    <ArrowUpRight size={16} className="ml-2 shrink-0" />
                  </a>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-6">
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-white/42">
                    <MapPin size={16} />
                    Availability
                  </div>
                  <p className="mt-4 text-lg font-semibold text-white">Open for freelance work</p>
                  <p className="mt-1 text-white/52">Available for landing pages, business websites, portfolio sites, and frontend-heavy builds.</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-6">
                  <div className="text-sm uppercase tracking-[0.28em] text-white/42">Socials</div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/72 transition hover:border-glow-cyan/30 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
