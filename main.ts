// news-image-20261118 — Round 3 entry program ("Hermes V4" broadsheet).
// Copies the packaged image (entry.png) into the make.fun output directory.
// Runs directly under Node 22: node main.ts
// Uses only Node built-in modules.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

function fail(message: string): never {
  process.stderr.write(`error: ${message}\n`);
  process.exit(1);
}

// Locate entry.png next to this program file; fall back to the working directory.
const programDir = dirname(fileURLToPath(import.meta.url));
const candidates = [join(programDir, "entry.png"), resolve(process.cwd(), "entry.png")];
const source = candidates.find((p) => existsSync(p));
if (!source) {
  fail(
    `entry.png not found. Looked in:\n  ${candidates.join("\n  ")}\n` +
      "The image must sit next to main.ts (or in the working directory)."
  );
}

let sourceSize: number;
try {
  sourceSize = statSync(source).size;
} catch (err) {
  fail(`cannot stat source image ${source}: ${(err as Error).message}`);
}
if (sourceSize === 0) {
  fail(`source image ${source} is empty (0 bytes)`);
}

// Output directory: MAKEFUN_OUTPUT_DIR if set, otherwise /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outputDir, { recursive: true });
} catch (err) {
  fail(`cannot create output directory ${outputDir}: ${(err as Error).message}`);
}
const destination = join(outputDir, "entry.png");

try {
  copyFileSync(source, destination);
} catch (err) {
  fail(`copy failed (${source} -> ${destination}): ${(err as Error).message}`);
}

// Post-copy integrity check: the destination must exist and match the source size.
let copiedSize: number;
try {
  copiedSize = statSync(destination).size;
} catch (err) {
  fail(`copied file missing or unreadable at ${destination}: ${(err as Error).message}`);
}
if (copiedSize !== sourceSize) {
  fail(
    `integrity check failed: ${destination} is ${copiedSize} bytes, ` +
      `expected ${sourceSize} bytes (source: ${source})`
  );
}

console.log(`copied ${source} -> ${destination} (${copiedSize} bytes, size check OK)`);
