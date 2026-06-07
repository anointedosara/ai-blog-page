type LogoProps = {
  className?: string;
  withWordmark?: boolean;
  size?: number;
};

/**
 * FutureTech mark — two interlocking swirl hooks.
 */
export function Logo({ className, withWordmark = true, size = 30 }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        stroke="var(--brand)"
        strokeWidth={5.5}
        strokeLinecap="round"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M24 24c0-7 5-11 12-10" />
        <path d="M24 24c0-7 5-11 12-10" transform="rotate(90 24 24)" />
        <path d="M24 24c0-7 5-11 12-10" transform="rotate(180 24 24)" />
        <path d="M24 24c0-7 5-11 12-10" transform="rotate(270 24 24)" />
      </svg>
      {withWordmark && (
        <span className="text-lg font-semibold tracking-tight text-white">
          FutureTech
        </span>
      )}
    </span>
  );
}
