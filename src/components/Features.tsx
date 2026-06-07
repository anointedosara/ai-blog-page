import { SectionHeader } from "./SectionHeader";
import { FeatureBlogIcon, FeatureResearchIcon } from "./icons";
import { features } from "@/lib/data";

const groupIcons = [FeatureBlogIcon, FeatureResearchIcon];

export function Features() {
  return (
    <section id="features" className="border-b border-white/5">
      <SectionHeader label="Unlock the Power of" title="FutureTech Features" />

      <div className="divide-y divide-white/5">
        {features.map((group, gi) => {
          const Icon = groupIcons[gi] ?? groupIcons[0];
          return (
          <div key={group.title} className="border-white/5">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-20">
              <div>
                <Icon className="mb-6 h-12 w-12" />
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {group.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-zinc-400">
                  {group.desc}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:border-l lg:border-white/5 lg:pl-16">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/5 bg-[#141414] p-6 transition-colors hover:bg-[#1a1a1a]"
                  >
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
