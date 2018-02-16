require('dotenv').config();
const path = require('path');

const { inspect } = require('util');

module.exports = function (config, settings){
    const entryFile = path.resolve(__dirname, './entry.js');

    settings.files = [entryFile];

    settings.preprocessors = {};
    settings.preprocessors[entryFile] = ['webpack', 'sourcemap'];

console.log(inspect(settings, {colors: true, depth: null}))

    config.set(settings);
}
