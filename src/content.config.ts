import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

const tutorialsCollection = defineCollection({
  type: 'content', // This is the default and can often be omitted
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // Ensure pubDate is parsed as a Date object
    // If your tutorials will have a hero image, you can add it her
    // Add any other specific frontmatter fields for your tutorials
  }),
});

// Export all your collections
export const collections = {
  blog,
  tutorials: tutorialsCollection, // Add your tutorials collection here
};