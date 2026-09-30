import { ArrowRight } from "lucide-react";
import type { SelectedEngagement } from "@/lib/engagements";

/** Reusable Selected Engagement card. `compact` omits the summary for shorter proof sections. */
export function SelectedEngagementCard({
  engagement: e,
  compact = false,
}: {
  engagement: SelectedEngagement;
  compact?: boolean;
}) {
  return (
    <a
      href={`/selected-engagements/${e.slug}`}
      className="group flex h-full flex-col rounded-[10px] border border-hairline bg-white p-7 transition-colors hover:border-navy lg:p-9"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">{e.clientLabel}</p>
      <p className="mt-1.5 text-[12px] text-ink-muted">
        {e.industry} · {e.region}
      </p>
      <p className="mt-6 text-[12px] font-medium uppercase tracking-[0.14em] text-turquoise">{e.position}</p>
      <h3 className="mt-3 text-xl leading-snug">{e.headline}</h3>
      {!compact && <p className="mt-4 text-sm leading-relaxed text-ink-muted">{e.summary}</p>}
      <div className="mt-auto pt-6">
        <p className="border-t border-hairline pt-4 text-[12px] text-ink-muted">{e.meta.join(" · ")}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
          Explore engagement <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}
