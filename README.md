# Project Hypeman

A teaching terminal: classes, student records and homework collection in one
dark panel.

## Stack

- [Vite](https://vitejs.dev) + React + [react-router-dom](https://reactrouter.com)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Netlify Functions](https://docs.netlify.com/functions/overview/) for the API (bcrypt-hashed passwords, JWT session cookie)
- [Cloudflare R2](https://developers.cloudflare.com/r2/) as the data store

## Getting started

```bash
npm install
cp .env.example .env   # fill it in — see "Data" below
npm run dev            # runs `netlify dev` — Vite and the functions together
npm run seed           # creates the teacher login from ADMIN_* in .env
```

Other scripts:

```bash
npm run dev:vite   # frontend only, no functions (no /api/* will work)
npm run build      # typecheck + production build
npm run lint       # oxlint
```

## Data

Everything lives in the same `projects1` R2 bucket as the other apps on this
account, using **the same R2 access key** — `R2_ENDPOINT_URL`,
`R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY` and `R2_BUCKET_NAME` are copied
verbatim from studytubby / onesecstudio. Isolation is by folder prefix:

```
projects1/
  projecthypeman/
    auth/users.json          # this app's own login list
    data/<username>.json     # classes, students, homework
    photos/<username>/<id>   # student profile photos
  studytubby/…
  onesecstudio/…
```

Set `R2_PROJECT_FOLDER=projecthypeman` and nothing here can see another app's
data. The login list is this app's own, so seed it once with `npm run seed`.

`R2_FORCE_PATH_STYLE` is only for pointing the app at a local S3 stand-in
(MinIO, moto) during development; leave it unset against real R2.

## Model

- **Class** — name, school, subject. Holds a roster and its homework.
- **Student** — **full name is the only mandatory field**. Optionally a
  preferred name, birthday and photo. A student either belongs to a class or
  sits in the unassigned pool, which is a first-class place to be, not an error
  state. Deleting a class releases its students into that pool rather than
  deleting them.
- **Note / incident** — each one is its own entry, stamped with the date and
  time it was logged. Kept as two separate logs on the profile.
- **Homework** — title, description, due date, set on a class. Everyone on the
  roster starts **assigned**.

### Homework states

Only `assigned` and `collected` are stored. **Overdue is derived**, never
written down, so it is always true relative to now:

| State | Colour | Meaning |
| --- | --- | --- |
| Assigned | yellow | Set, not in yet, due date hasn't passed |
| Overdue | red | Set, not in yet, due date has passed |
| Collected | green | Marked in — stamped with when |

A student added to a class after homework was set inherits it as assigned.
The board sorts by **name** (surname first) or by **completion**, which floats
overdue to the top, then assigned, then collected.

## Layout

- `src/pages` — routed pages
- `src/components` — shared UI
- `src/lib` — client-safe logic: `status.ts` (state derivation and sorting),
  `format.ts` (names, dates, stamps), `data-context.tsx` (one bootstrap read)
- `netlify/functions` — the API; `_shared/` holds the R2 + auth code that must
  never reach the browser bundle

## Design

Settings → Design. Nine independent axes, each a `data-*` attribute on `<html>`
that `src/index.css` reacts to, so the whole UI re-skins without React
re-rendering anything:

| Axis | Values |
| --- | --- |
| Mode | Light, Dark, System (follows the device, live) |
| Palette | Graphite, Studytubby, Bone, Blueprint, Phosphor, Ink, Dusk, Sage — each with its own light **and** dark face |
| Accent | Theme default, plus 8 swatches; overrides the palette's own accent |
| Typeface | Grotesk, Arcade, Neue, Editorial, Humanist, Terminal — loaded on demand |
| Density | Compact, Normal, Roomy |
| Corners | Square, Soft, Round, Pill |
| Borders | Hairline, Medium, Bold |
| Shadow | Flat, Soft, Hard offset |
| Texture | None, Grid, Dots, Rule lines |

Eight **presets** set every axis at once — "Studytubby" is the sibling app's
cream paper, 2px ink borders and hard offset shadows; "Green screen" is a
phosphor terminal in mono throughout — and every axis stays editable
afterwards.

Two implementation notes worth knowing before editing:

- **Accent and line use a base/override pair** (`--accent-base` /
  `--accent-override`), not cascade order. A theme block is more specific than
  an axis block, so a plain override would lose; the indirection makes the axis
  win regardless.
- **Density scales the root font size** rather than touching components. Every
  rem-based pad, gap and type step follows from one lever.

Choices are saved to the account (`settings.design` in the user's blob) **and**
mirrored to `localStorage`. An inline script in `index.html` applies the local
copy before first paint so there is no flash of the wrong theme; the server
copy is merged in once it arrives, so the look follows you to another device
without a partial or older blob resetting axes it does not mention. Keep that
script's defaults and font URLs in step with `src/lib/design.ts`.
