import { Document } from '@contentful/rich-text-types';
import { Entry } from 'contentful';

export interface ArticleFields {
    title: { ja: string; en: string };
    content: Document;
}

export type Article = Entry<ArticleFields>;

export interface AuthorFields {
    authorName: string;
}

export type Author = Entry<AuthorFields>;
