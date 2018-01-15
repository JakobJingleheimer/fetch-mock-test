const baseWebPack = require('./webpack.config.base') || {};
const extendElectrodeConfig = require('./utils/extendElectrodeConfig');

module.exports = extendElectrodeConfig(baseWebPack);


