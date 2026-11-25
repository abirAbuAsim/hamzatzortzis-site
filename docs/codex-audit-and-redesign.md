# Task: Audit & redesign (for ChatGPT Codex)

A self-contained brief for an AI agent (e.g. ChatGPT Codex) to **audit** the
current mockups and **redesign** toward a premium, brief-faithful result.

> **To run this:** point the agent at this file —
> *"Follow `docs/codex-audit-and-redesign.md`."* Read
> [`AGENTS.md`](../AGENTS.md) and [`docs/creative-brief.md`](./creative-brief.md)
> first; the brief is the design source-of-truth.

## Scope (adjust if the maintainer says otherwise)

- **Primary focus:** direction 4, `disciplined-thinker/` — the brief-aligned,
  most-developed mockup. Audit it in depth and redesign it.
- **Secondary:** a lighter audit of directions 1–3 (`marginalia/`,
  `lit-window/`, `in-question/`) for ideas worth carrying over.
- You **may** propose a stronger alternative direction if you can argue it
  from the brief — but deliver a concrete improved `disciplined-thinker/`
  either way, not just critique.

## Part 1 — Audit

Produce a written audit at `docs/audit.md`. For each finding give:
location (`file:line` where useful), severity (high/med/low), the issue, and
a concrete fix. Cover:

1. **Brief adherence** — palette (Ivory `#F5F2EA`, Ink `#20231F`, Olive
   `#35483E`, Copper `#A46E4C`), type (Fraunces / Inter / Source Serif 4 /
   Amiri), the 6-link nav, the 9-section homepage wireframe, and the
   "Lit Window" treatment used **only** as one selective dark section.
2. **The brief's "Avoid" list** — generic green-and-gold motifs, "alpha-male"
   black/gold, oversized BJJ imagery, heavy animations, cluttered video grids,
   a vague "Works" label, an overlong credential-led hero. Flag any drift.
3. **Craft** — typographic hierarchy and rhythm, spacing/scale, grid,
   alignment, colour use, image treatment, restraint of motion.
4. **Accessibility** — semantic structure, heading order, contrast, focus
   states, reduced-motion support, alt text, keyboard use.
5. **Responsive & performance** — mobile-first behaviour, layout at phone /
   tablet / desktop, image sizing/weight, no-build simplicity, fast loading.
6. **Consistency** — does it read as one system; are placeholders honest.

## Part 2 — Redesign

Implement the improvements in `disciplined-thinker/` (and shared assets as
needed). Aim for a genuinely premium editorial feel while staying faithful to
the brief. When done, write `docs/redesign-notes.md` summarising what changed
and why (tie each change back to an audit finding or the brief).

## Hard constraints (do not break)

- **Static only. No build step, no framework.** Plain HTML/CSS + minimal
  vanilla JS, served as-is (`python3 -m http.server`). A framework will not
  make it look more premium — that is a craft + photography question. (A
  separate future production build may use Next.js/Astro + a CMS; that is out
  of scope here.)
- **Never fabricate a likeness of Hamza.** Current photos are brand-fit
  **stock stand-ins** (Unsplash) in `assets/`; keep real portraiture as
  supplied photographs. The hero should stay an evocative figure (e.g. turned
  to a window), not a false headshot presented as him.
- **Keep placeholders honest.** Mark any draft copy/imagery with `†` and note
  it in the footer. Don't invent facts about Hamza, his books, talks, or the
  organisations (Lighthouse / Visionaries blurbs are guesses).
- **Accessible & mobile-first**, and **respect `prefers-reduced-motion`**.
- Don't regress content that is real (the essay titles, *The Divine Reality*,
  the talk/debate references) into fabricated substitutes.

## Open decisions — raise, don't assume

- **Moving video hero?** Suggested in review, but the brief lists *heavy
  animations* and *an overlong credential-led hero* under **Avoid** and asks
  for a portrait-led hero. If you explore motion in the hero, keep it a
  restrained ambient option and flag it as a decision for the client.
- Anything under **"Content to confirm with Hamza"** in the brief.

## Deliverables checklist

- [ ] `docs/audit.md` — findings with severity + fixes
- [ ] Redesigned `disciplined-thinker/` implemented
- [ ] `docs/redesign-notes.md` — what changed and why
- [ ] Still static, accessible, mobile-first, placeholders marked `†`
- [ ] A short PR description summarising the audit's top findings and the redesign
