import { defineCollection, z } from 'astro:content';

export const historyDetail = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        modifiedAt: z.date(),
    }),
});

export const collections = {
    historyDetail,
};
