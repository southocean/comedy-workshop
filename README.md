# Comedy Workshop

A private practice site for writing stand-up. Scripts are stored as **annotated beats**, not paragraphs:
every setup records what the room is expected to think (with percentages), every punchline records the
axis it breaks, and the runtime is computed from words, pauses and budgeted laughter.

Static site — no build step, no dependencies. Open `index.html` directly, or serve the folder.

> **No published URL.** GitHub Pages cannot publish from a private repo on this account's plan, and
> even a paid plan would only give a *publicly reachable* page. The repo stayed private and nothing was
> published — see [PUBLISHING.md](PUBLISHING.md) for the options and the one command that enables it.

## Pages

| Page | What it is |
| --- | --- |
| `index.html` | Overview and the beat-role legend |
| `craft/` | Writing Craft — 26 distilled principles, a QA checklist mode, a device toolkit, and sources |
| `workshop/` | Script index |
| `workshop/script.html?id=…&v=…` | The annotated script viewer |
| `case-studies/` | Other comedians, marked up with the same instrument |

## The script viewer

- **Role highlighting** — setup, punchline, tag, one-liner, act-out, callback, sincere, transition, stage direction.
- **Subversion markers** — the orange `S`. Hover or click a line: what they expected → what they got → the axis → the mechanism.
- **Expectation meters** — setups carry a full distribution with a concentration grade. Above 85% on one reading is a clean target; a 60/40 split means the setup needs fixing, not the punchline.
- **Runtime budget** — per beat, per segment, per set. Charges for pauses and for the laughs you must not talk over. Two sliders: speaking pace (wpm) and *room* (how much the audience actually laughs — drop it to 60% for a quiet Tuesday).
- **Cuttable lines** — beats marked `optional: true` toggle off and the runtime recalculates, so you can see what the set weighs after trimming.
- **Plain text** — strips every annotation down to a clean rehearsal script.
- **Versions + compare** — pick any two versions and diff them beat-by-beat: added, cut, rewritten.

## Data model

Script files live in `data/scripts/` and call `CW.registerScript({...})`. Plain `<script>` tags, no
modules, so the site also works opened from `file://`.

```js
CW.registerScript({
  id: "kulturnatten-2026",
  title: "Kulturnatten 2026",
  venue: "…", date: "2026-10-09", slot: "5 minutes",
  targetSeconds: 300,
  premise: "…",
  versions: [{
    id: "v2",
    label: "v2 - working draft",
    notes: "what changed and why",
    segments: [{
      id: "open",
      title: "Cold open: one year in",
      intent: "what this segment is for",
      beats: [
        {
          id: "b-year",              // stable across versions — the diff keys on it
          role: "setup",             // setup punch tag oneliner actout callback sincere transition stage
          text: "One year ago today, I did my first ever stand-up gig.",
          expectations: [            // setups only; percentages, highest first
            { label: "A milestone story — he's about to tell us how far he's come.", pct: 88 },
            { label: "He's going to describe bombing his first gig.", pct: 8 }
          ],
          note: "craft note shown in the inspector"
        },
        {
          id: "b-lookatme",
          role: "punch",
          text: "One year. [beat] Look at me now.",   // [brackets] render as stage direction, not counted as spoken
          laugh: 4,                  // seconds of laughter to budget
          pauseBefore: 0.8,
          subversion: {              // required on every punch
            from: "A year of grind means he has arrived somewhere.",
            to:   "A year of grind means a grown man in a banana suit at a free open mic.",
            axis: "growth to visible decline",
            mechanism: "Visual literalisation — the biggest laugh is a thing you never said."
          },
          delivery: "Don't gesture at the suit.",
          optional: false,           // true = cuttable, toggles out of the runtime
          callbackTo: "b-donors",    // id of the beat this pays off
          risk: "Only lands in a room that knows Janteloven.",
          alt: [{ text: "alternate line", why: "when to use it" }]
        }
      ]
    }]
  }]
});
```

Register a new script by adding the file and a `<script>` tag in `workshop/index.html` and
`workshop/script.html`. Case studies are identical in shape — `CW.registerStudy(...)` in
`data/case-studies/`.

### Tags carry no `subversion`

That's deliberate and the viewer says so. A tag rides the axis the punchline already opened; its value is
surprise and escalation, not a second turn.

## Current scripts

**Kulturnatten 2026** — 5 minute open mic, banana suit. Spine: one year in, twenty-one kroner, and
Cattelan's *Comedian*. Three versions; **`v3` is the current draft** (6:03 full, 5:12 with cuttables off).

`v3` is a de-AI pass. `v2` read fine on the page and would have played flat: seven of its punchlines
resolved as the same antithesis — *"this isn't X, it's Y"* — so by the third one the room can feel the
landing coming without predicting the words. Surprise was dying at the level of syntax. `v2` also had
zero act-outs and no other human being in it for five minutes. Compare `v2` against `v3` in the viewer
to see every substitution and why.

Two things in it are flagged in the data and worth a decision before you learn it:

1. **The identity spine** (segment 2 — banana as yellow-outside/white-inside) assumes it's your own story.
   If it isn't, there's an alternate line on `b-banana` and the rest of the set stands without it.
2. **Two Danish-specific beats** — *pant* and *Janteloven* — are the biggest local laughs in the set and
   the most likely to die in an English-language room. Both are marked with a `risk` note.

## Case studies and copyright

Case-study files hold other comedians' copyrighted material. Store only the short beats you're actually
annotating, always credited. The value is the mark-up, not the transcript. This repo is private; keep it
that way.

**Gianmarco Soresi — *Thief of Joy*** (2025, 66 min) is analysed: the shape of the hour, the four handles
that run its full length, and eight segments marked up beat-by-beat. The full transcript is deliberately
**not** in this repo — only short quoted anchors where a specific craft point is being made about them.
A working segmentation of the whole hour lives outside the repo, in `~/Downloads`.
