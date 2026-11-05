import type { Metadata } from "next";
import {
  contributionGroups,
  contributions,
  contributionsSource,
  llvmOrg,
  type ContributionStatus,
} from "@/data/contribs";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Open source",
  description:
    "LLVM GitHub org member and author of pull requests across MLIR, LLVM backends, Clang, and libc.",
  alternates: { canonical: "/opensource" },
  openGraph: {
    type: "website",
    title: "Open source — Prashanth T.",
    description:
      "LLVM GitHub org member and author of pull requests across MLIR, LLVM backends, Clang, and libc.",
    url: "/opensource",
  },
};

const statusStyles: Record<
  ContributionStatus,
  { dot: string; text: string; box: string; label: string }
> = {
  merged: {
    dot: "bg-accent",
    text: "text-accent",
    box: "border-accent/30 bg-accent/[0.06]",
    label: "merged",
  },
  open: {
    dot: "bg-ink",
    text: "text-ink",
    box: "border-edge bg-raise",
    label: "in review",
  },
  closed: {
    dot: "bg-faint",
    text: "text-faint",
    box: "border-edge",
    label: "closed",
  },
};

const merged = contributions.filter((c) => c.status === "merged").length;
const open = contributions.filter((c) => c.status === "open").length;
const closed = contributions.filter((c) => c.status === "closed").length;

const dates = contributions.map((c) => c.date).sort();
const since = dates[0];
const latest = dates[dates.length - 1];

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const monthFormat = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(iso: string) {
  return dateFormat.format(new Date(`${iso}T00:00:00Z`));
}

function monthYear(iso: string) {
  return monthFormat.format(new Date(`${iso}T00:00:00Z`));
}

const range = `${monthYear(since)} — ${monthYear(latest)}`;

export default function OpenSourcePage() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="border-b border-edge">
        <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
            <span aria-hidden className="inline-block h-1.5 w-1.5 bg-accent" />
            <span>upstream / llvm-project</span>
            {llvmOrg.member && (
              <a
                href={llvmOrg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-accent/30 bg-accent/[0.06] px-2 py-1 text-[9px] tracking-[0.16em] text-accent transition-colors hover:border-accent"
              >
                <span
                  aria-hidden
                  className="h-1 w-1 rounded-full bg-accent"
                />
                {llvmOrg.name} org member
              </a>
            )}
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.2rem)] font-semibold uppercase leading-[0.95] tracking-[-0.03em]">
            Sent <span className="text-accent">upstream</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
            Pull requests I&apos;ve written in llvm/llvm-project: MLIR loop and
            vector work, NVPTX and X86 lowering, Clang diagnostics, and the libc
            POSIX docs.
            {llvmOrg.member && " I'm a member of the llvm GitHub organization."}{" "}
            Every entry links to the review.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-px border border-edge bg-edge sm:grid-cols-4">
            {[
              { label: "Merged", value: merged, accent: true },
              { label: "In review", value: open },
              { label: "Closed", value: closed },
              { label: "Total", value: contributions.length },
            ].map((stat) => (
              <div key={stat.label} className="bg-bg px-4 py-5">
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                  {stat.label}
                </dt>
                <dd
                  className={`mt-2 font-display text-3xl font-medium tabular-nums ${
                    stat.accent ? "text-accent" : "text-ink"
                  }`}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.18em]">
            <a
              href={contributionsSource}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Live pull request list <span aria-hidden>↗</span>
            </a>
            <a
              href="https://github.com/llvm/llvm-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim transition-colors hover:text-accent"
            >
              llvm/llvm-project <span aria-hidden>↗</span>
            </a>
            <span className="text-faint">{range}</span>
          </div>
        </div>
      </section>

      {contributionGroups.map((group) => {
        const items = contributions.filter((c) => c.group === group.id);
        if (items.length === 0) return null;
        const groupMerged = items.filter((c) => c.status === "merged").length;

        return (
          <section
            key={group.id}
            aria-labelledby={`group-${group.id}`}
            className="border-b border-edge"
          >
            <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 md:py-16">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h2
                  id={`group-${group.id}`}
                  className="font-display text-2xl font-medium tracking-tight text-ink"
                >
                  {group.label}
                </h2>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  {items.length} {items.length === 1 ? "change" : "changes"}
                  <span aria-hidden className="px-1.5 text-accent/70">
                    ·
                  </span>
                  {groupMerged} merged
                </p>
              </div>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
                {group.blurb}
              </p>

              <ul className="mt-7 border-t border-edge">
                {items.map((pr) => {
                  const style = statusStyles[pr.status];
                  return (
                    <li key={pr.number} className="border-b border-edge">
                      <a
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-2 py-4 sm:grid sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-5"
                      >
                        <time
                          dateTime={pr.date}
                          className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint"
                        >
                          {formatDate(pr.date)}
                        </time>

                        <span className="flex items-baseline gap-2 text-sm leading-relaxed text-dim transition-colors group-hover:text-ink">
                          <span className="shrink-0 font-mono text-[11px] text-faint">
                            #{pr.number}
                          </span>
                          <span>{pr.title}</span>
                        </span>

                        <span className="flex items-center gap-3">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] ${style.box} ${style.text}`}
                          >
                            <span
                              aria-hidden
                              className={`h-1 w-1 rounded-full ${style.dot}`}
                            />
                            {style.label}
                          </span>
                          <span
                            aria-hidden
                            className="hidden text-faint transition-colors group-hover:text-accent sm:inline"
                          >
                            ↗
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}

      <section>
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            // the rest of it
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-dim">
            This page is a snapshot. GitHub keeps the live record, including
            review threads and the commits that landed.
          </p>
          <a
            href={contributionsSource}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-sm border border-edge px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            All pull requests
            <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
