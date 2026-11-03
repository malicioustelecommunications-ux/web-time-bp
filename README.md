# Portfolio

A minimal Hugo portfolio styled as a sheet of Letraset dry-transfer lettering, set in [DINish](https://github.com/playbeing/dinish). No theme dependency: the templates live in `layouts/`.

## Run locally

Install [Hugo](https://gohugo.io/installation/) (extended, 0.147 or later), then:

```sh
hugo server -D
```

Open http://localhost:1313. `-D` includes drafts.

## Structure

| Path | What it is |
| --- | --- |
| `hugo.toml` | Site title, author, tagline, sheet number, "printed in" line and the nav menu |
| `content/_index.md` | Homepage text |
| `content/work/`, `content/paper/`, `content/sound/` | One Markdown file per entry; `_index.md` is the section intro and sets the section's `sheet` number |
| `content/about.md` | About page |
| `layouts/` | Templates (`baseof`, `list`, `single`, homepage, partials) |
| `static/css/main.css` | All styling; colours and sizes are variables at the top, dark mode included |
| `static/fonts/` | DINish web fonts and their licence (SIL Open Font License) |
| `static/` | Anything else served as-is (images, PDFs, audio) |

## Add an entry

```sh
hugo new content work/my-project.md
```

New entries start as drafts. Set `draft: false` (or delete the line) to publish. Delete the `example-*.md` files once you have real content.

## Deploy

`.github/workflows/hugo.yml` builds and publishes to GitHub Pages on every push to `main`. Turn it on once under **Settings → Pages → Source: GitHub Actions**.
