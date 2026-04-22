export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const aligned = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-4xl ${aligned}`}>
      <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60 backdrop-blur sm:text-[11px] sm:tracking-[0.35em]">
        <span className="h-1.5 w-1.5 rounded-full bg-glow-amber" />
        {eyebrow}
      </div>
      <h2 className="font-heading text-[2.2rem] font-semibold leading-[1.02] text-white sm:text-4xl lg:text-[3.35rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-7 text-white/65 sm:text-lg">{description}</p>
    </div>
  );
}
