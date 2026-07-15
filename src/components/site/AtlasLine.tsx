/**
 * Atlas Decision Line — the recurring visual signature of Sync Talent.
 * Elegant nodes connected by thin lines. Used between methodology steps,
 * frameworks, timelines and section transitions. Never overuse.
 */
export function AtlasLine({
  nodes = 4,
  active = 0,
  className = "",
}: {
  nodes?: number;
  active?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: nodes }).map((_, i) => (
        <div key={i} className="flex flex-1 items-center gap-2 last:flex-none">
          <span
            className={
              i === active
                ? "block h-2 w-2 rounded-full bg-turquoise"
                : "block h-1.5 w-1.5 rounded-full border border-current opacity-60"
            }
          />
          {i < nodes - 1 && <span className="h-px flex-1 bg-current opacity-25" />}
        </div>
      ))}
    </div>
  );
}

export function AtlasDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 text-navy/40 ${className}`} aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full border border-current" />
      <span className="h-px w-16 bg-current opacity-60" />
      <span className="h-2 w-2 rounded-full bg-turquoise" />
      <span className="h-px w-16 bg-current opacity-60" />
      <span className="h-1.5 w-1.5 rounded-full border border-current" />
    </div>
  );
}
