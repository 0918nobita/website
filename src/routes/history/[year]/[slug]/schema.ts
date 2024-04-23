import { z } from 'zod';

export const svxSchema = z.object({
    default: z.unknown(),

    metadata: z.object({
        slug: z.string(),
        year: z.number().int(),
        type: z.union([
            z.literal('primary'),
            z.literal('secondary'),
            z.literal('tertiary'),
        ]),
        hasDetail: z.literal(true),
        title: z.string(),
        modifiedAt: z.string(),
    }),
});

export type Svx = z.infer<typeof svxSchema>;
