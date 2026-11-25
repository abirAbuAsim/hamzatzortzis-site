# Direction 4 redesign notes

## Chosen direction

The redesign translates the approved moodboard hybrid into a responsive static homepage:

- **Living Margins** supplies the literary typography, paper tactility and marginal structure.
- **Window & Threshold** supplies the restrained photographic treatment and natural-light mood.
- **Rigor & Rhythm** supplies numbered sections, narrow metadata columns and firm horizontal rules.

It remains “The Disciplined Thinker”: calm, intellectual, grounded, masculine through proportion rather than aggression, and recognisably editorial rather than a generic speaker template.

## What changed

### Hero

- Rebuilt as an above-the-fold editorial spread.
- The complete name, positioning statement and Read/Watch routes now appear before scrolling on a typical desktop.
- Replaced the anonymous stock figure with the client-supplied portrait of Hamza.
- Kept the role line short and supporting rather than turning the hero into a credential list.

### Navigation and featured world

- Introduced a thin running-head treatment with a flexible rule between wordmark and navigation.
- Reworked the mobile menu as a numbered editorial index with an explicit Menu/Close state.
- Converted the former four-card strip into a compact page index for Writing, Books, Talks and Organisations.

### Editorial sections

- Selected writing is now a ruled contents page: category, title, summary and reading time form one consistent row.
- The Divine Reality receives a larger publisher-style feature with cover, title, synopsis, actions and compact edition metadata.
- Secondary book concepts remain clearly labelled as unconfirmed.
- Talks use one visual lead and a concise programme list instead of three equal video cards.
- Organisations use sober numbered columns with uncertain relationships described plainly as awaiting confirmation.

### Practice & discipline

- Remains the only dark section, preserving the brief’s selective Lit Window treatment.
- Uses the supplied BJJ photograph rather than stock photography.
- Adds a quiet Study / Training / Teaching / Writing / Life index to connect physical discipline to the wider body of work without making BJJ the site’s dominant identity.

### About and contact

- Uses a supplied speaking photograph as supporting context.
- Removes the form that previously looked functional but intentionally did nothing.
- States honestly that the speaking/media route still needs confirmation.

### Accessibility and performance

- Added a skip link, visible focus states, semantic headings, intrinsic image dimensions and meaningful alt text.
- Introduced a darker copper text token for small labels on ivory.
- Removed JavaScript entrance reveals and retained only essential mobile-menu and sticky-header behavior.
- Preserves `prefers-reduced-motion` support.
- Converted supplied PNGs into compressed JPEG assets before use.

## Supplied photography

The client supplied photographs of Hamza during the redesign. They are stored in `assets/` with descriptive filenames. The homepage currently uses:

- `hamza-portrait.jpg` — hero
- `talk-quranic-proof.jpg` — lead talk thumbnail
- `hamza-bjj.jpg` — Practice & discipline
- `hamza-speaking.jpg` — About

Additional supplied images are retained for later content/detail-page exploration. No likeness was generated or altered. Usage approval and final credits remain to be confirmed, as marked on the mockup.

## Open decisions

- Whether the supplied close portrait is the final hero image or an interim option pending a dedicated editorial shoot.
- Final external destinations for essays, books, talks and organisations.
- Final speaking/media enquiry flow.
- Confirmed BJJ description, credentials and image credit.
- No moving hero was added; it remains an explicit client decision rather than an assumption.
