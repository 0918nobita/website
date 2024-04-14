import { defineCollection, z } from 'astro:content';

export const historyDetail = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        thumbnail: z.string().url().optional(),
    }),
});

export const collections = {
    historyDetail,
};
