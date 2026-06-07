import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function SectionHeader({
  label,
  title,
  action,
}: {
  label: string;
  title: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="surface border-b border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <SectionLabel>{label}</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          </div>
          {action}
        </Reveal>
      </div>
    </div>
  );
}
