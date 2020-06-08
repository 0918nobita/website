import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { createClient } from 'contentful';
import gql from 'graphql-tag';
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
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const space = process.env.SPACE!;
    const environment = process.env.ENV!;
    const accessToken = process.env.ACCESS_TOKEN!;
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    const cache = new InMemoryCache();

    const link = new HttpLink({
        uri: `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`,
    });

    const apolloClient = new ApolloClient({ cache, link });

    const result = await apolloClient.query({
        query: gql`
            query {
                articleCollection(limit: 100) {
                    items {
                        title
                        content {
                            json
                        }
                    }
                }
            }
        `,
        context: {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    });

    console.log(result.data.articleCollection.items);

    const client = await createClient({
        space,
        environment,
        accessToken,
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
