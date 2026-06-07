"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/data";
import { ArrowUpRight, Close, Menu } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <>
      {/* Newsletter announcement bar */}
      <div
        id="newsletter"
        className="border-b border-white/5 bg-[#111] text-center text-xs text-zinc-400"
      >
        <a
          href="#newsletter"
          className="inline-flex items-center gap-1.5 px-4 py-3 transition-colors hover:text-zinc-200"
        >
          Subscribe to our Newsletter For New &amp; latest Blogs and Resources
          <ArrowUpRight className="h-3 w-3 text-brand" />
        </a>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0d0d0d]/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="FutureTech home">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-brand-soft"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center text-zinc-200 md:hidden"
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-white/5 bg-[#0d0d0d] px-5 pb-6 pt-2 md:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                      isActive(link.href)
                        ? "text-white"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-md bg-brand px-5 py-3 text-center text-sm font-semibold text-black transition-colors hover:bg-brand-soft"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
