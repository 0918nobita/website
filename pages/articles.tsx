import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

interface Article {
    title: string;
    content: Document;
}

interface Props {
    articles: Article[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const client = await createClient({
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        space: process.env.SPACE!,
        environment: process.env.ENV!,
        accessToken: process.env.ACCESS_TOKEN!,
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
    });

    const entries = await client.getEntries<Article>({
        content_type: 'article',
        order: '-sys.createdAt',
    });

    const articles = entries.items.map<Article>((entry) => ({
        title: entry.fields.title,
        content: entry.fields.content,
    }));

    return { props: { articles } };
};

const ArticlesPage: React.FC<Props> = ({ articles }) => {
    const list = articles.map((article) => (
        <div key={article.title}>
            <h3>{article.title}</h3>
            {documentToReactComponents(article.content)}
        </div>
    ));

    return (
        <>
            <Head>
                <title>Articles - Kodai</title>
            </Head>
            <h2>Articles</h2>
            {list}
        </>
    );
};

export default ArticlesPage;
