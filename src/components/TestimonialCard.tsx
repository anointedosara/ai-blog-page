import Image from "next/image";
import { Reveal } from "./Reveal";
import { Star } from "./icons";

export type Testimonial = {
  name: string;
  location: string;
  avatar: string;
  quote: string;
};

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Reveal className="h-full">
    <figure className="flex h-full flex-col bg-[#0d0d0d] p-8">
      <div className="flex items-center justify-center gap-3">
        <Image
          src={t.avatar}
          alt={t.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
        <figcaption className="text-center">
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-zinc-500">{t.location}</p>
        </figcaption>
      </div>

      <div className="mt-5 flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-brand" />
        ))}
      </div>

      <blockquote className="mt-5 rounded-xl bg-white/[0.02] p-5 text-center text-sm leading-6 text-zinc-400">
        {t.quote}
      </blockquote>
    </figure>
    </Reveal>
  );
}
