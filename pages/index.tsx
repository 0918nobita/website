import Link from 'next/link';
import React from 'react';

import { Button } from '../components/Button';

const IndexPage: React.FC = () => (
    <>
        <h2>Hello, Next.js!</h2>
        <Button />
        <Link href="/articles">
            <a>Articles</a>
        </Link>
    </>
);

export default IndexPage;
