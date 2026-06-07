import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { SectionLabel } from "@/components/SectionLabel";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials — FutureTech",
  description:
    "Real words from real readers. See what our global community says about FutureTech's articles, ebooks, podcasts, and resources.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
        <section className="border-b border-white/5">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
            <SectionLabel>What Our Readers Say</SectionLabel>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              Real Words from Real Readers
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">
              Researchers, founders, educators and clinicians from around the
              world rely on FutureTech every day. Here&apos;s what they have to
              say.
            </p>
          </div>
        </section>

        {/* All testimonials */}
        <section className="border-b border-white/5">
          <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </section>

      <CTA />
    </>
  );
}
