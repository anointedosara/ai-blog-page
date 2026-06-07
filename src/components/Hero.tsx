import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  HighlightExpertsIcon,
  HighlightGlobalIcon,
  HighlightNewsIcon,
} from "./icons";
import { heroAvatars, heroHighlights, heroRaysImage, stats } from "@/lib/data";

const highlightIcons = {
  news: HighlightNewsIcon,
  experts: HighlightExpertsIcon,
  global: HighlightGlobalIcon,
} as const;

export function Hero() {
  return (
    <section className="border-b border-white/5">
      {/* Hero top — full-bleed image on the right, content on the page margin */}
      <div className="relative">
        {/* Desktop: image bleeds to the right screen edge, spanning text + stats */}
        <div className="absolute inset-y-0 right-0 hidden w-[44%] overflow-hidden lg:block">
          <Image
            src={heroRaysImage}
            alt="Rays of light streaking across a dark sky"
            fill
            priority
            sizes="44vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent" />
        </div>

        {/* Content (text + resources card) */}
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            {/* Left — headline */}
            <div className="py-14 lg:border-r lg:border-white/5 lg:py-20 lg:pr-12">
              <p
                className="animate-fade-up text-sm text-zinc-500"
                style={{ animationDelay: "0ms" }}
              >
                Your Journey to Tomorrow Begins Here
              </p>
              <h1
                className="animate-fade-up mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "80ms" }}
              >
                Explore the Frontiers of Artificial Intelligence
              </h1>
              <p
                className="animate-fade-up mt-6 max-w-xl text-sm leading-7 text-zinc-400"
                style={{ animationDelay: "160ms" }}
              >
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.
              </p>
            </div>

            {/* Right — resources card (mobile shows the image behind it) */}
            <div className="relative flex items-end overflow-hidden py-14 lg:py-20 lg:pl-12">
              <Image
                src={heroRaysImage}
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-80 lg:hidden"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20 lg:hidden" />

              <div className="relative z-10">
                <div className="flex -space-x-3">
                  {heroAvatars.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full border-2 border-[#0d0d0d] object-cover"
                    />
                  ))}
                </div>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                  Explore 1000+ resources
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                  Over 1,000 articles on emerging tech trends and breakthroughs.
                </p>
                <Link
                  href="/resources"
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-200 transition-colors hover:bg-white/10"
                >
                  Explore Resources
                  <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats — full-width top line, numbers stay under the left column */}
        <div className="relative border-t border-white/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-[1.15fr_1fr]">
              <div className="grid grid-cols-1 divide-y divide-white/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:border-r lg:border-white/5 lg:pr-12">
                {stats.map((s) => (
                  <div key={s.label} className="py-8 sm:px-6 sm:first:pl-0">
                    <p className="text-4xl font-semibold tracking-tight text-white">
                      {s.value}
                      <span className="text-brand">{s.suffix}</span>
                    </p>
                    <p className="mt-2 text-sm text-zinc-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Highlight cards */}
      <div className="border-t border-white/5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/5 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {heroHighlights.map((h) => {
            const Icon = highlightIcons[h.icon];
            return (
              <div key={h.title} className="px-2 py-10 sm:px-8">
                <Icon className="h-7 w-7" />
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">{h.tag}</p>
                  </div>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-8 text-sm text-zinc-400">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
