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
        // eslint-disable-next-line @typescript-eslint/camelcase
        content_type: 'article',
        order: '-sys.createdAt',
    });

    const articles = entries.items.map<Article>((entry) => ({
        title: entry.fields.title,
        content: entry.fields.content,
    }));

    return { props: { articles } };
};

const IndexPage: React.FC<Props> = ({ articles }) => {
    const list = articles.map((article) => (
        <div key={article.title}>
            <h3>{article.title}</h3>
            {documentToReactComponents(article.content)}
        </div>
    ));

    return (
        <>
            <Head>
                <title>Kodai</title>
                <meta name="description" content="Kodai's website" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="icons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="icons/icon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="icons/icon-16x16.png"
                />
                <link rel="canonical" href="https://kodai.vision" />

                <meta name="theme-color" content="#8968CC" />
                <link rel="manifest" href="/manifest.json" />

                <meta property="og:local" content="ja_JP" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Kodai" />
                <meta property="og:url" content="https://kodai.vision" />
                <meta property="og:description" content="Kodai's website" />

                <meta property="twitter:card" content="summary" />
            </Head>

            <h2>Hello, Next.js!</h2>
            {list}
        </>
    );
};

export default IndexPage;
