export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-hairline bg-white">
      <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </div>
          {description && (
            <p className="max-w-xl text-base leading-relaxed text-ink-muted lg:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
