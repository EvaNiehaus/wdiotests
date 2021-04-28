module.exports = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        './test/specs/navigation.spec.js'
    ],

    logLevel: 'info',
    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 300000,
    connectionRetryCount: 1,

    baseUrl: 'https://localcoding.us/',

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    }
  }
