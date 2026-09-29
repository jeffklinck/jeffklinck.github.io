# Jeff Klinck — personal site

A static personal site built with Astro and published with GitHub Pages. There is no database or custom editor: the writing lives in ordinary Markdown files in this repository.

## Make common updates

- Edit the bio in `src/content/pages/about.md`.
- Edit education and coursework in `src/content/pages/professional.md`.
- Add a note by copying a file in `src/content/notes/`, renaming it, and changing its frontmatter and body.
- Add a paper by copying a file in `src/content/papers/` and setting its `order`, metadata, and body.
- Add images to `public/images/`, then use them from Markdown as `/images/your-file.jpg`.

Markdown supports headings, lists, links, blockquotes, tables, code, footnotes, and images. Raw HTML can be used for a captioned image:

Link any phrase to another page or an external site with standard Markdown:

```md
[See my professional work](/professional/)
[Read this paper](/papers/verifiable-smart-contracts/)
[Visit an external source](https://example.com)
```

```html
<figure>
  <img src="/images/example.jpg" alt="A useful description">
  <figcaption>Your caption.</figcaption>
</figure>
```

Set `draft: true` in a note's frontmatter to keep it out of the published site.

## Preview locally

```sh
npm install
npm run dev
```

## Publish

Every push to `main` runs the workflow in `.github/workflows/deploy.yml`. In the repository settings, choose **GitHub Actions** as the Pages source once; subsequent changes publish automatically.
