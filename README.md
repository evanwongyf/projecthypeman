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
  preferred name, birthday, photo, CCAs, interests, characteristics, parent and
  guardian contacts, and relationships. A student either belongs to a class or
  sits in the unassigned pool, which is a first-class place to be, not an error
  state. Deleting a class releases its students into that pool rather than
  deleting them.
- **Relationship** — friend, close friend, conflict, romance, sibling or other,
  with the other person named. **It is stored once**, on whichever profile it
  was added from, and the other side is derived at read time, so it shows on
  both profiles and can never end up half-deleted. A relationship starts with
  one note and collects more; the first note cannot be deleted, since a
  relationship with no notes says nothing.
- **Note / incident** — each one is its own entry, stamped with the date and
  time it was logged. Kept as two separate logs on the profile.
- **Homework** — title, description, due date, set on a class. Everyone on the
  roster starts **assigned**.

## When something is missing

Every API route checks its configuration before doing anything. A missing
environment variable returns **503 with the names of what is unset**, and the
login screen shows it, instead of the uncaught throw deep inside the S3 client
that Netlify would otherwise surface as a bare 502 with nothing to go on. Only
names are reported, never values.

`SESSION_SECRET` is in that required set on purpose: a deployed site that fell
back to a built-in signing key would let anyone mint a valid session cookie.

## Sign-in

**Claiming a new install.** `/signup` creates the first account and signs you
in. It is **bootstrap-only**: the route reports itself open while the user list
is empty and returns 403 the moment an account exists, re-checking immediately
before writing so two requests racing an empty install cannot both succeed.
The login screen offers it only while it would actually work. This is the whole
security model — the route exists to claim an empty terminal and nothing more,
which is why there is no way to reopen it. Later accounts are added with
`npm run seed`.

Sign-in is by **email**; the username stays the key for the account's data in
R2, so changing one never moves the other. A wrong email and a wrong password
return the same message, so the form does not confirm which accounts exist.

```bash
ADMIN_USERNAME=…   ADMIN_EMAIL=…   ADMIN_NAME=…   ADMIN_PASSWORD=…
npm run seed
```

## Seating

Classes → a class → **Seating**. A grid of seats (7 × 7 by default, 1–12 each
way); tap a seat and a panel emerges with the class — not seated yet first,
then those sitting elsewhere, searchable. A class can hold any number of named
plans (Term 2, Exam layout, Group work), each with its own independent
arrangement.

**The server owns one invariant: a student occupies exactly one seat.** The
browser only ever says "put this student here"; lifting them out of their old
seat, or swapping them with whoever was already there, is resolved in a single
write. A dropped response can never leave someone sitting in two places.
Shrinking a grid unseats anyone left outside it rather than stranding them in a
seat that no longer renders.

Seating is also where recorded **conflicts** finally pay off. The picker warns
before you place someone next to a student they are in conflict with, the seats
are outlined in red afterwards, and the pairs are listed under the grid. It
reads relationships from both directions, so it does not matter which profile
the conflict was recorded on.

## Points

A ClassDojo-style board per class: Classes → a class → **Points**. Tap a
student (or **Whole class**) to open the effect picker, choose an effect, and
an intermediate modal states what is about to happen — the effect, the
magnitude, and each student's total before and after — with **Cancel** or
**Activate**. Nothing is written until Activate.

Effects are split by a **Reward / Penalty** toggle and can be sorted by name,
points or recently added. They come in two tones, on purpose:

- **Positive** names are meant to be earned and said out loud — Big Brain,
  Clutch, Trailblazer, Ice Cold, Momentum.
- **Needs work** names are plain and factual, about the behaviour and not the
  child — Off task, Phone out, Homework not done, Unkind remark.

Eighteen are seeded on first use and all of them are editable in
Settings → Effects.

Three things the implementation guarantees:

- **The sign lives in one place.** The catalogue stores a magnitude; the sign
  comes from the effect's kind when the award is written. Nothing else has to
  remember that a deduction is negative.
- **A total is never stored.** It is the sum of its ledger entries, so it
  cannot drift out of step with the history behind it.
- **Awards snapshot the effect's name and value.** Renaming, re-pointing or
  retiring an effect leaves awarded points exactly as they were.

A whole-class award writes one entry per student, so it can be undone for a
single child without unpicking the rest. Deleting a student or a class clears
the matching entries; moving a student to another class leaves their old points
behind with the old board.

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
- `src/lib/documents` — the Document Lab: `layout.ts` (the typesetter),
  `fonts.ts` (metrics), `pdf.ts` (display list to file), `templates/` (the
  catalogue)
- `netlify/functions` — the API; `_shared/` holds the R2 + auth code that must
  never reach the browser bundle

## Document Lab

Documents → a template → the lab: the form on the left, the A4 page on the
right, filling in as you type. **Download PDF** produces a real file, not a
print dialog.

Thirty-one templates across Behaviour, Communication, Academic, Classroom and
Admin: incident reports, letters home, progress reports, lesson plans, consent
forms, risk assessments, testimonials and the rest. Choose one or more students
(or a class, or nobody) and the fields the terminal already knows the answer to
arrive filled in: name, class, school, contacts, points, homework record,
logged notes and incidents. Several templates go further and *are* the record,
the way Item Analysis is written from the marks already entered and Seating
Plan Record prints a saved plan with its conflicts.

**The preview is the document.** Blocks are measured and flowed into pages once,
in PostScript points, against pdf-lib's own font metrics; the resulting display
list is drawn twice, as SVG on screen and with pdf-lib into the file. An SVG
baseline is the number the layout computed rather than something the browser
infers, so a line cannot land in one place on screen and another on the page.
Helvetica and Arial are metric-compatible, as are Times-Roman and Times New
Roman, which is why the CSS font stacks name both.

Two things the flow does that separate a generated form from a professional
one: a heading is never left at the foot of a page, and a table that splits
repeats its headings on the next one. Text is drawn as text, so the PDF is
selectable and searchable. **Print** is also there, rendering the same pages
into `#print-root` with `@page { size: A4; margin: 0 }`.

### Projects and versions

A document is a project: the template id, who it is about, the values typed in,
and its history. Templates are code and only the id is stored, so improving a
template improves every document already written from it. That makes the ids
part of the data format, so they are never renamed.

The draft **saves itself** a second after you stop typing. A version is a
marker you choose to drop, which is what makes the history worth reading, and
**restoring appends**: an old version comes back as a new, higher-numbered one
and nothing is rewritten. Beyond forty versions the oldest is dropped, except
version 1, which is the document as it was first written.

Projects live in their own R2 objects rather than in the terminal blob, since
`/api/data` is read on every page load and a history of versions has no
business arriving with it:

```
projecthypeman/
  documents/<username>.json        # index of summaries
  documents-proj/<username>/<id>.json   # one project, with its versions
```

An unknown field id is kept rather than dropped on save, so editing a template
never silently discards what a teacher typed.

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
