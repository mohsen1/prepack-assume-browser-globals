var globals = require('globals');

Object.keys(globals.browser).forEach(function (key) {
    __assumeDataProperty(global, key, __abstract("function"))
});
