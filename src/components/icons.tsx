import type { SVGProps } from "react";

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Heart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 21s-7.5-4.6-10-9.3C.6 8.9 2 5.5 5.2 5c1.9-.3 3.7.6 4.8 2.1C11.1 5.6 12.9 4.7 14.8 5 18 5.5 19.4 8.9 18 11.7 15.5 16.4 12 21 12 21Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeartOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 11.7C16.5 16.4 12 21 12 21s-7.5-4.6-10-9.3C.6 8.9 2 5.5 5.2 5c1.9-.3 3.7.6 4.8 2.1C11.1 5.6 12.9 4.7 14.8 5 18 5.5 19.4 8.9 19 11.7Z" />
    </svg>
  );
}

export function Comment(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z" />
    </svg>
  );
}

export function Share(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
    </svg>
  );
}

export function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
    </svg>
  );
}

export function Eye(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      {...props}
    >
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

export function HighlightNewsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      strokeLinecap="round"
      {...props}
    >
      <g stroke="#5a5a5a">
        <line x1="5.5" y1="5.5" x2="9" y2="9" />
        <line x1="18.5" y1="5.5" x2="15" y2="9" />
        <line x1="5.5" y1="18.5" x2="9" y2="15" />
        <line x1="18.5" y1="18.5" x2="15" y2="15" />
      </g>
      <g stroke="var(--brand)">
        <line x1="12" y1="3" x2="12" y2="8.5" />
        <line x1="12" y1="15.5" x2="12" y2="21" />
        <line x1="3" y1="12" x2="8.5" y2="12" />
        <line x1="15.5" y1="12" x2="21" y2="12" />
      </g>
    </svg>
  );
}

export function HighlightExpertsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="8.5" cy="8.5" r="4.5" fill="var(--brand)" />
      <circle cx="16" cy="8" r="3" fill="#5a5a5a" />
      <circle cx="8" cy="16" r="3" fill="#5a5a5a" />
      <circle cx="15.5" cy="15.5" r="4.5" fill="var(--brand)" />
    </svg>
  );
}

export function HighlightGlobalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3c5 3 5 12 0 18-5-6-5-15 0-18Z"
        fill="#5a5a5a"
      />
      <path d="M12 3c5 3 5 12 0 18V3Z" fill="var(--brand)" />
    </svg>
  );
}

export function ResourceFeaturedIconA(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="13" y="22" width="11" height="11" rx="1" fill="#5a5a5a" />
      <path d="M20 13h15v15l-6-6-9 9V13Z" fill="var(--brand)" />
    </svg>
  );
}

export function ResourceFeaturedIconB(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M14 19h14v14l-7-5-7 5V19Z" fill="#5a5a5a" />
      <path d="M19 14h14v14l-7-5-7 5V14Z" fill="var(--brand)" />
    </svg>
  );
}

export function PodcastRevolutionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <g transform="rotate(-35 24 24)">
        <rect x="11" y="25" width="26" height="9" rx="4.5" fill="#5a5a5a" />
        <rect x="11" y="14" width="26" height="9" rx="4.5" fill="var(--brand)" />
      </g>
    </svg>
  );
}

export function PodcastConversationsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M10 9h28L24 26 10 9Z" fill="var(--brand)" />
      <path d="M15 39h18L24 26 15 39Z" fill="#5a5a5a" />
    </svg>
  );
}

export function ResourceEbookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M14 10 26 17 26 31 14 38Z" fill="#5a5a5a" />
      <path d="M26 17 38 24 26 31Z" fill="var(--brand)" />
    </svg>
  );
}

export function ResourceWhitepaperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M14 10 26 17 26 31 14 38Z" fill="var(--brand)" />
      <path d="M26 17 38 24 26 31Z" fill="#5a5a5a" />
    </svg>
  );
}

export function FlowerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <g fill="#5a5a5a">
        <ellipse cx="24" cy="13" rx="6.5" ry="9" />
        <ellipse cx="24" cy="13" rx="6.5" ry="9" transform="rotate(72 24 24)" />
        <ellipse cx="24" cy="13" rx="6.5" ry="9" transform="rotate(144 24 24)" />
        <ellipse cx="24" cy="13" rx="6.5" ry="9" transform="rotate(216 24 24)" />
        <ellipse cx="24" cy="13" rx="6.5" ry="9" transform="rotate(288 24 24)" />
      </g>
      <circle cx="24" cy="24" r="5.5" fill="var(--brand)" />
    </svg>
  );
}

export function FeatureBlogIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M7 24 16 19v10L7 24Z" fill="#5a5a5a" />
      <path d="M41 24 32 19v10l9-5Z" fill="#5a5a5a" />
      <path
        d="M24 24a4 4 0 0 1-4-4v-8a4 4 0 0 1 8 0v8a4 4 0 0 1-4 4Z"
        fill="var(--brand)"
      />
      <path
        d="M24 24a4 4 0 0 1 4 4v8a4 4 0 0 1-8 0v-8a4 4 0 0 1 4-4Z"
        fill="#5a5a5a"
      />
    </svg>
  );
}

export function FeatureResearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M21 31 14 16l-6 15h13Z" fill="#5a5a5a" />
      <path d="M34 31 27 16l-7 15h14Z" fill="#7a7a7a" />
      <rect x="16" y="32" width="16" height="8" rx="2.5" fill="var(--brand)" />
    </svg>
  );
}

export function Twitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.4 11.4 0 0 1 3.8 4.7a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.3a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.1Z" />
    </svg>
  );
}

export function Flickr(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="7" cy="12" r="3.4" />
      <circle cx="17" cy="12" r="3.4" />
    </svg>
  );
}

export function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.8 2.6 4.8 6.1V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.7 1.8-2.7 3.8V24H8V8Z" />
    </svg>
  );
}
