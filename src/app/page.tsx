import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Blogs } from "@/components/Blogs";
import { Resources } from "@/components/Resources";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Blogs />
      <Resources />
      <Testimonials />
      <CTA />
    </>
  );
}
