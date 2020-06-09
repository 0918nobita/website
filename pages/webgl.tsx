import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const Three = dynamic(() => import('../components/Three'), {
    ssr: false,
    loading() {
        return <p>loading...</p>;
    },
});

const WebGLPage: React.FC = () => (
    <>
        <Head>
            <title>WebGL - Kodai</title>
        </Head>
        <Three />
    </>
);

export default WebGLPage;
