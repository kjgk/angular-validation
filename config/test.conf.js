// conf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test/unit/testSpec.js'],
    baseUrl: 'http://localhost:9001' //default test port with Yeoman
};