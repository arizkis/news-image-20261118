import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const imageName = 'entry.png';
const image = new URL(imageName, import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(image, join(outputDir, imageName));
