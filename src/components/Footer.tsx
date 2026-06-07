import { ArrowUpRight, Flickr, LinkedIn, Twitter } from "./icons";
import { footerColumns, footerResources } from "@/lib/data";

function Badge() {
  return (
    <span className="ml-2 rounded bg-brand px-1.5 py-0.5 text-[10px] font-semibold text-black">
      New
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <a
                      href={link.href}
                      className="inline-flex items-center text-sm text-zinc-500 transition-colors hover:text-zinc-200"
                    >
                      {link.label}
                      {"badge" in link && link.badge && <Badge />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:gap-3">
              {footerResources.map((res) => (
                <li key={res.label}>
                  <a
                    href={res.href}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10"
                  >
                    {res.label}
                    <ArrowUpRight className="h-3 w-3 text-brand" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-white/5 pt-8 sm:flex-row sm:justify-between">
          <div className="order-2 flex gap-6 text-sm text-zinc-500 sm:order-1">
            <a href="#" className="transition-colors hover:text-zinc-200">
              Terms &amp; Conditions
            </a>
            <a href="#" className="transition-colors hover:text-zinc-200">
              Privacy Policy
            </a>
          </div>

          <div className="order-1 flex gap-5 text-zinc-400 sm:order-2">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Flickr" className="hover:text-white">
              <Flickr className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <LinkedIn className="h-5 w-5" />
            </a>
          </div>

          <p className="order-3 text-sm text-zinc-500">
            © 2024 FutureTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
