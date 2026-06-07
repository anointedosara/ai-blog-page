"use client";

import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { PostRow } from "./PostRow";
import { ArrowUpRight } from "./icons";
import { newsCategories, newsPosts } from "@/lib/data";

export function NewsList() {
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All"
      ? newsPosts
      : newsPosts.filter((p) => p.category === active);

  return (
    <section className="border-b border-white/5">
      <SectionHeader
        label="Welcome to Our News Hub"
        title="Discover the World of Headlines"
        action={
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
          >
            View All News
            <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
          </a>
        }
      />

      {/* Category filter */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
          <div className="flex gap-1.5 overflow-x-auto rounded-xl border border-white/5 bg-white/[0.02] p-1.5 sm:overflow-visible">
            {newsCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`min-w-fit flex-1 whitespace-nowrap rounded-lg px-4 py-2.5 text-center text-sm transition-colors ${
                  active === cat
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="divide-y divide-white/5">
        {visible.map((post, i) => (
          <PostRow
            key={`${post.title}-${i}`}
            post={post}
            liked={i === 0 && active !== "All"}
            ctaLabel="Read More"
          />
        ))}
      </div>
    </section>
  );
}
