"use client";

import { useRef, useState } from "react";

// Shared across every player so only one podcast plays at a time.
let currentAudio: HTMLAudioElement | null = null;

export function AudioPlayButton({
  src,
  className = "h-12 w-12",
  iconClass = "h-5 w-5",
}: {
  src: string;
  className?: string;
  iconClass?: string;
}) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const audio = ref.current;
    if (!audio) return;
    if (playing) audio.pause();
    else void audio.play();
  };

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        className={`inline-flex items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform hover:scale-110 ${className}`}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className={`ml-0.5 ${iconClass}`} fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <audio
        ref={ref}
        src={src}
        preload="none"
        onPlay={() => {
          if (currentAudio && currentAudio !== ref.current) {
            currentAudio.pause();
          }
          currentAudio = ref.current;
          setPlaying(true);
        }}
        onPause={() => {
          if (currentAudio === ref.current) currentAudio = null;
          setPlaying(false);
        }}
        onEnded={() => {
          if (currentAudio === ref.current) currentAudio = null;
          setPlaying(false);
        }}
      />
    </>
  );
}
