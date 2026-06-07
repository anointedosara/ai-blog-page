import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { ArrowUpRight } from "./icons";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-white/5">
      <SectionHeader
        label="What Our Readers Say"
        title="Real Words from Real Readers"
        action={
          <Link
            href="/testimonials"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
          >
            View All Testimonials
            <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
          </Link>
        }
      />

      <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 6).map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
    </section>
  );
}
