# Blog (futuro)

Entradas en Markdown separadas por idioma:

- `es/mi-post.md` → se publicaría en `/blog/mi-post/`
- `en/my-post.md` → se publicaría en `/en/blog/my-post/`

Frontmatter mínimo:

```md
---
title: "Mi primer post"
description: "Resumen corto"
pubDate: 2026-12-01
lang: es
---
```

La colección ya está declarada en `src/content.config.ts` (esquema con
`title`, `pubDate`, `lang`, `draft`). Cuando quieras activar el blog,
agrega las rutas `src/pages/blog/[slug].astro` y `src/pages/en/blog/[slug].astro`.
