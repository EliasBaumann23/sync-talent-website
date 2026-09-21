import logo from "@/assets/sync-talent-logo.png";

export function Logo({ invert = false, className = "" }: { invert?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logo}
        alt="Sync Talent"
        width={160}
        height={28}
        className="h-7 w-auto"
        style={invert ? { filter: "invert(1) brightness(2)" } : undefined}
      />
    </span>
  );
}
