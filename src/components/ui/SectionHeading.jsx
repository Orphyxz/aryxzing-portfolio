export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const aligned = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${aligned}`}>
      <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60 backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-glow-amber" />
        {eyebrow}
      </div>
      <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg">{description}</p>
    </div>
  );
}
