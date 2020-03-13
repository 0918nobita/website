import { writeFileSync } from 'fs';
import { join } from 'path';

import { createClient, Entry } from 'contentful';
import { IArticle, IAuthor } from './contentful';

const client = createClient({
    space: process.env.SPACE_ID as string,
    accessToken: process.env.CDA_ACCESS_TOKEN as string,
});

client.sync({ initial: true }).then(res => {
    console.log('content received');
    const entries: Array<Entry<IArticle | IAuthor>> = res.entries;
    writeFileSync(
        join(__dirname, 'entries.json'),
        JSON.stringify(entries, null, 2)
    );
});
