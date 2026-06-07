import Image from "next/image";
import { AudioPlayButton } from "./AudioPlayButton";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";

type MediaCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  desc: string;
  duration?: string;
  ctaLabel?: string;
  href?: string;
  audioSrc?: string;
};

/** A play-button media card used for podcast episodes and featured videos. */
export function MediaCard({
  image,
  imageAlt,
  title,
  desc,
  duration,
  ctaLabel,
  href = "#",
  audioSrc,
}: MediaCardProps) {
  return (
    <Reveal>
    <article>
      <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          {audioSrc ? (
            <AudioPlayButton src={audioSrc} />
          ) : (
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          )}
        </span>
        {duration && (
          <span className="absolute bottom-3 right-3 rounded bg-black/50 px-1.5 py-0.5 text-xs text-white/90">
            {duration}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p>

      {ctaLabel && (
        <a
          href={href}
          className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
        >
          {ctaLabel}
          <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
        </a>
      )}
    </article>
    </Reveal>
  );
}
