import Link from "next/link";
import { Logo } from "./Logo";
import { SectionLabel } from "./SectionLabel";
import { ArrowUpRight } from "./icons";
import { ctaCards } from "@/lib/data";

export function CTA() {
  return (
    <section className="border-b border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex items-center gap-4">
            <Logo withWordmark={false} size={80} className="shrink-0" />
            <SectionLabel className="lg:hidden">
              Learn, Connect, and Innovate
            </SectionLabel>
          </div>
          <div className="max-w-3xl">
            <SectionLabel className="hidden lg:inline-block">
              Learn, Connect, and Innovate
            </SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:mt-5">
              Be Part of the Future Tech Revolution
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ctaCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-xl border border-white/5 bg-[#141414] p-7 transition-colors hover:bg-[#1a1a1a]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-white">
                  {card.title}
                </h3>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-black transition-transform group-hover:scale-110">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {card.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
