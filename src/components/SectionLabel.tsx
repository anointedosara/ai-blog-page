export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-md bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-zinc-300 ${className}`}
    >
      {children}
    </span>
  );
}
