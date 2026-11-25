# hamzatzortzis.com: design mockups

Design directions for a new website for **Hamza Andreas Tzortzis**, shared for review.

**This is not his official website.** Wording and imagery marked † is draft and has not been approved by him.

- **Live:** https://abirabuasim.github.io/hamzatzortzis-site/
- **Creative brief (context for contributors & agents):** [`docs/creative-brief.md`](docs/creative-brief.md) · [original PDF](docs/Hamza_Tzortzis_Creative_Brief.pdf)
- **Start here if you're improving the designs:** [`AGENTS.md`](AGENTS.md)

## Directions

1. **Marginalia** — `marginalia/` (home + essay)
2. **The Lit Window** — `lit-window/` (home + essay)
3. **In Question** — `in-question/` (home + essay)
4. **The Disciplined Thinker** — `disciplined-thinker/` — **built to the creative brief** (home); the most developed direction.

## Running it

Static HTML, CSS and a little vanilla JavaScript — **no build step**.

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

Typefaces are from Google Fonts. In direction 4 the photography is brand-fit stand-ins (Unsplash) to be replaced with real photographs of Hamza; only `assets/divine-reality-cover.jpg` is a real book cover. See [`AGENTS.md`](AGENTS.md) for what's placeholder and what's still to confirm.
