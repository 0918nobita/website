import classNames from 'classnames';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

import { Button, Memo } from '../components';

type Item = React.FC<{ first: boolean }>;

const Item: Item = ({ first, children }) => {
    const className = classNames(
        'block',
        'text-gray-700',
        'text-center',
        'bg-gray-400',
        'px-4',
        'py-2',
        { 'mt-2': !first }
    );
    return <span className={className}>{children}</span>;
};

interface Props {
    memos: Memo[];
}

const IndexPage: React.FC<Props> = ({ memos }) => (
    <>
        <Button />

        <Link href="/articles">
            <a>Articles</a>
        </Link>

        <p>{memos.map((m) => m.title).join(', ')}</p>

        <div className={classNames('bg-gray-200', 'p-4')}>
            <Item first>1</Item>
            <Item first={false}>2</Item>
            <Item first={false}>3</Item>
        </div>
    </>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
    return {
        props: {
            memos: [
                { title: 'abc', content: '' },
                { title: 'def', content: '' },
                { title: 'ghi', content: '' },
            ],
        },
    };
};

export default IndexPage;
