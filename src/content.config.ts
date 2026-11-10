import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.string().default('Website concept'),
    url: z.string().default('#'),
    img: z.string().default(''),
    c1: z.string(),
    c2: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { projects };