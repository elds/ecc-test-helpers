/* global before, beforeEach, afterEach */
import localStorage from 'localStorage';
import jsdom from 'jsdom';
import should from 'should';
import Intl from 'intl';

// say we're not in webpack environment
// this is required to skip including styles
global.__WEBPACK__ = false; // eslint-disable-line no-underscore-dangle
global.__DEBUG__ = process.env.DEBUG || false; // eslint-disable-line no-underscore-dangle

// init jsdom
global.document = jsdom.jsdom('<html><body><div id="mainContainer"></div></body></html>');
global['jsdom'] = jsdom;
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

// mock location
jsdom.changeURL(global.window, 'http://localhost/');

// Node has no console.debug, so we need to create it
console.debug = console.log.bind(null, "debug: ");

// local storage polyfill
global.window.localStorage = localStorage;
global.localStorage = localStorage;

// polyfill Intl for node
global.Intl = Intl;

// polyfill screen for node
global.screen = {
    width: 1000,
    height: 1000,
};

// fake MDL upgrader to fix react-mdl breaking all tests
// TODO: possible to find a better way so that we can test MDL as well?
global.componentHandler = {
    upgradeDom() {},
    upgradeElement() {},
    upgradeElements() {},
    upgradeAllRegistered() {},
    registerUpgradedCallback() {},
    register() {},
    downgradeElements() {},
};

// import react after dom
const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
const TestUtils = require('react-addons-test-utils');

before(function() {
    // expose react and testutils
    this.React = React;
    this.ReactDOM = ReactDOM;
    this.ReactDOMServer = ReactDOMServer;
    this.TestUtils = TestUtils;
});

beforeEach(function() {
    // create container
    this.container = global.window.document.createElement('div');

    global.window.componentHandler = global.componentHandler;

    // append to body to allow non-react libs to be testable too
    global.document.body.appendChild(this.container);

    // reset url before each test
    jsdom.changeURL(global.window, 'http://localhost/');
});

afterEach(function(done) {
    // clean jsdom
    this.ReactDOM.unmountComponentAtNode(this.container);
    // remove from body
    global.document.body.removeChild(this.container);
    // timeout
    setTimeout(done);
});

export default should;
