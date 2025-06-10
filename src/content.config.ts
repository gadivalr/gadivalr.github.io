import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    // Carga archivos Markdown y MDX en el directorio `src/content/blog/`.
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    // Valida el frontmatter usando un esquema
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        // Transforma la cadena a un objeto Date
        pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		 lang: z.enum(['en', 'es']),

    }),
});


const tutorials = defineCollection({ // Cambié el nombre de la constante para mayor claridad
    // Carga archivos Markdown y MDX en el directorio `src/content/tutorials/`.
    loader: glob({ base: './src/content/tutorials', pattern: '**/*.{md,mdx}' }),
    // Usa el mismo esquema de validación que el blog
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
 lang: z.enum(['en', 'es']),
    }),
});

// Exporta todas tus colecciones
export const collections = {
  blog,
  tutorials, // Ahora usamos la constante 'tutorials'
};