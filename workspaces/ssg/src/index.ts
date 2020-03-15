import { createClient } from 'contentful';
import { writeFileSync } from 'fs';
import { JSDOM } from 'jsdom';
import { join } from 'path';

import { Article, Author } from './contentful';

const client = createClient({
    space: process.env.SPACE_ID as string,
    accessToken: process.env.CDA_ACCESS_TOKEN as string,
});

(async (): Promise<void> => {
    const res = await client.sync({ initial: true });

    const entries = res.entries as Array<Article | Author>;

    const dom = new JSDOM('<!DOCTYPE html>');

    const {
        window: { document },
    } = dom;

    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'utf-8');
    document.head.appendChild(metaCharset);

    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute(
        'content',
        'width=device-width,minimum-scale=1,initial-scale=1'
    );
    document.head.appendChild(metaViewport);

    document.title = 'Articles - Kodai';

    const ul = document.createElement('ul');

    for (const entry of entries) {
        if (entry.sys.contentType.sys.id !== 'article') continue;

        const { title } = (entry as Article).fields;

        const li = document.createElement('li');
        li.textContent = `${title.ja}  (${entry.sys.updatedAt})`;
        ul.appendChild(li);
    }

    document.body.appendChild(ul);

    writeFileSync(join(__dirname, 'index.html'), dom.serialize());
})();
