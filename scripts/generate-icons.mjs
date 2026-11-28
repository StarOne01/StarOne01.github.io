#!/usr/bin/env node
/**
 * Builds the site icon set from one vector master:
 *
 *   public/icon.svg            favicon (modern browsers), 512x512 master
 *   public/favicon.ico         16 + 32 + 48 px, PNG-compressed entries
 *   public/apple-icon.png      180x180 (iOS home screen)
 *   public/icon-192.png        web app manifest
 *   public/icon-512.png        web app manifest
 *   public/icon-maskable-512.png  Android adaptive icon (80% safe zone)
 *
 * The mark is "01" — StarOne01's suffix and a binary nod — drawn from two
 * primitives: a silicon-ring zero and an accent block cursor as the one.
 * Everything is vector geometry, so this needs no fonts at runtime.
 * Requires ImageMagick (RSVG) for rasterising:
 *
 *   node scripts/generate-icons.mjs
 *
 * Icons are static assets, so this is a manual step — `next build` does not
 * run it.
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");

const BASE = "#080A08";
const INK = "#EDEBE2";
const ACCENT = "#8CFFC1";

const C = 512;

// Mark geometry, in canvas units.
const RING_R = 115; // radius to the middle of the stroke
const RING_STROKE = 44;
const GAP = 44; // ring to "1"
const BAR_W = 50;
const BAR_H = 214;
const FLAG_W = 34;
const FLAG_H = 76;

const round = (n) => Number(n.toFixed(3));

/** @param {{ maskable?: boolean }} opts */
function buildSvg({ maskable = false } = {}) {
  const ringOuter = RING_R * 2 + RING_STROKE;
  const totalW = ringOuter + GAP + BAR_W;
  const left = (C - totalW) / 2;

  const cx = left + ringOuter / 2;
  const cy = C / 2;
  const bx = left + ringOuter + GAP;
  const by = cy - BAR_H / 2;

  const mark = [
    `<circle cx="${round(cx)}" cy="${round(cy)}" r="${RING_R}" fill="none" stroke="${INK}" stroke-width="${RING_STROKE}"/>`,
    `<rect x="${round(bx)}" y="${round(by)}" width="${BAR_W}" height="${BAR_H}" rx="6" fill="${ACCENT}"/>`,
    `<path d="M ${round(bx - FLAG_W)} ${round(by + 34)} L ${round(bx)} ${round(by)} L ${round(bx)} ${round(by + FLAG_H)} Z" fill="${ACCENT}"/>`,
  ].join("");

  // Adaptive icons are cropped to ~66-80% of the tile, so shrink the mark.
  const markGroup = maskable
    ? `<g transform="translate(${C / 2} ${C / 2}) scale(0.84) translate(${-C / 2} ${-C / 2})">${mark}</g>`
    : mark;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${C}" height="${C}" viewBox="0 0 ${C} ${C}" role="img" aria-label="Prashanth T. — 01 mark">
<defs>
<radialGradient id="glow" cx="0.78" cy="0.8" r="0.72">
<stop offset="0" stop-color="${ACCENT}" stop-opacity="0.26"/>
<stop offset="0.45" stop-color="${ACCENT}" stop-opacity="0.09"/>
<stop offset="1" stop-color="${ACCENT}" stop-opacity="0"/>
</radialGradient>
</defs>
<rect width="${C}" height="${C}" fill="${BASE}"/>
<rect width="${C}" height="${C}" fill="url(#glow)"/>
${markGroup}
</svg>
`;
}

function run(args) {
  try {
    execFileSync("magick", args, { stdio: ["ignore", "pipe", "pipe"] });
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("ImageMagick (`magick`) is required to rasterise the icon set.");
    }
    throw new Error(`magick ${args.join(" ")} failed:\n${error.stderr?.toString() ?? error.message}`);
  }
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "site-icons-"));
const rasterise = (svg, size, { colors } = {}) => {
  const svgPath = path.join(tmp, `icon-${size}-${Math.random().toString(36).slice(2)}.svg`);
  const pngPath = `${svgPath}.png`;
  fs.writeFileSync(svgPath, svg);
  run([
    svgPath,
    "-resize",
    `${size}x${size}`,
    "-depth",
    "8",
    ...(colors ? ["-colors", String(colors)] : []),
    "-strip",
    "-define",
    "png:compression-level=9",
    `PNG24:${pngPath}`,
  ]);
  return fs.readFileSync(pngPath);
};

/** Minimal PNG-in-ICO packer (supported by every browser since IE11). */
function packIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const directory = Buffer.alloc(16 * images.length);
  let offset = 6 + directory.length;

  images.forEach(({ size, data }, index) => {
    const entry = index * 16;
    directory.writeUInt8(size >= 256 ? 0 : size, entry);
    directory.writeUInt8(size >= 256 ? 0 : size, entry + 1);
    directory.writeUInt8(0, entry + 2); // palette size
    directory.writeUInt8(0, entry + 3); // reserved
    directory.writeUInt16LE(1, entry + 4); // color planes
    directory.writeUInt16LE(32, entry + 6); // bits per pixel
    directory.writeUInt32LE(data.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });

  return Buffer.concat([header, directory, ...images.map((image) => image.data)]);
}

const icon = buildSvg();
const maskable = buildSvg({ maskable: true });

fs.writeFileSync(path.join(PUBLIC, "icon.svg"), icon);
fs.writeFileSync(path.join(PUBLIC, "apple-icon.png"), rasterise(icon, 180));
fs.writeFileSync(path.join(PUBLIC, "icon-192.png"), rasterise(icon, 192));
fs.writeFileSync(path.join(PUBLIC, "icon-512.png"), rasterise(icon, 512, { colors: 1024 }));
fs.writeFileSync(path.join(PUBLIC, "icon-maskable-512.png"), rasterise(maskable, 512, { colors: 1024 }));

const ico = packIco(
  [16, 32, 48].map((size) => ({ size, data: rasterise(icon, size) }))
);
fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), ico);

fs.rmSync(tmp, { recursive: true, force: true });

const kb = (file) => `${Math.round(fs.statSync(path.join(PUBLIC, file)).size / 1024)} KB`;
console.log(
  [
    `icon.svg (${kb("icon.svg")})`,
    `favicon.ico 16/32/48 (${kb("favicon.ico")})`,
    `apple-icon.png 180 (${kb("apple-icon.png")})`,
    `icon-192.png (${kb("icon-192.png")})`,
    `icon-512.png (${kb("icon-512.png")})`,
    `icon-maskable-512.png (${kb("icon-maskable-512.png")})`,
  ].join("\n")
);
