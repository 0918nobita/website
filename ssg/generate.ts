import fs = require('fs');
import path = require('path');

import contentful = require('contentful');
import { Document } from '@contentful/rich-text-types';
import renderer = require('@contentful/rich-text-html-renderer');
import Handlebars = require('handlebars');

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const client = contentful.createClient({
    space: process.env.SPACE!,
    environment: process.env.ENV!,
    accessToken: process.env.ACCESS_TOKEN!,
});
/* eslint-enable @typescript-eslint/no-non-null-assertion */

interface Context {
    title: string;
    richText: string;
}

const template = Handlebars.compile<Context>(
    fs.readFileSync(path.join(__dirname, 'article.html')).toString()
);

interface Fields {
    title: string;
    content: Document;
}

(async (): Promise<void> => {
    const entry = await client.getEntry<Fields>('53VekZek8eUm4TheKWdo28');
    const { title, content } = entry.fields;

    console.log('----------');
    console.log(
        template({
            title,
            richText: renderer.documentToHtmlString(content),
        })
    );
    console.log('----------');
})();
