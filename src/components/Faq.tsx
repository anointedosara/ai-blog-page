"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="rounded-xl border border-white/5 bg-white/[0.02]"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-medium text-white">{item.q}</span>
              <span className="text-xl leading-none text-brand">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-6 text-zinc-400">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
