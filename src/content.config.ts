import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string().default('Top Rank Advertising'),
    category: z.enum(['tips', 'maintenance', 'news', 'guides']),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
