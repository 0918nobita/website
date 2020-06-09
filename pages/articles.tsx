import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { IArticleFields } from '../contentful';

type Article = Required<IArticleFields>;

interface Props {
    articles: Article[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const space = process.env.SPACE!;
    const environment = process.env.ENV!;
    const accessToken = process.env.ACCESS_TOKEN!;
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    const client = await createClient({
        space,
        environment,
        accessToken,
    });

    const entries = await client.getEntries<IArticleFields>({
        content_type: 'article',
        order: '-sys.createdAt',
    });

    const articles = entries.items.map(
        (entry): Article => {
            if (!entry.fields.title) throw new Error('title is undefined');
            if (!entry.fields.content) throw new Error('content is undefined');

            return {
                title: entry.fields.title,
                content: entry.fields.content,
            };
        }
    );

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
