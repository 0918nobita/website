import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const IndexPage: React.FC = () => (
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
        <Link href="/articles">
            <a>Articles</a>
        </Link>
    </>
);

export default IndexPage;
