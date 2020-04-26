import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

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

            <meta name="theme-color" content="#8968CC" />
            <link rel="manifest" href="/manifest.json" />

            <meta property="og:local" content="ja_JP" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Kodai" />
            <meta property="og:url" content="https://kodai.vision" />
            <meta property="og:description" content="Kodai's website" />

            <meta property="twitter:card" content="summary" />
        </Head>

        <Component {...pageProps} />
    </>
);

export default CustomApp;
