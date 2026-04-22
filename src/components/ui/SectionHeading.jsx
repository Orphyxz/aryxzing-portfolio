export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const aligned = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-[56rem] ${aligned}`}>
      <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 backdrop-blur sm:mb-5 sm:text-[11px] sm:tracking-[0.32em]">
        <span className="h-1.5 w-1.5 rounded-full bg-glow-amber" />
        {eyebrow}
      </div>
      <h2 className="max-w-[16ch] font-heading text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-[1.02] text-white">
        {title}
      </h2>
      <p className="mt-4 max-w-[42rem] text-[0.98rem] leading-7 text-white/65 sm:mt-5 sm:text-[1.05rem] sm:leading-8">
        {description}
      </p>
    </div>
  );
}
