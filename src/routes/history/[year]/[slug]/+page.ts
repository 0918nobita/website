import type { Component } from 'svelte';

import type { PageLoad } from './$types';
import { svxSchema } from './schema';

export const load: PageLoad = async ({ params }) => {
    const importedContent = await import(
        `../../${params.year}/${params.slug}.svx`
    );

    const svx = svxSchema.parse(importedContent);

    return {
        content: svx.default as Component,
        metadata: svx.metadata,
    };
};
