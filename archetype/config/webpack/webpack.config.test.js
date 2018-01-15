const path = require('path');
const baseWebPack = require('./webpack.config.base') || {}; // MUST be first
const extendElectrodeConfig = require('./utils/extendElectrodeConfig');

module.exports = extendElectrodeConfig(baseWebPack);
