/**
 * Marks an asset the blueprint requires but that does not exist yet.
 * Never ships as a stand-in for a real client photograph, and must never be
 * replaced with stock imagery.
 */
export function AssetGap({ label, ratio = "4 / 5" }: { label: string; ratio?: string }) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className="flex w-full items-center justify-center border border-dashed border-taupe bg-neutral-soft p-6"
    >
      <p className="caption max-w-[22ch] text-center leading-relaxed">{label}</p>
    </div>
  );
}
