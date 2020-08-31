import Link from 'next/link';
import React from 'react';

import { Button } from '../components/Button';

type Item = React.FC<{ first: boolean }>;

const Item: Item = ({ first, children }) => {
    const className = `block text-gray-700 text-center bg-gray-400 px-4 py-2${
        first ? '' : ' mt-2'
    }`;
    return <span className={className}>{children}</span>;
};

const IndexPage: React.FC = () => (
    <>
        <span>Hello, Next.js!</span>

        <Button />

        <Link href="/articles">
            <a>Articles</a>
        </Link>

        <div className="bg-gray-200 p-4">
            <Item first>1</Item>
            <Item first={false}>2</Item>
            <Item first={false}>3</Item>
        </div>
    </>
);

export default IndexPage;
