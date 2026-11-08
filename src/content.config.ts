import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección de blog (ES/EN) — preparada para el futuro.
 * Estructura de archivos:
 *   src/content/blog/es/mi-post.md
 *   src/content/blog/en/my-post.md
 *
 * Frontmatter mínimo:
 *   title: "Título"
 *   description: "Resumen opcional"
 *   pubDate: 2026-12-01
 *   lang: es | en            (opcional; se puede inferir de la carpeta)
 *   draft: false             (opcional)
 */
const blog = defineCollection({
  loader: glob({ pattern: '{es,en}/**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['es', 'en']).default('es'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
