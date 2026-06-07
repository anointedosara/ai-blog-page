import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { ResourcesTabs } from "@/components/ResourcesTabs";
import { resourcesHero, resourceStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resources — FutureTech",
  description: resourcesHero.desc,
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
        <section className="border-b border-white/5">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-24">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {resourcesHero.title}
            </h1>
            <p className="max-w-xl text-sm leading-7 text-zinc-400">
              {resourcesHero.desc}
            </p>
          </div>
        </section>

        {/* Stats */}
        <div className="border-b border-white/5">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/5 px-5 sm:px-8 md:grid-cols-4 md:divide-x md:divide-y-0">
            {resourceStats.map((s) => (
              <div key={s.label} className="px-2 py-8 md:px-8">
                <p className="text-4xl font-semibold tracking-tight text-white">
                  {s.value}
                  <span className="text-brand">{s.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabbed catalogue */}
        <ResourcesTabs />

      <CTA />
    </>
  );
}
