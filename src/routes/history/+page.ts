import { metadataSchema } from './schema';

function articleTypeToNum(type: 'primary' | 'secondary' | 'tertiary') {
    switch (type) {
        case 'primary':
            return 2;
        case 'secondary':
            return 1;
    }
    return 0;
}

export function load() {
    const globImport = import.meta.glob<{ metadata?: unknown }>('./**/*.svx', {
        eager: true,
    });

    const metadataList = Object.entries(globImport).map(([, importedContent]) =>
        metadataSchema.parse(importedContent.metadata),
    );

    const yearPagesMap = new Map<
        number,
        Array<{
            type: 'primary' | 'secondary' | 'tertiary';
            text: string;
            link?:
                | { type: 'external'; url: string }
                | { type: 'internal'; path: string };
        }>
    >();

    for (const metadata of metadataList) {
        let pages = yearPagesMap.get(metadata.year);

        if (pages === undefined) {
            pages = [];
            yearPagesMap.set(metadata.year, pages);
        }

        pages.push({
            type: metadata.type,
            text: metadata.title,
            link: metadata.hasDetail
                ? ({
                      type: 'internal',
                      path: `/history/${metadata.year}/${metadata.slug}`,
                  } as const)
                : metadata.externalLink === undefined
                  ? undefined
                  : ({ type: 'external', url: metadata.externalLink } as const),
        });
    }

    for (const year of yearPagesMap.keys()) {
        const pages = yearPagesMap.get(year);
        if (pages === undefined) continue;

        pages.sort((a, b) => {
            if (a.type === b.type) return a.text.localeCompare(b.text);

            const aNum = articleTypeToNum(a.type);
            const bNum = articleTypeToNum(b.type);

            return bNum - aNum;
        });
    }

    const entries = [...yearPagesMap.entries()];
    entries.sort(([aYear], [bYear]) => bYear - aYear);

    const timelineContents = entries.map(([year, pages]) => ({
        marker: `${year}年`,
        items: pages,
    }));

    return { timelineContents };
}
