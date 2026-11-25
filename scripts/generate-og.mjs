#!/usr/bin/env node
/**
 * Renders public/opensource-og.png — the 1200x630 link-preview card for
 * /opensource. Runs before `next build` so the merged/in-review counts stay
 * in sync with the daily contribution sync.
 *
 *   node scripts/generate-og.mjs
 */

import fs from "node:fs";
import path from "node:path";
import React from "react";

const { ImageResponse } = await import("next/og.js");
const h = React.createElement;

const ROOT = process.cwd();
const DATA = path.join(ROOT, "src/data/contribs.ts");
const BACKGROUND = path.join(ROOT, "public/opensource-og-bg.jpg");
const OUT = path.join(ROOT, "public/opensource-og.png");
const FONTS = path.join(ROOT, "scripts/fonts");

const INK = "#EDEBE2";
const ACCENT = "#8CFFC1";
const BASE = "#080A08";
const DISPLAY = "Space Grotesk";
const MONO = "JetBrains Mono";

const source = fs.readFileSync(DATA, "utf8");
const countStatus = (status) =>
  (source.match(new RegExp(`status: "${status}"`, "g")) || []).length;

const merged = countStatus("merged");
const open = countStatus("open");
const total = merged + open + countStatus("closed");

const dates = [...source.matchAll(/date: "(\d{4}-\d{2}-\d{2})"/g)]
  .map((match) => match[1])
  .sort();
const monthYear = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const range =
  dates.length > 0
    ? `${monthYear.format(new Date(`${dates[0]}T00:00:00Z`))} — ${monthYear.format(
        new Date(`${dates[dates.length - 1]}T00:00:00Z`)
      )}`
    : "";

const background = `data:image/jpeg;base64,${fs
  .readFileSync(BACKGROUND)
  .toString("base64")}`;

const font = (file) => {
  const buffer = fs.readFileSync(path.join(FONTS, file));
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
};

const fonts = [
  { name: DISPLAY, data: font("space-grotesk-500.ttf"), weight: 500, style: "normal" },
  { name: DISPLAY, data: font("space-grotesk-700.ttf"), weight: 700, style: "normal" },
  { name: MONO, data: font("jetbrains-mono-500.ttf"), weight: 500, style: "normal" },
];

function Stat({ value, label, accent = false }) {
  return h(
    "div",
    { style: { display: "flex", flexDirection: "column", gap: 7 } },
    h(
      "div",
      {
        style: {
          display: "flex",
          fontSize: 48,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: accent ? ACCENT : INK,
        },
      },
      String(value)
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          fontFamily: MONO,
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(237,235,226,0.62)",
        },
      },
      label
    )
  );
}

const card = h(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: BASE,
      padding: "50px 64px",
      fontFamily: DISPLAY,
      position: "relative",
      overflow: "hidden",
    },
  },
  h("img", {
    key: "photo",
    src: background,
    width: 1200,
    height: 630,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 1200,
      height: 630,
      objectFit: "cover",
    },
  }),

  h(
    "div",
    {
      key: "header",
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      },
    },
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontFamily: MONO,
          fontSize: 17,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(237,235,226,0.62)",
        },
      },
      h("div", { style: { width: 10, height: 10, background: ACCENT, display: "flex" } }),
      "upstream / llvm-project"
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 9,
          border: "1px solid rgba(140,255,193,0.4)",
          background: "rgba(8,10,8,0.7)",
          padding: "9px 14px",
          fontFamily: MONO,
          fontSize: 13,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: ACCENT,
        },
      },
      h("div", {
        style: { width: 7, height: 7, borderRadius: 99, background: ACCENT, display: "flex" },
      }),
      "llvm org member"
    )
  ),

  h(
    "div",
    {
      key: "middle",
      style: { display: "flex", flexDirection: "column", position: "relative" },
    },
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: MONO,
          fontSize: 16,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: ACCENT,
        },
      },
      h("div", { style: { width: 40, height: 2, background: ACCENT, display: "flex" } }),
      "open source · pull requests"
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "baseline",
          marginTop: 14,
          fontSize: 112,
          fontWeight: 700,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          textTransform: "uppercase",
          color: INK,
        },
      },
      h("span", { style: { display: "flex" } }, "Sent"),
      h("span", { style: { display: "flex", color: ACCENT, marginLeft: 26 } }, "upstream.")
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          marginTop: 18,
          maxWidth: 780,
          fontSize: 25,
          fontWeight: 500,
          lineHeight: 1.4,
          color: "rgba(237,235,226,0.74)",
        },
      },
      "Pull requests merged into llvm/llvm-project — MLIR, NVPTX, X86, Clang, and libc."
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "flex-end",
          gap: 60,
          marginTop: 28,
          paddingTop: 20,
          borderTop: "1px solid rgba(237,235,226,0.16)",
        },
      },
      h(Stat, { key: "merged", value: merged, label: "merged", accent: true }),
      h(Stat, { key: "open", value: open, label: "in review" }),
      h(Stat, { key: "total", value: total, label: "total" }),
      h(
        "div",
        {
          style: {
            display: "flex",
            marginLeft: "auto",
            paddingBottom: 6,
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(237,235,226,0.6)",
          },
        },
        range
      )
    )
  ),

  h(
    "div",
    {
      key: "footer",
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        paddingTop: 20,
        borderTop: "1px solid rgba(237,235,226,0.14)",
        fontFamily: MONO,
        fontSize: 14,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
      },
    },
    h("div", { style: { display: "flex", color: ACCENT } }, "starone01.me/opensource"),
    h("div", { style: { display: "flex", color: "rgba(237,235,226,0.64)" } }, "github.com/starone01")
  )
);

const response = new ImageResponse(card, { width: 1200, height: 630, fonts });
const png = Buffer.from(await response.arrayBuffer());
fs.writeFileSync(OUT, png);

console.log(
  `Rendered public/opensource-og.png (${merged} merged, ${open} open, ${total} total, ${Math.round(
    png.length / 1024
  )} KB)`
);
