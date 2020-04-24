// import fs = require('fs');
import path = require('path');

import contentful = require('contentful');
import { Document } from '@contentful/rich-text-types';
import pug = require('pug');
import renderer = require('@contentful/rich-text-html-renderer');

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const client = contentful.createClient({
    space: process.env.SPACE!,
    environment: process.env.ENV!,
    accessToken: process.env.ACCESS_TOKEN!,
});
/* eslint-enable @typescript-eslint/no-non-null-assertion */

interface Fields {
    title: string;
    content: Document;
}

(async (): Promise<void> => {
    const entries = await client.getEntries<Fields>();
    const fn = pug.compileFile(path.join(__dirname, 'articles.pug'));
    console.log(
        fn({
            articles: entries.items.map((item) => ({
                title: item.fields.title,
                content: renderer.documentToHtmlString(item.fields.content),
            })),
        })
    );
})();
