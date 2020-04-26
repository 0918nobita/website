import Link from 'next/link';
import React from 'react';

const IndexPage: React.FC = () => (
    <>
        <h2>Hello, Next.js!</h2>
        <Link href="/articles">
            <a>Articles</a>
        </Link>
    </>
);

export default IndexPage;
