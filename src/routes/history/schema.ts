import { z } from 'zod';

export const metadataSchema = z.intersection(
  z.object({
    slug: z.string(),
    year: z.number().int(),
    type: z.union([
      z.literal('primary'),
      z.literal('secondary'),
      z.literal('tertiary'),
    ]),
    title: z.string(),
  }),
  z.union([
    z.object({ hasDetail: z.literal(true), modifiedAt: z.string() }),
    z.object({
      hasDetail: z.literal(false),
      externalLink: z.string().optional(),
    }),
  ])
);

export type Metadata = z.infer<typeof metadataSchema>;
