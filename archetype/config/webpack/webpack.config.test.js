'use strict';

const webpack = require('webpack');

const _mergeWith = require('lodash/mergeWith');


const overrides = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: 'null-loader',
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.IgnorePlugin(/\.(less|scss)$/), // ignore styles when running specs
        new webpack.IgnorePlugin(/client\/utils/), // ignore polyfills
    ],
};

module.exports = function (composer, options, compose) {
  const config = compose();
  _mergeWith(config, overrides, (a, b) => {
    return (Array.isArray(a) && Array.isArray(b))
      ? [].concat(a).concat(b)
      : undefined;
  });
  return config;
};
