"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionLabel } from "./SectionLabel";
import {
  ArrowUpRight,
  ResourceFeaturedIconA,
  ResourceFeaturedIconB,
} from "./icons";
import { resourceCatalogue, resourceTabs } from "@/lib/data";

const featuredIcons = [ResourceFeaturedIconA, ResourceFeaturedIconB];

export function ResourcesTabs() {
  const [active, setActive] = useState<string>(resourceTabs[0]);
  const data = resourceCatalogue[active];

  return (
    <>
      {/* Header + tab switcher */}
      <section className="surface border-b border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-16">
          <div>
            <SectionLabel>Dive into the Details</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              In-Depth Reports and Analysis
            </h2>
          </div>

          <div className="flex gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-1">
            {resourceTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`flex-1 rounded-lg px-5 py-2.5 text-sm transition-colors lg:flex-none ${
                  active === tab
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured items */}
      <div className="divide-y divide-white/5 border-b border-white/5">
        {data.featured.map((item, fi) => {
          const FeaturedIcon = featuredIcons[fi % featuredIcons.length];
          return (
          <section key={item.title}>
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.7fr] lg:gap-16 lg:py-16">
              {/* Left */}
              <div>
                <FeaturedIcon className="mb-6 h-12 w-12" />
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-400">
                  {item.blurb}
                </p>
              </div>

              {/* Right */}
              <div>
                <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <p className="max-w-md text-sm leading-6 text-zinc-400">
                    {item.desc}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
                  >
                    Download PDF Now
                    <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
                  </a>
                </div>

                <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/5 bg-white/5 sm:grid-cols-3">
                  <Meta label="Publication Date" value={item.date} />
                  <Meta label="Category" value={item.category} />
                  <Meta label="Author" value={item.author} />
                </dl>
              </div>
            </div>
          </section>
          );
        })}
      </div>

      {/* Cards grid */}
      <section className="border-b border-white/5">
        <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-12 px-5 py-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-3 lg:py-20">
          {data.cards.map((card) => (
            <article key={`${card.title}-${card.href}`}>
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
              <p className="mt-2 text-sm leading-6 text-zinc-400">{card.desc}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
                >
                  View Details
                </a>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
                >
                  Download PDF Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#111] p-5">
      <p className="text-xs text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
