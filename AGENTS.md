# Context for contributors & agents

Orientation for anyone (human or AI) picking up this repo to improve the
designs. **Start by reading the creative brief:** [`docs/creative-brief.md`](docs/creative-brief.md)
(markdown) or [`docs/Hamza_Tzortzis_Creative_Brief.pdf`](docs/Hamza_Tzortzis_Creative_Brief.pdf)
(original). The brief is the design source-of-truth.

> **Doing an audit + redesign?** Follow the task brief in
> [`docs/codex-audit-and-redesign.md`](docs/codex-audit-and-redesign.md).

## What this repo is

Design mockups for a new personal website for **Hamza Andreas Tzortzis**
(author, educator, founder of Sapience Institute, BJJ practitioner).
Static HTML/CSS + a little vanilla JS. **No build step.** Not his official
site — nothing here is approved by him.

- **Live:** https://abirabuasim.github.io/hamzatzortzis-site/
- Preview locally: `python3 -m http.server 8000` then open the folder.

## The four directions

| # | Name | Folder | Notes |
|---|------|--------|-------|
| 1 | Marginalia | `marginalia/` | Living-margin reading experience (home + essay) |
| 2 | The Lit Window | `lit-window/` | Dark→light scroll metaphor (home + essay) |
| 3 | In Question | `in-question/` | Question-led pages (home + essay) |
| 4 | **The Disciplined Thinker** | `disciplined-thinker/` | **Built to the brief.** Home only |

Directions 1–3 were earlier explorations. **Direction 4 is the one built
directly to the creative brief** and is the most developed; most new work
should go there unless asked otherwise.

## How direction 4 maps to the brief

- **Palette:** Ivory `#F5F2EA`, Ink `#20231F`, Olive `#35483E`, Copper `#A46E4C` (tokens in `disciplined-thinker/disciplined-thinker.css` `:root`).
- **Type:** Fraunces (display), Inter (UI), Source Serif 4 (reading), Amiri Quran (Arabic) — Google Fonts.
- **Structure:** the brief's 9-section homepage wireframe, in order.
- **"Lit Window" treatment** is applied as **one selective dark section** (Practice & discipline — "On the mat"), not a whole-site theme, exactly as the brief instructs.
- **Motion** is restrained (subtle scroll-reveal, hover micro-interactions) — the brief says *avoid heavy animation*.

## What is placeholder (do not mistake for final)

- **All photography is a stand-in**, not Hamza. Hero and BJJ images are
  brand-fit stock (Unsplash) in `assets/`. **Do not fabricate a likeness of
  Hamza** — leave real portraiture to supplied photographs. The hero is
  deliberately a figure turned away, not a false headshot.
- The two secondary **book covers are CSS-designed concepts**; only
  `assets/divine-reality-cover.jpg` is a real cover.
- Text marked **`†`** is draft wording/placeholder for Hamza's team to
  replace or approve. `Lighthouse` / `Visionaries` org blurbs are guesses.

## Open decisions (raise with the client, don't assume)

- **Moving video hero?** Suggested during review (à la yasirqadhi.com), but
  the brief lists *"heavy animations"* and *"an overlong credential-led hero"*
  under **Avoid**, and specifies a portrait-led hero. A restrained ambient
  loop could thread the needle — needs a decision, not an assumption.
- Everything under **"Content to confirm with Hamza"** in the brief
  (approved bio/titles, book priority, final org list, BJJ photos, featured
  writing/talks, speaking-enquiry flow, republish rights).

## Project links & references

Project repos/live URLs and the reference websites shared during review
(Omar Suleiman, Abdullah Oduro, Mohammed Hijab, Sandala, Yasir Qadhi), with
their notes and the "moving video hero" idea, are collected in
[`docs/references-and-links.md`](docs/references-and-links.md).

## Production note (future)

The brief calls for CMS-driven articles/books/talks, SEO redirects from
existing URLs, mobile-first reading and accessible/fast loading — i.e. the
real build would likely be Next.js or Astro + a headless CMS. The mockups
here stay static on purpose (fast to iterate and review). A framework will
not, by itself, make the design look more premium — that is a craft and
photography question.

## Conventions

- Keep it accessible (semantic HTML, visible focus, good contrast) and
  mobile-first.
- Respect `prefers-reduced-motion`.
- Mark any new placeholder copy or imagery with `†` and note it in the footer.
