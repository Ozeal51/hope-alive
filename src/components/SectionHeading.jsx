export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="section-title text-xs font-semibold uppercase text-[color:var(--gold)]">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight text-[color:var(--text-strong)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-[color:var(--text)] sm:text-lg">{description}</p>
    </div>
  )
}
