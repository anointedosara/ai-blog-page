import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import {
  ArrowUpRight,
  Eye,
  ResourceEbookIcon,
  ResourceWhitepaperIcon,
} from "./icons";
import { resources } from "@/lib/data";

const resourceIcons = [ResourceEbookIcon, ResourceWhitepaperIcon];

export function Resources() {
  return (
    <section id="resources" className="border-b border-white/5">
      <SectionHeader
        label="Your Gateway to In-Depth Information"
        title="Unlock Valuable Knowledge with FutureTech's Resources"
        action={
          <a
            href="/resources"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
          >
            View All Resources
            <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
          </a>
        }
      />

      <div className="divide-y divide-white/5">
        {resources.map((res, i) => {
          const Icon = resourceIcons[i] ?? resourceIcons[0];
          return (
          <div key={res.title}>
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.7fr] lg:gap-16 lg:py-16">
              {/* Left */}
              <div>
                <Icon className="mb-6 h-12 w-12" />
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {res.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-400">
                  {res.desc}
                </p>
                <Link
                  href="/resources"
                  className="mt-6 inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-200 transition-colors hover:bg-white/10"
                >
                  {res.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
                </Link>

                <div className="mt-5 inline-flex max-w-sm items-center justify-between gap-6 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4">
                  <div>
                    <p className="text-xs text-zinc-500">Downloaded By</p>
                    <p className="text-sm font-semibold text-white">
                      10k + Users
                    </p>
                  </div>
                  <div className="flex -space-x-3">
                    {res.downloadedAvatars.map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full border-2 border-[#0d0d0d] object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <h4 className="shrink-0 text-base font-semibold text-white sm:w-44">
                    {res.topicTitle}
                  </h4>
                  <p className="text-sm leading-6 text-zinc-400">
                    {res.topicDesc}
                  </p>
                </div>

                <div className="relative mt-6 aspect-[16/7] w-full overflow-hidden rounded-xl">
                  <Image
                    src={res.image}
                    alt={res.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-white/5 bg-white/5 sm:grid-cols-2">
                  <div className="bg-[#111] p-5">
                    <p className="text-xs text-zinc-500">{res.statLabel}</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {res.statValue}
                    </p>
                  </div>
                  <div className="flex items-center justify-between bg-[#111] p-5">
                    <div>
                      <p className="text-xs text-zinc-500">Download Formats</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {res.formatValue}
                      </p>
                    </div>
                    <Link
                      href="/resources"
                      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-200 transition-colors hover:bg-white/10"
                    >
                      Preview
                      <Eye className="h-3.5 w-3.5 text-brand" />
                    </Link>
                  </div>
                </div>

                <div className="mt-px overflow-hidden rounded-xl border border-white/5">
                  <div className="bg-[#111] p-5">
                    <p className="text-xs text-zinc-500">
                      Average Author Expertise
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {res.expertise}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
