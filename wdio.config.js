exports.config = {
  capabilities: [
    {
      'browserName' : 'chrome',
      'platform'    : 'WIN10',
      'version'     : '74'
    }
  ],
  specs: [
    './tests/**.spec.js'
  ],
  baseUrl: 'http://example.com/',
  maxInstances: 1,
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  waitforTimeout: 1500,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  services: ['testingbot'],
  maxduration: 600,
  user: process.env.TB_KEY,
  key: process.env.TB_SECRET
}
