import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const minimal = import.meta.env.UE_MINIMAL === undefined ? false : true;
if (minimal) {
  console.log('Building minimal configuration');
}

const pages = defineCollection({
  loader: minimal
    ? glob({ pattern: "**/preface.md", base: "./src/md/pages" })
    : glob({ pattern: "**/*.md", base: "./src/md/pages" }),
  schema: z.object({
    hide: z.boolean(),
    path: z.string(),
    titles: z.array(z.string()),
    index: z.array(z.number()),
    sequence: z.number(),
  }),
});

const special = defineCollection({
  loader: minimal
    ? glob({ pattern: "search.md", base: "./src/md" })
    : glob({ pattern: "*.md", base: "./src/md" }),
  schema: z.object({
    path: z.string(),
    titles: z.array(z.string()).optional(),
    index: z.array(z.number()).optional(),
    sequence: z.number().optional(),
  }),
});

export const collections = { pages, special };
