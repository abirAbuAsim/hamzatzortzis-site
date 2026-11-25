# Direction 4 audit

Audit of the pre-redesign `disciplined-thinker/` homepage against the creative brief. The redesign described in [`redesign-notes.md`](./redesign-notes.md) resolves the implementation findings below unless marked as a production follow-up.

## Summary

The previous page was structurally faithful to the brief: it used the correct palette and type families, included the six-link navigation and all nine homepage sections, kept BJJ subordinate to the wider personal story, and limited the dark treatment to Practice & discipline. Its main weakness was not compliance but expression. Repeated cards, centered section scaffolding and generous but undifferentiated spacing made the page feel like a polished template rather than a distinctive editorial identity.

## Findings

| Severity | Location | Finding | Concrete fix |
|---|---|---|---|
| High | Hero (`disciplined-thinker/index.html`, previous hero) | The centered two-column hero placed the text low against the portrait. On common desktop heights, the positioning statement and calls-to-action fell partly below the first fold. | Recompose the hero as a full-height editorial spread with the role, complete name, positioning and Read/Watch routes visible above the fold. |
| High | Site-wide interaction | Numerous `#-` links and an enquiry form with `onsubmit="return false"` looked functional but could not complete an action. | Remove the non-functional form. Keep prototype routes explicitly internal and require confirmed destinations before production. The contact area now states that the enquiry route is pending. |
| Medium | Section system | Writing, Talks and Organisations relied on variations of evenly spaced cards/grids. The repeated pattern flattened hierarchy and felt generic. | Replace cards with numbered folios, ruled lists, narrow metadata columns and asymmetric editorial layouts. |
| Medium | `disciplined-thinker.css` color tokens | Brand copper `#A46E4C` was used for small UI labels on ivory and ink, producing roughly 3.8:1 contrast—below WCAG AA for normal text. | Preserve the brand copper for large/decorative use and introduce deeper `--copper-text: #865538` for small light-background text; use a lighter copper only for sufficiently large text on ink. |
| Medium | Hero and section pacing | Large top/bottom padding was applied uniformly. The resulting rhythm was spacious but not intentional; major and minor content received similar emphasis. | Use content-specific pacing: a compact page index, denser ruled lists, a generous book feature and one immersive practice section. |
| Medium | Photography | Mixed stock photography was given a common filter, but the subjects and contexts still read as unrelated shoots. The hero was deliberately anonymous but could not establish Hamza’s identity. | Use the photographs supplied by the client for the hero, talks, practice and about areas. Continue to flag usage approval and avoid inventing dates, ranks or credentials. |
| Medium | Talks thumbnails | Background images were hidden from assistive technology, leaving visual context unavailable. | Use real `<img>` elements with meaningful alt text, while keeping decorative play labels hidden. |
| Medium | Motion | Nearly every major element was initially hidden and revealed by JavaScript. The implementation had safety fallbacks, but the amount of entrance motion added complexity without improving comprehension. | Remove entrance reveals entirely. Retain only header elevation and small hover transitions; honor `prefers-reduced-motion`. |
| Medium | Mobile navigation | The disclosure exposed the correct ARIA state and Escape behavior, but the trigger always read “Menu” and the link treatment did not reflect the new editorial system. | Change the trigger label to Close while expanded and use numbered, ruled navigation rows. |
| Low | Accessibility | There was no skip link. Focus treatment was generally good, semantic sectioning was sound, and heading order was coherent. | Add a visible-on-focus “Skip to content” link and retain strong focus outlines. |
| Low | Performance | Image weights were reasonable, but supplied PNG screenshots would have added several megabytes if used directly. Google Fonts remain an external dependency. | Convert supplied images to quality-controlled JPEGs and declare intrinsic dimensions. For production, self-host/subset fonts and generate responsive image sizes. |
| Low | Content integrity | Organisation blurbs and secondary book concepts could be mistaken for approved content at a glance. | Shorten uncertain descriptions and repeat the approval note in the footer without interrupting the page with footnote markers. |

## Brief adherence

- Palette: Ivory, Ink, Olive and Copper remain the core system. A darker copper text token is an accessibility adjustment, not a new brand color.
- Typography: Fraunces, Source Serif 4, Inter and Amiri Quran remain available through the brief’s type stack.
- Navigation: About, Writing, Books, Talks, Organisations and Contact are present in desktop, mobile and footer navigation.
- Homepage structure: the nine requested content beats remain in order; the small editorial index functions as the brief’s “featured world” strip.
- Lit Window treatment: only Practice & discipline is dark.
- Avoid list: no generic Islamic ornament, black/gold luxury styling, oversized BJJ hero, heavy animation, cluttered video wall, vague “Works” label or credential-led hero.

## Production follow-ups

1. Confirm final biography, titles, organisation list, book priority and all external destinations.
2. Confirm usage and credits for the supplied photographs and video thumbnails.
3. Define the speaking/media enquiry route before enabling a form or email link.
4. Replace prototype `#placeholder` destinations as CMS routes become available.
5. Self-host fonts and generate responsive image derivatives during the production build.
