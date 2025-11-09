import { metadataSchema, type Metadata } from './schema';

type Article = Readonly<{
  type: 'primary' | 'secondary' | 'tertiary';
  slug: string;
  title: string;
  link?: Link;
}>;

type Link =
  | { type: 'external'; url: string }
  | { type: 'internal'; path: string };

export function load() {
  const articleMetadata = getArticleMetadata();
  const yearArticlesMap = new Map<number, readonly Article[]>();

  for (const metadata of articleMetadata) {
    const articles = yearArticlesMap.get(metadata.year) ?? [];

    yearArticlesMap.set(metadata.year, [
      ...articles,
      {
        type: metadata.type,
        slug: metadata.slug,
        title: metadata.title,
        link: getLinkFromMetadata(metadata),
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

function getLinkFromMetadata(metadata: Metadata): Link | undefined {
  if (metadata.hasDetail) {
    return {
      type: 'internal',
      path: `/history/${metadata.year}/${metadata.slug}`,
    } as const;
  }

  if (metadata.externalLink === undefined) return;

  return {
    type: 'external',
    url: metadata.externalLink,
  } as const;
}

function getArticleMetadata(): Metadata[] {
  const globImport = import.meta.glob<{ metadata?: unknown }>('./**/*.svx', {
    eager: true,
  });

  const metadataList = Object.entries(globImport).map(([, importedContent]) =>
    metadataSchema.parse(importedContent.metadata)
  );

  return metadataList;
}

function sortArticles(articles: readonly Article[]): Article[] {
  return articles.toSorted((article0, article1) => {
    if (article0.type === article1.type) {
      return article0.slug.localeCompare(article1.slug);
    }

    const aNum = articleTypeToNum(article0.type);
    const bNum = articleTypeToNum(article1.type);

    return bNum - aNum;
  });
}

const priority = {
  primary: 2,
  secondary: 1,
  tertiary: 0,
} as const;

function articleTypeToNum(type: keyof typeof priority): number {
  switch (type) {
    case 'primary': {
      return priority.primary;
    }
    case 'secondary': {
      return priority.secondary;
    }
  }
  return priority.tertiary;
}
