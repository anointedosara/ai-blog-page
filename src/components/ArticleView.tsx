"use client";

import { useState } from "react";
import type { Article } from "@/lib/data";
import { Eye, Heart, Share } from "./icons";

export function ArticleView({ article }: { article: Article }) {
  const [expanded, setExpanded] = useState(false);
  const visibleSections = expanded
    ? article.sections
    : article.sections.slice(0, 1);

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_360px] lg:gap-16 lg:py-16">
      {/* Body */}
      <div className="order-2 lg:order-1">
        <h2 className="text-sm font-semibold text-white">Introduction</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          {article.intro}
        </p>

        <div className="mt-10 space-y-10 border-t border-white/5 pt-10">
          {visibleSections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {section.heading}
              </h3>
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {!expanded && article.sections.length > 1 && (
          <div className="relative">
            <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            <div className="flex justify-center pt-6">
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-200 transition-colors hover:bg-white/10"
              >
                Read Full Blog
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-brand"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {expanded && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-200 transition-colors hover:bg-white/10"
            >
              Show Less
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-brand"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <aside className="order-1 lg:order-2">
        <div className="flex items-center gap-2">
          <Stat icon={<Heart className="h-3.5 w-3.5 text-red-500" />} value={article.likes} />
          <Stat icon={<Eye className="h-3.5 w-3.5" />} value={article.views} />
          <Stat icon={<Share className="h-3.5 w-3.5" />} value={article.shares} />
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/5 pt-8">
          <Meta label="Publication Date" value={article.date} />
          <Meta label="Category" value={article.category} />
          <Meta label="Reading Time" value={article.readingTime} />
          <Meta label="Author Name" value={article.author} />
        </dl>

        <div className="mt-8">
          <p className="text-sm text-zinc-400">Table of Contents</p>
          <ul className="mt-4 space-y-3 rounded-xl border border-white/5 bg-white/[0.02] p-5">
            {article.toc.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
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
