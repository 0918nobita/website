import { metadataSchema, type Metadata } from "./schema";

type Article = Readonly<{
    type: "primary" | "secondary" | "tertiary";
    text: string;
    link?:
        | { type: "external"; url: string }
        | { type: "internal"; path: string };
}>;

export function load() {
    const articleMetadata = getArticleMetadata();
    const yearArticlesMap = new Map<number, readonly Article[]>();

    for (const metadata of articleMetadata) {
        const articles = yearArticlesMap.get(metadata.year) ?? [];

        yearArticlesMap.set(metadata.year, [
            ...articles,
            {
                type: metadata.type,
                text: metadata.title,
                link: metadata.hasDetail
                    ? ({
                          type: "internal",
                          path: `/history/${metadata.year}/${metadata.slug}`,
                      } as const)
                    : metadata.externalLink === undefined
                      ? undefined
                      : ({
                            type: "external",
                            url: metadata.externalLink,
                        } as const),
            },
        ]);
    }

    for (const year of yearArticlesMap.keys()) {
        const articles = yearArticlesMap.get(year);
        if (articles === undefined) continue;

        yearArticlesMap.set(year, sortArticles(articles));
    }

    const entries = [...yearArticlesMap.entries()];
    entries.sort(([aYear], [bYear]) => bYear - aYear);

    const timelineContents = entries.map(([year, pages]) => ({
        marker: `${year}年`,
        items: pages,
    }));

    return { timelineContents };
}

function getArticleMetadata(): Metadata[] {
    const globImport = import.meta.glob<{ metadata?: unknown }>("./**/*.svx", {
        eager: true,
    });

    const metadataList = Object.entries(globImport).map(([, importedContent]) =>
        metadataSchema.parse(importedContent.metadata),
    );

    return metadataList;
}

function sortArticles(articles: readonly Article[]): Article[] {
    return articles.toSorted((a, b) => {
        if (a.type === b.type) return a.text.localeCompare(b.text);

        const aNum = articleTypeToNum(a.type);
        const bNum = articleTypeToNum(b.type);

        return bNum - aNum;
    });
}

function articleTypeToNum(type: "primary" | "secondary" | "tertiary") {
    switch (type) {
        case "primary":
            return 2;
        case "secondary":
            return 1;
    }
    return 0;
}
