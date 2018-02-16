'use strict';

require('babel-polyfill');

/**
 * Test setup for client-side tests.
 *
 * Intended for:
 * - Karma tests: `npm run test-client`
 * - Browser tests: `http://localhost:3000/test/client/test.html`
 */
/*globals window:false*/
var chai = require('chai');
var sinonChai = require('sinon-chai');
var chaiShallowly = require('chai-shallowly');
var jsxChai = require('jsx-chai').default;
var Promise = require('bluebird');
require('sinon-as-promised')(Promise);
/*
 * We need a global sinon to maintain compatibility
 * with existing test suites. However, this will be
 * removed in the future and is being tracked by
 * https://gecgithub01.walmart.com/electrode/electrode-archetype-react-component/issues/10
 */
window.sinon = require('sinon');

// --------------------------------------------------------------------------
// Chai / Sinon / Mocha configuration.
// --------------------------------------------------------------------------
// Exports
window.expect = chai.expect;

// Plugins
chai.use(sinonChai);
chai.use(chaiShallowly);
chai.use(jsxChai);

// Mocha (part of static include).
window.mocha.setup({
  ui: 'bdd',
  bail: false,
});

// Preload test state, which is automatically picked up by the store.
window.__PRELOADED_STATE__ = {};

// --------------------------------------------------------------------------
// Bootstrap
// --------------------------------------------------------------------------
// Use webpack to include all app code _except_ the entry point so we can get
// code coverage in the bundle, whether tested or not.
// NOTE: No need to specify src even in src mode since webpack should handle that already
// var srcReq = require.context('client', true, /^((?!app).)*\.jsx?$/);
// srcReq.keys().map(srcReq);

// Use webpack to infer and `require` tests automatically
var testsReq = require.context('client', true, /\.spec.jsx?$/);
testsReq.keys().map(testsReq);

// Only start mocha in browser.
if (!window.__karma__) {
  window.mocha.run();
}
