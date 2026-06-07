import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { MediaCard } from "@/components/MediaCard";
import { AudioPlayButton } from "@/components/AudioPlayButton";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ArrowUpRight,
  PodcastConversationsIcon,
  PodcastRevolutionIcon,
  Star,
} from "@/components/icons";

const podcastIcons = [PodcastRevolutionIcon, PodcastConversationsIcon];
import {
  featuredPodcasts,
  podcastEpisodes,
  podcastHero,
} from "@/lib/data";

// Royalty-free sample audio so every podcast actually plays.
const sampleAudio = (i: number) =>
  `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(i % 16) + 1}.mp3`;

export const metadata: Metadata = {
  title: "Podcasts — FutureTech",
  description: podcastHero.desc,
};

export default function PodcastsPage() {
  return (
    <>
      {/* Hero */}
        <section className="border-b border-white/5">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-24">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              {podcastHero.title}
            </h1>
            <p className="max-w-xl text-sm leading-7 text-zinc-400">
              {podcastHero.desc}
            </p>
          </div>
        </section>

        {/* Featured podcasts */}
        <div className="divide-y divide-white/5 border-b border-white/5">
          {featuredPodcasts.map((pod, pi) => {
            const PodIcon = podcastIcons[pi] ?? podcastIcons[0];
            return (
            <section key={pod.title}>
              <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-16">
                {/* Left */}
                <div>
                  <PodIcon className="mb-6 h-12 w-12" />
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-white">
                      {pod.title}
                    </h2>
                    <span className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-brand" />
                      ))}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4">
                    <div>
                      <p className="text-xs text-zinc-500">Host</p>
                      <p className="text-sm font-semibold text-white">
                        {pod.host}
                      </p>
                    </div>
                    <a
                      href={sampleAudio(pi)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
                    >
                      Listen Podcast
                      <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
                    </a>
                  </div>
                </div>

                {/* Right */}
                <div>
                  <div className="group relative aspect-[16/8] w-full overflow-hidden rounded-xl">
                    <Image
                      src={pod.image}
                      alt={pod.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <AudioPlayButton
                        src={sampleAudio(pi)}
                        className="h-14 w-14"
                        iconClass="h-6 w-6"
                      />
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-white">
                    {pod.tagline}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                    {pod.desc}
                  </p>

                  <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-white/5 bg-white/5 sm:grid-cols-3">
                    <Fact label="Total Episodes" value={pod.episodes} />
                    <Fact label="Average Episode Length" value={pod.length} />
                    <Fact label="Release Frequency" value={pod.frequency} />
                  </div>
                </div>
              </div>
            </section>
            );
          })}
        </div>

        {/* Latest episodes */}
        <section className="border-b border-white/5">
          <SectionHeader
            label="Stay Informed with Fresh Content"
            title="Latest Podcast Episodes"
          />

          <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-12 px-5 py-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-3 lg:py-24">
            {podcastEpisodes.map((ep, ei) => (
              <MediaCard
                key={ep.title}
                image={ep.image}
                imageAlt={ep.imageAlt}
                title={ep.title}
                desc={ep.desc}
                duration={ep.duration}
                ctaLabel="Listen Podcast"
                href={sampleAudio(ei + 2)}
                audioSrc={sampleAudio(ei + 2)}
              />
            ))}
          </div>
        </section>

      <CTA />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#111] p-5">
      <p className="text-xs text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
