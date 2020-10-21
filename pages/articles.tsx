import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { GetReadme } from '../graphql/__generated__/GetReadme';
import { GET_README } from '../graphql/getReadme';

interface Props {
    content: string;
}

const ArticlesPage: React.FC<Props> = ({ content }) => {
    const code: React.FC<{ language: string }> = ({ language, children }) => (
        <p>
            ({language}) {children}
        </p>
    );

    const heading: React.FC<{ level: number }> = ({ level, children }) =>
        level == 1 ? (
            <h1 className="text-xl">{children}</h1>
        ) : (
            <h2 className="text-lg">{children}</h2>
        );

    const renderers = {
        code,
        heading,
    };

    return (
        <>
            <Head>
                <title>Articles - Kodai</title>
            </Head>
            <h2>Articles</h2>
            <ReactMarkdown renderers={renderers}>{content}</ReactMarkdown>
        </>
    );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const client = new ApolloClient({
        uri: 'https://api.github.com/graphql',
        cache: new InMemoryCache(),
        headers: {
            authorization: `Bearer ${process.env['ACCESS_TOKEN']}`,
        },
    });

    const result = await client.query<GetReadme>({ query: GET_README });

    if (
        !result.data.repository?.content ||
        result.data.repository.content.__typename !== 'Blob' ||
        !result.data.repository.content.text
    ) {
        throw new Error('Failed to fetch valid data');
    }

    return {
        props: { content: result.data.repository.content.text },
    };
};

export default ArticlesPage;
