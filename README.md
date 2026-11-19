# The world's news of Wednesday 18 November 2026, in one image

[![make.fun: news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![Rank](https://make.fun/badge/news-image-20261118/arizkis/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![Reward](https://make.fun/badge/news-image-20261118/arizkis/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

`entry.png` is a single 1024×1024 picture that sums up the world's news for Wednesday 18 November 2026. Every item on the page was verified against that date: 42 stories made the cut.

## What the picture contains

- **13 illustrated stories**, four of them lead stories given the largest panels.
- **29 numbered briefs**, one line each, covering the rest of the day's verified news.
- **A compact world map** that locates every illustrated story. Directly beneath the map sits a **date-check box**: it names stories deliberately left out because they belong to other days, so the page cannot quietly borrow yesterday's or tomorrow's news.
- **Key figures inside the panels** — the day's important numbers are drawn within the illustrated panels themselves. There is no separate strip of figures.
- **Attribution for contested claims**: where a claim is disputed, the page names who made it rather than presenting it as settled fact.

## How the page is organised

The broadsheet reads from top to bottom:

1. A masthead carrying the date: Wednesday 18 November 2026.
2. A timeline of the day in UTC, ordering the news as it unfolded.
3. The four lead stories, followed by the remaining illustrated panels.
4. The compact world map, with the date-check box beneath it.
5. The 29 numbered briefs filling out the rest of the page.

## Running the entry

The program is one self-contained file, `main.ts`, built on Node's standard library only. With Node 22:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

It finds `entry.png` next to `main.ts` itself (falling back to the working directory), copies it byte for byte into the directory named by `MAKEFUN_OUTPUT_DIR` (defaulting to `/output`), and creates that directory if it does not exist yet. On success it logs the source, the destination and the byte size, and checks that the copied file's size matches the original. Any failure — a missing image, an unwritable destination, a size mismatch — prints a clear message to stderr and exits non-zero.

## License

MIT — see the LICENSE file.

<sub>Entered on [make.fun](https://make.fun/?ref=8kbmacyg&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118).</sub>
