import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { ArticleView } from "@/components/ArticleView";
import { ArrowUpRight, Heart, Share } from "@/components/icons";
import {
  articleSlugs,
  getArticle,
  newsCards,
  slugify,
} from "@/lib/data";

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found — FutureTech" };
  return { title: `${article.title} — FutureTech`, description: article.intro };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      {/* Hero */}
        <section className="relative h-[55vh] min-h-[360px] w-full overflow-hidden border-b border-white/5">
          <Image
            src={article.heroImage}
            alt={article.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
              <p className="mb-3 inline-block rounded-md bg-brand/90 px-3 py-1 text-xs font-semibold text-black">
                {article.category}
              </p>
              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Body + sidebar (with Read Full Blog expand) */}
        <section className="border-b border-white/5">
          <ArticleView article={article} />
        </section>

        {/* Similar news */}
        <section className="border-b border-white/5">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Similar News
              </h2>
              <Link
                href="/news"
                className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
              >
                View All News
                <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
              </Link>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-3">
              {newsCards.map((card) => (
                <article key={card.title}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">{card.category}</p>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                        <Heart className="h-3.5 w-3.5 text-zinc-400" />
                        {card.likes}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                        <Share className="h-3.5 w-3.5" />
                        {card.shares}
                      </span>
                    </div>
                    <Link
                      href={`/article/${slugify(card.title)}`}
                      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10"
                    >
                      Read More
                      <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      <CTA />
    </>
  );
}
