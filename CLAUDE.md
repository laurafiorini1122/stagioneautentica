# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server at http://localhost:8080
npm run build      # production build
npm run preview    # preview production build
npm run lint       # ESLint
npm run test       # run tests once (vitest)
npm run test:watch # run tests in watch mode
```

## Architecture

**"La stagione più autentica"** is an Italian literary website about retirement, built with Vite + React + TypeScript + shadcn/ui + Tailwind CSS.

### Content model

Content is organized into three sections, each reflected in the routing:

- **`/un-uomo`** — 23 short stories told from a man's perspective (ironic, melancholic). Each story is a standalone page under `src/pages/racconti/`.
- **`/una-donna`** — mirror versions of the same stories from a woman's perspective. These pages include an interactive form (`ProponiFinale`) that opens `mailto:redazione@stagioneautentica.it` so readers can submit alternative endings. Published reader-submitted endings are stored as separate page files (e.g. `FinaleLaura.tsx`, `FinaleLauraLabirinto.tsx`).
- **`/il-percorso`** — standalone reflection-tool pages (CV, family tree, reading list, etc.) under `src/pages/percorso/`.

Story assets come in pairs: each story has a `[nome].jpg` and a `[nome]-donna.jpg` in `src/assets/`.

### Layout system

All inner pages wrap their content in `PageShell` (`src/components/PageShell.tsx`), which accepts:
- `title` / `subtitle` — rendered in the hero section
- `bgClassName` — defaults to `bg-background`; use `bg-page-uomo` for uomo pages and `bg-page-donna` for donna pages

The home page (`Index.tsx`) uses `SiteHeader` in its large/full form; inner pages use `<SiteHeader minimal />`.

### Styling conventions

- Typography: `font-serif` = Cormorant Garamond; `font-sans` = Inter
- Body copy: `font-serif text-lg leading-[1.8] text-foreground/85`
- Section labels / nav: `font-sans text-xs uppercase tracking-[0.2em]`
- Custom theme colors are CSS variables defined per section: `bg-page-uomo`, `bg-page-donna`, `card-uomo`, `card-donna`, `card-percorso`
- Buttons and links use `rounded-sm` (not `rounded`) to match the editorial aesthetic

### Key components

- `PageShell` — layout wrapper for all inner pages
- `ProponiFinale` — reusable form for collecting reader-submitted story endings (used on donna story pages); sends via `mailto:` link
- `SeasonCard` — home page navigation cards for the three sections
- `src/components/ui/` — standard shadcn/ui components; do not modify unless intentionally upgrading shadcn

### Adding a new story

1. Create `src/pages/racconti/NomeRacconto.tsx` and `NomeRaccontoDonna.tsx`
2. Add the corresponding images `nome-racconto.jpg` and `nome-racconto-donna.jpg` to `src/assets/`
3. Register both routes in `src/App.tsx` under `/un-uomo/...` and `/una-donna/...`
4. Add the story entry to the `racconti` array in `UnUomo.tsx` and `UnaDonna.tsx`

### Path alias

`@/` resolves to `src/` (configured in `vite.config.ts`).
