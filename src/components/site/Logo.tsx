import logoAsset from "@/assets/sync-talent-logo.png.asset.json";

export function Logo({ invert = false, className = "" }: { invert?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logoAsset.url}
        alt="Sync Talent"
        width={160}
        height={28}
        className="h-7 w-auto"
        style={invert ? { filter: "invert(1) brightness(2)" } : undefined}
      />
    </span>
  );
}
