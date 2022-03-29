const path = require('path');
module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@crc_types': path.resolve(__dirname, './src/serverHandler/models'),
            '@crc_services': path.resolve(__dirname, './src/serverHandler/service'),
            '@curriculum': path.resolve(__dirname, './src'),
        },
    };
    return config;
};