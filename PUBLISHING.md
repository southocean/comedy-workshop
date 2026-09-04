# Viewing and publishing this site

## The short version

**You asked for a private repo with a private published page. GitHub cannot give you both on this
account, so the repo stayed private and nothing was published.** Details and options below.

## Right now: just open it

The site is deliberately dependency-free and uses no `fetch()` and no ES modules, so it works straight
off the filesystem. Double-click `index.html`, or:

```bash
start C:\projects\work\comedy-workshop\index.html
```

Everything works this way — the viewer, the inspector, compare, the theme toggle. No server needed.

## Slightly better: a local server

Only worth it if you want clean URLs or to open it from your phone on the same wifi.

```bash
cd C:\projects\work\comedy-workshop && python -m http.server 8731
```

Then <http://127.0.0.1:8731/>.

## Why there is no GitHub Pages URL

GitHub Pages was attempted and refused:

```
422  Your current plan does not support GitHub Pages for this repository.
```

`southocean` is on the **Free** plan, and Free does not allow Pages to publish from a **private**
repository at all. The three ways forward, in order of how well they match what you actually asked for:

| Option | Repo | Who can see the site | Cost |
| --- | --- | --- | --- |
| **Stay local** (current) | private | only you | free |
| GitHub Pro | private | **anyone with the URL** | ~$4/mo |
| Make the repo public | public | anyone, and it's indexable | free |
| GitHub Enterprise Cloud | private | only people you grant access | enterprise pricing |

The important row is the second one. **Pro does not give you a private page** — it only lets a private
repo publish a *public* site. Truly access-controlled Pages is an Enterprise Cloud feature. So upgrading
to Pro would put an unperformed set on a public URL, which is the opposite of what you asked for, and is
why I did not do it.

I also didn't make the repo public — same reason, and it's not a decision to make on your behalf while
you're away.

## If you decide you want it published anyway

Once the repo can publish (Pro, or made public), this is the whole thing:

```bash
gh api -X POST repos/southocean/comedy-workshop/pages -f "source[branch]=main" -f "source[path]=/"
```

Then the URL is <https://southocean.github.io/comedy-workshop/> and it updates on every push to `main`.
`.nojekyll` is already committed so the paths work, and every page carries
`<meta name="robots" content="noindex, nofollow">` so it stays out of search results — obscure, but not
private. Treat it as public.

## Sharing one script without publishing the site

Cheapest option if you just want to send a set to someone: open the script, hit **Plain text**, and
print to PDF. That strips every annotation down to a clean rehearsal script.
