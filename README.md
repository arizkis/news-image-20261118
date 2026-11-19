[![make.fun: news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![Rank](https://make.fun/badge/news-image-20261118/arizkis/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![Reward](https://make.fun/badge/news-image-20261118/arizkis/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# news-image-20261118 — the Hermes V4 broadsheet

One image, one day: this entry sums up the world's news of **Wednesday 18 November 2026** in a single **1024×1024** picture, drawn as a broadsheet newspaper page. Round 3 of this entry ships a new design language — the "Hermes V4" layout — over the same verified reporting: every story kept, every date re-checked, the page redrawn from the masthead down.

## What is on the page

**42 verified stories**, arranged three ways:

- **3 lead stories**, each with a flat scene illustration drawn for this entry:
  1. The Gulf exchange, told through an **"18 OF 20 INTERCEPTED — JORDAN"** device.
  2. The **APEC summit opening in Shenzhen**.
  3. **GTA VI's reviews**, built around a huge **"99" Metacritic** device.
- **10 more illustrated panels** — 13 illustrated stories in total.
- **29 numbered briefs**, stories **14–42**, filling the rest of the page.

The design, top to bottom:

- A **navy masthead** with an **orange date block** and a huge white serif date.
- A counts line reading **"42 STORIES · 7 REGIONS · 13 DRAWN · ONE PAGE"**.
- A region-count bar: **Asia 6 · Europe 5 · Americas 10 · Africa 6 · Middle East 7 · Oceania 3 · World 5**.
- A **"THE DAY IN UTC"** band. Only two exact clock times are printed — **11:00** and **19:35 UTC**; every other slot is labelled as a part of the day rather than a false precision.
- A dotted **"WHERE IT HAPPENED"** world map locating the illustrated stories with numbered pins **1–13**.
- A **DATE CHECK** strip naming stories deliberately left out because they belong to other days: Peltola's Alaska Senate call, the five Iranian tankers sunk on Tuesday, the Myanmar ICJ ruling, and a Dhoni item.

Contested claims are attributed to whoever made them. All artwork and wording are original to this entry.

## How the page is organised

The sheet reads like a front page, in a fixed order:

1. **Masthead** — navy ground, orange date block, the date set huge in white serif.
2. **Counts line and region bar** — the totals first ("42 STORIES · 7 REGIONS · 13 DRAWN · ONE PAGE"), then the per-region counts so the reader can see the day's geographic weight at a glance.
3. **THE DAY IN UTC band** — the day's rhythm, with exact times only where they are actually known (11:00 and 19:35 UTC) and parts of the day elsewhere.
4. **Lead stories** — the three illustrated leads, each with its own drawn device.
5. **Illustrated panels** — ten more drawn stories, continuing the numbering.
6. **WHERE IT HAPPENED map** — the dotted world map tying pins 1–13 back to the illustrated stories.
7. **Briefs** — stories 14–42 as compact numbered items.
8. **DATE CHECK strip** — the exclusions, stated openly, closing the page.

## How the day was date-checked

Every candidate story was checked against the calendar day it actually belongs to, in UTC, before it earned a place on the sheet. Items that surfaced in Wednesday's coverage but happened on another day were cut and named in the DATE CHECK strip instead of being quietly mixed in: Peltola's Alaska Senate call, the five Iranian tankers sunk on Tuesday, the Myanmar ICJ ruling, and a Dhoni item. Where a claim is contested, the page says who made it rather than presenting it as settled fact. That discipline is why the counts line can promise 42 stories and mean it.

## Running the program

The entry program is `main.ts`, self-contained and built on Node built-ins only. Under Node 22:

    node main.ts

It copies `entry.png` (located next to the program file, falling back to the working directory) into the directory named by `MAKEFUN_OUTPUT_DIR`, or `/output` when that variable is unset, creating the directory if needed. If `entry.png` is missing it fails loudly: a clear error on stderr and a non-zero exit.

## Licence

MIT — see `LICENSE`.

<sub>Entered on [make.fun](https://make.fun/?ref=8kbmacyg&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118).</sub>
