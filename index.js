/* global before, beforeEach, afterEach */
import React from 'react/addons';
import localStorage from 'localStorage';
import {jsdom} from 'jsdom';
import should from 'should';

// init jsdom
global.document = jsdom();
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

// local storage polyfill
global.window.localStorage = localStorage;
global.localStorage = localStorage;

before(function() {
    // expose react and testutils
    this.React = React;
    this.TestUtils = React.addons.TestUtils;
});

beforeEach(function() {
    // create container
    this.container = global.window.document.createElement('div');
});

afterEach(function(done) {
    // clean jsdom
    this.React.unmountComponentAtNode(this.container);
    // timeout
    setTimeout(done);
});

export default should;
