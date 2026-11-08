# Portafolio — Leví Gadiel Sojos González

Sitio estático generado con [Astro](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com),
hospedado en **GitHub Pages**: <https://gadivalr.github.io>

## Idiomas

- **ES** (base): `/`
- **EN**: `/en/`
- Selector ES | EN en la navbar. La preferencia se guarda en `localStorage` (`lang`) y, en la
  primera visita, se respeta el idioma del navegador.
- Todo el texto vive en diccionarios tipados: `src/i18n/es.ts` y `src/i18n/en.ts`
  (mismos campos; TypeScript los exige idénticos).

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera ./dist
npm run preview    # sirve ./dist en local
```

## Estructura

```
src/
├── components/         Header, Hero, Projects, FeaturedProject, Trajectory,
│                       Skills, Contact, Footer, SectionHeading, FlybackSheet
├── layouts/BaseLayout.astro   <head> completo: meta/OG/hreflang, fuentes, script i18n
├── pages/
│   ├── index.astro     # ES (/)
│   ├── en/index.astro  # EN (/en/)
│   ├── proyectos/flyback.astro     # ES — detalle Flyback
│   ├── en/proyectos/flyback.astro  # EN — detalle Flyback
│   └── 404.astro       # bilingüe
├── i18n/               es.ts · en.ts · index.ts (helper getDict)
├── styles/global.css   Tailwind 4 + tokens del diseño (paper/ink/accent)
└── content/blog/       Colección Markdown para el futuro blog (vacía; ver su README)
public/
├── favicon.svg         [D] acentuado
└── images/             fig-1-1.jpg, fig-2-1.jpg (figuras técnicas locales)
```

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica en cada push a `main`
(usa `withastro/action` + `actions/deploy-pages`).

1. Crea el repo **`gadivalr.github.io`** en GitHub (user site → sirve desde la raíz).
2. En el repo: **Settings → Pages → Source: GitHub Actions**.
3. Sube el código:

   ```bash
   git remote add origin https://github.com/gadivalr/gadivalr.github.io.git
   git push -u origin main
   ```

4. Cada push a `main` redespliega automáticamente.

> ¿Prefieres un *project site* (`gadivalr.github.io/mi-repo`)? Cambia en `astro.config.mjs`:
> `site: 'https://gadivalr.github.io'` y agrega `base: '/mi-repo'`. Ojo: los enlaces internos
> y `public/` deberían pasar por el helper de base o moverse a `src/assets/`.

## Pendiente de rellenar por el autor ([COMPLETAR])

Búscalos en `src/i18n/es.ts` y `src/i18n/en.ts`:

- [x] Correo de contacto (`mailto:levsojos2021@udec.cl`) — hecho
- [x] URL de GitHub (`github.com/gadivalr`) — hecho
- [x] URL de LinkedIn (`linkedin.com/in/levsojos`) — hecho
- [x] Proyecto 01 (DMC3): problema, resultado (0.7221 vs 0.72, 0.29 %) — hecho
- [ ] Proyecto 01: informe de avance en PDF (enlaces)
- [x] Proyecto 02 (4 estanques): problema, acciones — hecho
- [ ] Proyecto 02: cifra de resultado y enlaces
- [ ] Proyecto 03 (Memoria): herramientas y texto final
- [ ] Proyecto 04 (Flyback): estado — hecho (Completado · dic 2025)
- [ ] Figuras 3.1–3.4 del Flyback → agregar a `public/images/` y enlazar en `src/i18n/*.ts` (`flyback.figures`)
- [ ] Proyecto 05 (Brazo 6 GDL): herramientas
- [ ] CV en PDF → agregar a `public/` y enlazar en `src/i18n/*.ts` (`cvCta`)

## Notas de diseño

- Réplica fiel del mockup original: `paper #fef9f0`, `ink #1A1A1A`, `accent #1F3A8A`,
  Source Serif 4 + JetBrains Mono, `.to-fill` (subrayado punteado), hover de `nav-link`,
  marginalia lateral 4/8 columnas en proyectos destacados.
- Sin Tailwind CDN: las clases se compilan en build (Tailwind 4 + plugin Vite).
- Sin JavaScript obligatorio; solo un script mínimo para persistir el idioma.
