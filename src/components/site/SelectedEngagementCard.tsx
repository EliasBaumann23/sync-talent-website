import { ArrowRight } from "lucide-react";
import type { SelectedEngagement } from "@/lib/engagements";

/** Reusable Selected Engagement card — ready for a future Selected Engagements section. */
export function SelectedEngagementCard({ engagement: e }: { engagement: SelectedEngagement }) {
  return (
    <a
      href={`/selected-engagements/${e.slug}`}
      className="group flex flex-col gap-5 rounded-[10px] border border-hairline bg-white p-7 transition-colors hover:border-navy lg:p-9"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.16em]">
        <span className="text-ink-muted">{e.clientLabel}</span>
        <span className="text-navy">
          {e.industry} · {e.region}
        </span>
      </div>
      <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-turquoise">
        {e.position}
      </p>
      <h3 className="text-xl leading-snug">{e.headline}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{e.summary}</p>
      <p className="border-t border-hairline pt-4 text-[12px] text-ink-muted">{e.meta.join(" · ")}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-turquoise">
        Explore engagement <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

