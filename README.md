# Portfolio

A minimal Hugo portfolio styled with [terminal.css](https://terminalcss.xyz/). No theme dependency: the templates live in `layouts/`.

## Run locally

Install [Hugo](https://gohugo.io/installation/) (extended, 0.147 or later), then:

```sh
hugo server -D
```

Open http://localhost:1313. `-D` includes drafts.

## Structure

| Path | What it is |
| --- | --- |
| `hugo.toml` | Site title, author, description and the nav menu |
| `content/_index.md` | Homepage text |
| `content/work/`, `content/paper/`, `content/sound/` | One Markdown file per entry; `_index.md` is the section intro |
| `content/about.md` | About page |
| `layouts/` | Templates (`baseof`, `list`, `single`, homepage, partials) |
| `static/css/custom.css` | Overrides on top of terminal.css, including dark mode |
| `static/` | Anything else served as-is (images, PDFs, audio) |

## Add an entry

```sh
hugo new content work/my-project.md
```

New entries start as drafts. Set `draft: false` (or delete the line) to publish. Delete the `example-*.md` files once you have real content.

## Deploy

`.github/workflows/hugo.yml` builds and publishes to GitHub Pages on every push to `main`. Turn it on once under **Settings → Pages → Source: GitHub Actions**.
