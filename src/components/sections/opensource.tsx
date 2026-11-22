import Link from "next/link";
import {
  contributionGroups,
  contributions,
  llvmOrg,
  type ContributionStatus,
} from "@/data/contribs";
import SectionHeader from "@/components/ui/section-header";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const groupLabel = new Map(
  contributionGroups.map((group) => [group.id, group.label])
);

const statusStyles: Record<
  ContributionStatus,
  { label: string; dot: string; box: string; text: string }
> = {
  merged: {
    label: "merged",
    dot: "bg-accent",
    box: "border-accent/30 bg-accent/[0.06]",
    text: "text-accent",
  },
  open: {
    label: "in review",
    dot: "bg-ink",
    box: "border-edge bg-raise",
    text: "text-ink",
  },
  closed: {
    label: "closed",
    dot: "bg-faint",
    box: "border-edge",
    text: "text-faint",
  },
};

const merged = contributions.filter((pr) => pr.status === "merged");
const open = contributions.filter((pr) => pr.status === "open");

// Keep the log short: four recent merges plus the latest review in flight.
const recent = (open.length > 0
  ? [open[0], ...merged.slice(0, 4)]
  : merged.slice(0, 5)
).sort((a, b) => b.date.localeCompare(a.date) || b.number - a.number);

export default function OpenSource() {
  return (
    <section id="opensource" className="border-b border-edge">
      <div className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
        <SectionHeader
          index="03"
          eyebrow="Open source"
          title={<>Upstream log.</>}
          description="A short record of pull requests merged into llvm/llvm-project. The full review trail lives on the open-source page."
        />

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-y border-edge py-3 font-mono text-[10px] uppercase tracking-[0.18em]">
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-accent">{merged.length} merged</span>
            <span className="text-dim">{open.length} in review</span>
            {llvmOrg.member && (
              <span className="inline-flex items-center gap-1.5 text-accent">
                <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
                {llvmOrg.name} org member
              </span>
            )}
          </p>
          <Link
            href="/opensource"
            className="group inline-flex items-center gap-2 text-accent transition-colors hover:text-ink"
          >
            All {contributions.length} pull requests
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>

        <ol className="border-b border-edge">
          {recent.map((pr) => {
            const style = statusStyles[pr.status];
            return (
              <li key={pr.number} className="border-b border-edge last:border-b-0">
                <a
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 py-4 md:gap-6 md:py-5"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-[10px] text-faint">
                    #{pr.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm leading-relaxed text-ink transition-colors group-hover:text-accent">
                      {pr.title}
                    </span>
                    <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
                      {groupLabel.get(pr.group)} ·{" "}
                      {dateFormat.format(new Date(`${pr.date}T00:00:00Z`))}
                    </span>
                  </span>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-sm border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] ${style.box} ${style.text}`}
                  >
                    <span
                      aria-hidden
                      className={`h-1 w-1 rounded-full ${style.dot}`}
                    />
                    {style.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
