const contentfulManagement = require('contentful-management');

require('dotenv').config();

module.exports = function () {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: process.env.MANAGEMENT_AT,
    });

    return contentfulClient
        .getSpace(process.env.SPACE)
        .then((space) => space.getEnvironment(process.env.ENV));
};
