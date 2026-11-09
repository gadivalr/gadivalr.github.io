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
npm run dev        # http://localhost:4321 (usa astro dev --background)
npm run build      # genera ./dist
npm run preview    # sirve ./dist en local
```

## Estructura

```
src/
├── components/         Header, Hero (index), Projects, FeaturedProject, Trajectory,
│                       Skills, Contact, Footer, SectionHeading, FlybackSheet, BatchSheet
├── layouts/BaseLayout.astro   <head> completo: meta/OG/hreflang, fuentes, script lightbox
├── pages/
│   ├── index.astro     # ES (/)
│   ├── en/index.astro  # EN (/en/)
│   ├── proyectos/flyback.astro     # ES — detalle Flyback
│   ├── en/proyectos/flyback.astro  # EN — detalle Flyback
│   └── 404.astro       # bilingüe
├── i18n/               es.ts · en.ts · index.ts (helper getDict)
├── styles/global.css   Tailwind 4 + tokens del diseño (paper/ink/accent)
├── scripts/lightbox.ts PhotoSwipe para ampliar imágenes y videos
└── content/blog/       Colección Markdown para el blog (MPC, control predictivo)
public/
├── images/             figuras técnicas, videos y PDF del flyback
├── LeviSojos_CV.pdf
├── Proyecto_flyback.pdf
└── video_2026-11-08_21-13-17.mp4  (HMI 4 tanques, P02)
```

## Proyectos incluidos

| # | Proyecto | Estado | Qué hace el autor |
|---|----------|--------|-------------------|
| 01 | Habilitación módulo Calibrate (DMC3) — MPC | Completado | Simplamiento en Simulink, historización OPC UA, re-identificación de ganancia (0.29 % error) |
| 02 | Control planta piloto 4 tanques acoplados | Completado | Modelo ANFIS, controlador difuso Sugeno + feedforward en Structured Text (PLC Allen-Bradley) |
| 04 | Convertidor flyback aislado 10 W | Completado | Transformador bobinado a mano, PWM PIC18F4550 (C), HMI PySide6, PCB KiCad (60 % eficiencia) |
| 05 | Control batch planta térmica (nivel, flujo, temperatura) | Avance 2025-1 | Diagrama SFC, PID de flujo en Structured Text, Gain Scheduler (flujo no lineal) |

Otros proyectos (03, 06): tesis en curso (DMC3) y brazo robótico 6 GDL.

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

## Estado de contenido (completado)

- Correo, GitHub y LinkedIn de contacto
- Proyecto 01: problema, acciones, resultado cuantitativo, figuras
- Proyecto 02: problema, acciones, video HMI en operación, resultado cualitativo
- Proyecto 04: fichas completa (equipo / mi parte / 60 % eficiencia), 4 figuras, informe PDF
- Proyecto 05: SFC, PID en Structured Text, Gain Scheduler, video de ejecución en operación
- Hero: último año de Ingeniería Civil Electrónica (UdeC), Licenciado en Ciencias de la Ingeniería, práctica verano 2026-27, título marzo 2027
- Habilidades: Allen-Bradley ControlLogix, Studio 5000/RSLogix, Ladder y Texto Estructurado (IEC 61131-3), FactoryTalk View, EtherNet/IP & OPC UA, MATLAB/Simulink, ANFIS, Python, KiCad, LTspice, PIC (C), ESP32, Python/PySide6
- CV PDF enlazado como botón con borde azul

## Notas de diseño

- Réplica fiel del mockup original: `paper #fef9f0`, `ink #1A1A1A`, `accent #1F3A8A`,
  Source Serif 4 + JetBrains Mono, `.to-fill` (subrayado punteado), hover de `nav-link`.
- Sin Tailwind CDN: las clases se compilan en build (Tailwind 4 + plugin Vite).
- Lightbox con PhotoSwipe: imágenes y videos se amplían al tocar, con pie de figura,
  cierre por X / fuera / Esc / botón atrás, y scroll bloqueado.
- Sin JavaScript obligatorio; solo scripts mínimos para idioma y lightbox.