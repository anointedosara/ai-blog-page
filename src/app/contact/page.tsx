import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import {
  ArrowUpRight,
  Flickr,
  FlowerIcon,
  HighlightExpertsIcon,
  LinkedIn,
  Twitter,
} from "@/components/icons";
import { contactChannels, contactOffice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — FutureTech",
  description:
    "Get in touch with the FutureTech team. General inquiries, technical support, and answers to frequently asked questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Channels strip */}
        <div className="border-b border-white/5">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/5 px-5 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0 sm:px-8">
            {contactChannels.map((ch) => (
              <div key={ch.heading} className="px-2 py-8 sm:px-8">
                <h3 className="text-sm font-semibold text-white">
                  {ch.heading}
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {ch.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10"
                    >
                      {item.label}
                      <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Our office */}
            <div className="px-2 py-8 sm:px-8">
              <h3 className="text-sm font-semibold text-white">
                {contactOffice.heading}
              </h3>
              <p className="mt-4 max-w-[16rem] text-sm leading-6 text-zinc-400">
                {contactOffice.address}
              </p>
              <a
                href={contactOffice.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10"
              >
                Get Directions
                <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
              </a>
            </div>

            {/* Connect */}
            <div className="px-2 py-8 sm:px-8">
              <h3 className="text-sm font-semibold text-white">Connect with Us</h3>
              <div className="mt-4 flex gap-3">
                {[Twitter, Flickr, LinkedIn].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-zinc-200 transition-colors hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Get in touch */}
        <section className="border-b border-white/5">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-16">
            <div>
              <HighlightExpertsIcon className="h-12 w-12" />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Get in Touch with AI Podcasts
              </h2>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/5">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-16">
            <div>
              <FlowerIcon className="h-12 w-12" />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Asked question
              </h2>
              <p className="mt-3 max-w-xs text-sm leading-7 text-zinc-400">
                If the question is not available on our FAQ section, feel free to
                contact us personally, we will resolve your respective doubts.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-200 transition-colors hover:bg-white/10"
              >
                Ask Question
                <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
              </a>
            </div>
            <Faq />
          </div>
        </section>

      <CTA />
    </>
  );
}
