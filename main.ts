// news-image-20261118 — make.fun entry point.
// Copies the bundled entry.png into the output directory.
// Runs directly on Node 22 (`node main.ts`); built-in modules only.

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const IMAGE = 'entry.png';

// Look for the image next to this program file first, then in the cwd.
const besideProgram = join(dirname(fileURLToPath(import.meta.url)), IMAGE);
const inCwd = resolve(IMAGE);
const source = existsSync(besideProgram) ? besideProgram : inCwd;

if (!existsSync(source)) {
  console.error(
    `fatal: ${IMAGE} is missing — looked next to main.ts (${besideProgram}) ` +
      `and in the working directory (${inCwd}). Nothing was copied.`,
  );
  process.exit(1);
}

function describe(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
try {
  mkdirSync(outputDir, { recursive: true });
} catch (err) {
  console.error(`fatal: cannot create output directory ${outputDir}: ${describe(err)}`);
  process.exit(1);
}

const destination = join(outputDir, IMAGE);
try {
  copyFileSync(source, destination);
} catch (err) {
  console.error(`fatal: copy failed (${source} -> ${destination}): ${describe(err)}`);
  process.exit(1);
}

// Integrity check: the destination must match the source byte for byte in size.
const sourceBytes = statSync(source).size;
const copiedBytes = statSync(destination).size;
if (sourceBytes !== copiedBytes) {
  console.error(
    `fatal: size mismatch after copy — source ${sourceBytes} bytes, destination ${copiedBytes} bytes.`,
  );
  process.exit(1);
}

console.log(`copied ${copiedBytes} bytes: ${source} -> ${destination}`);
