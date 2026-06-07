import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowUpRight, Comment, Heart, HeartOutline, Share } from "./icons";

export type Post = {
  author: string;
  avatar: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  likes: string;
  comments: number;
  shares: number;
};

function Cta({
  label,
  href,
  className = "",
}: {
  label: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10 ${className}`}
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
    </Link>
  );
}

export function PostRow({
  post,
  liked = false,
  ctaLabel = "View Blog",
}: {
  post: Post;
  liked?: boolean;
  ctaLabel?: string;
}) {
  const href = `/article/${slugify(post.title)}`;
  return (
    <Reveal>
    <article className="py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-[200px_1fr_auto] lg:items-center lg:gap-10">
      {/* Author — on mobile shares a row with the CTA */}
      <div className="flex items-center justify-between gap-3 lg:justify-start">
        <div className="flex items-center gap-3">
          <Image
            src={post.avatar}
            alt={post.author}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-white">{post.author}</p>
            <p className="text-xs text-zinc-500">{post.category}</p>
          </div>
        </div>
        <Cta label={ctaLabel} href={href} className="lg:hidden" />
      </div>

      {/* Body */}
      <div className="mt-4 lg:mt-0">
        <p className="text-xs text-zinc-500">{post.date}</p>
        <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Stat
            icon={
              liked ? (
                <Heart className="h-3.5 w-3.5 text-red-500" />
              ) : (
                <HeartOutline className="h-3.5 w-3.5" />
              )
            }
            value={post.likes}
          />
          <Stat icon={<Comment className="h-3.5 w-3.5" />} value={post.comments} />
          <Stat icon={<Share className="h-3.5 w-3.5" />} value={post.shares} />
        </div>
      </div>

      {/* CTA — desktop only (mobile CTA lives in the author row) */}
      <div className="hidden lg:block lg:pl-4">
        <Cta label={ctaLabel} href={href} />
      </div>
      </div>
    </article>
    </Reveal>
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
