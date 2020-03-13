const { createClient } = require('contentful-management');

module.exports = function() {
    const contentfulClient = createClient({
        accessToken: process.env.ACCESS_TOKEN,
    });

    return contentfulClient
        .getSpace(process.env.SPACE_ID)
        .then(space => space.getEnvironment(process.env.ENV));
};
