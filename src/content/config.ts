import { z, defineCollection } from 'astro:content';

const historyCollection = defineCollection({
    type: 'content',
    schema: z.object({
        year: z.number(),
        priority: z.union([z.literal('A'), z.literal('B'), z.literal('C')]),
    }),
});

export const collections = {
    history: historyCollection,
};
