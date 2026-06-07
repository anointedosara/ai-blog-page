"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/data";
import { ArrowUpRight, Close, Menu } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(false);
  const pathname = usePathname();

  // While closing, the overlay stays mounted so it can animate out.
  const closing = render && !open;

  useEffect(() => {
    if (open) {
      setRender(true);
    } else if (render) {
      const t = setTimeout(() => setRender(false), 320);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Lock background scroll while the menu is mounted.
  useEffect(() => {
    document.body.style.overflow = render ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [render]);

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
          <Link
            href="/"
            aria-label="FutureTech home"
            className="nav-in"
            style={{ animationDelay: "0ms" }}
          >
            <Logo />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  style={{ animationDelay: `${(i + 1) * 70}ms` }}
                  className={`nav-in rounded-lg px-4 py-2 text-sm transition-colors ${
                    isActive(link.href)
                      ? "border border-white/10 bg-white/5 text-white"
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
              style={{ animationDelay: `${(navLinks.length + 1) * 70}ms` }}
              className="nav-in rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-brand-soft"
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
            className="nav-in inline-flex h-10 w-10 items-center justify-center text-zinc-200 md:hidden"
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu — full screen. Rendered outside <header> because the
          header's backdrop-blur would otherwise clip a fixed child to itself. */}
      {render && (
        <div
          className={`fixed inset-0 z-[60] flex flex-col bg-[#0d0d0d] md:hidden ${
            closing ? "menu-overlay-closing" : "menu-overlay"
          }`}
        >
          {/* Top bar with logo + close */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/5 px-5">
            <Link
              href="/"
              aria-label="FutureTech home"
              onClick={() => setOpen(false)}
            >
              <Logo />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center text-zinc-200"
            >
              <Close className="h-6 w-6" />
            </button>
          </div>

          {/* Items */}
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  animationDelay: `${
                    closing ? (navLinks.length - i) * 40 : i * 70
                  }ms`,
                }}
                className={`border-b border-white/5 py-5 text-2xl font-semibold transition-colors ${
                  closing ? "menu-item-closing" : "menu-item"
                } ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                animationDelay: `${closing ? 0 : navLinks.length * 70}ms`,
              }}
              className={`mt-6 rounded-md bg-brand px-5 py-4 text-center text-base font-semibold text-black transition-colors hover:bg-brand-soft ${
                closing ? "menu-item-closing" : "menu-item"
              }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
