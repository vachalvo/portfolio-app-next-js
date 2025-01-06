const withSvgr = require('next-plugin-svgr');

module.exports = withSvgr({
    webpack(config) {
        return config;
    },
});
