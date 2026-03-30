import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { Reveal } from "../ui/Reveal";

export function Contact({ socialLinks }) {
  return (
    <section id="contact" className="relative pb-24 pt-28 sm:pb-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,40,0.88),rgba(7,10,22,0.96))] px-5 py-8 shadow-float sm:rounded-[34px] sm:px-8 sm:py-14 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,185,117,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(93,210,255,0.12),transparent_28%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-end">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/58 backdrop-blur">
                  Final CTA
                </div>
                <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Need a website that looks sharp and works properly?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/66 sm:mt-6 sm:text-lg sm:leading-8">
                  If you want something more than a decent-looking template, I can help you build a
                  site that feels premium, responsive, and clearly above average from the first few seconds.
                </p>
                <div className="mt-10">
                  <MagneticButton href="#work" variant="secondary" className="w-full sm:w-auto">
                    Revisit Work
                  </MagneticButton>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
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
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-white/42">
                    <MapPin size={16} />
                    Availability
                  </div>
                  <p className="mt-4 text-lg font-semibold text-white">Open for freelance work</p>
                  <p className="mt-1 text-white/52">Available for direct clients, business websites, and full custom builds.</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
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
