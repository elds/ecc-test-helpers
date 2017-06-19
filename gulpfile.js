var path = require('path');

var gulp = require('ecc-gulp-tasks')({
    webpackConfig: {},
    testEntryPoint: path.join(__dirname, 'test', 'index.jsx')
});
