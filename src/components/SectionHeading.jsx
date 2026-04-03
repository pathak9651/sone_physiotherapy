export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <div className="mb-3 inline-flex rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}
