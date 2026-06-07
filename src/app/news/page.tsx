import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { NewsList } from "@/components/NewsList";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowUpRight, HeartOutline, Share } from "@/components/icons";
import { featuredNews, featuredVideos, newsCards, slugify } from "@/lib/data";

export const metadata: Metadata = {
  title: "News — FutureTech",
  description:
    "Today's headlines: stay informed with up-to-the-minute updates on the most significant events, trends, and stories from around the world.",
};

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
        <section className="border-b border-white/5">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:py-24">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Today&apos;s Headlines: Stay Informed
            </h1>
            <p className="max-w-xl text-sm leading-7 text-zinc-400">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </div>
        </section>

        {/* Featured story */}
        <section className="border-b border-white/5">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-16 lg:py-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={featuredNews.image}
                alt={featuredNews.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {featuredNews.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                {featuredNews.excerpt}
              </p>

              <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <Meta label="Category" value={featuredNews.category} />
                <Meta label="Publication Date" value={featuredNews.date} />
                <Meta label="Author" value={featuredNews.author} />
              </dl>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Stat icon={<HeartOutline className="h-3.5 w-3.5" />} value={featuredNews.likes} />
                  <Stat icon={<Share className="h-3.5 w-3.5" />} value={featuredNews.shares} />
                </div>
                <Link
                  href={`/article/${slugify(featuredNews.title)}`}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
                >
                  Read More
                  <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary news grid */}
        <section className="border-b border-white/5">
          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-5 py-14 sm:px-8 lg:grid-cols-3 lg:gap-10">
            {newsCards.map((card) => (
              <article key={card.title}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{card.category}</p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Stat icon={<HeartOutline className="h-3.5 w-3.5" />} value={card.likes} />
                    <Stat icon={<Share className="h-3.5 w-3.5" />} value={card.shares} />
                  </div>
                  <Link
                    href={`/article/${slugify(card.title)}`}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
                  >
                    Read More
                    <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Discover (filterable list) */}
        <NewsList />

        {/* Featured Videos */}
        <section className="border-b border-white/5">
          <SectionHeader
            label="Featured Videos"
            title="Visual Insights for the Modern Viewer"
          />

          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-x-16 lg:py-24">
            {featuredVideos.map((video) => (
              <article key={video.title}>
                <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image
                    src={video.image}
                    alt={video.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="absolute bottom-5 right-4 text-xs text-white/80">
                    {video.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {video.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
                  {video.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

      <CTA />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-zinc-500">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-white">{value}</dd>
    </div>
  );
}

function Stat({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string | number;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
      {icon}
      {value}
    </span>
  );
}
