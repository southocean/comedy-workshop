# Viewing and publishing this site

## Live URL

<https://southocean.github.io/comedy-workshop/>

The repo is **public** and GitHub Pages serves `main` from the repository root.
Every push to `main` redeploys, usually within a minute.

`.nojekyll` is committed so paths starting with `_` and `.` are served untouched.

## It is public — treat it that way

Every page carries `<meta name="robots" content="noindex, nofollow">`, so the site
stays out of search results. That makes it undiscoverable, **not private**: anyone
with the URL can read everything, and so can anyone browsing the repo.

Two consequences worth remembering:

- **Unperformed material is readable.** If a set is still being written and you'd
  rather it not be quotable before you've done it, don't push it.
- **Case-study excerpts are published.** `data/case-studies/` quotes other
  comedians. Keep those excerpts short and credited — the mark-up is the value,
  not the transcript.

## Working locally

The site is dependency-free and uses no `fetch()` and no ES modules, so it runs
straight off the filesystem. Double-click `index.html`, or:

```bash
start C:\projects\work\comedy-workshop\index.html
```

Everything works this way — the viewer, the inspector, compare, the theme toggle.

For clean URLs, or to open it from your phone on the same wifi (no Python on this
machine — `serve.mjs` is dependency-free Node, same as the rest of the repo):

```bash
node serve.mjs
```

Then <http://127.0.0.1:8731/>.

## If you later want it genuinely access-controlled

GitHub Pages has no server you control, so there is nowhere to enforce a login —
any gate written in JavaScript is decoration, because the data has already
reached the browser. Real enforcement needs a server in front of the files.

The stack for that is written and ready in `../selfhost` (Caddy + Authelia on a
free Oracle Cloud VM, ~€10/yr for a domain). Because this site loads its data
through plain `<script src>` tags, putting it behind that gate needs **no changes
to any page here** — an unauthenticated request for `data/scripts/*.js` simply
never returns the file. See `selfhost/SETUP.md`.

## Sharing one script as a document

Open the script, hit **Plain text**, print to PDF. That strips every annotation
down to a clean rehearsal script.
