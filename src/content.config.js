import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { bookLoader } from './loaders/book-loader';
import { specLoader } from './loaders/spec-loader';

const minimal = import.meta.env.UE_MINIMAL === undefined ? false : true;
if (minimal) {
  console.log('Building minimal configuration');
}

const pages = defineCollection({
  loader: minimal ? bookLoader('src/test.md') : bookLoader('src/book.md'),
  schema: z.object({
    hide: z.boolean(),
    path: z.string(),
    sequence: z.number(),
    titles: z.array(z.string()),
    index: z.array(z.number()),
    search: z.boolean().optional(),
  }),
});

const special = defineCollection({
  loader: minimal
    ? glob({ pattern: 'search.md', base: './src/md' })
    : glob({ pattern: '*.md', base: './src/md' }),
  schema: z.object({
    path: z.string(),
    titles: z.array(z.string()).optional(),
    index: z.array(z.number()).optional(),
    sequence: z.number().optional(),
    search: z.boolean().optional(),
  }),
});

const annotated = defineCollection({
  loader: minimal ? specLoader('src/test.md') : specLoader('src/book.md'),
  schema: z.object({
    path: z.string(),
    sequence: z.number(),
    titles: z.array(z.string()),
    index: z.array(z.number()),
    search: z.boolean(),
  }),
});

export const collections = { pages, special, annotated };
