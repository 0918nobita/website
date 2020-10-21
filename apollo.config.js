require('dotenv').config();

module.exports = {
    client: {
        name: 'client',
        includes: ['graphql/**/*.ts'],
        service: {
            name: 'GitHub GraphQL API v4',
            url: 'https://api.github.com/graphql',
            headers: {
                authorization: `Bearer ${process.env['ACCESS_TOKEN']}`,
            },
        },
    },
};
