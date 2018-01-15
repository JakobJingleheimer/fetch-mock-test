const CircularDependencyPlugin = require('circular-dependency-plugin');

const baseWebPack = require('./webpack.config.base') || {}; // MUST be first
const extendElectrodeConfig = require('./utils/extendElectrodeConfig');

baseWebPack.devtool = '#cheap-module-eval-source-map';
/*baseWebPack.plugins.push(
    new CircularDependencyPlugin({
        // exclude detection of files based on a RegExp
        exclude: /a\.js|node_modules/,
        // add errors to webpack instead of warnings
        failOnError: true,
        // set the current working directory for displaying module paths
        cwd: process.cwd(),
    })
);*/

module.exports = extendElectrodeConfig(baseWebPack);
