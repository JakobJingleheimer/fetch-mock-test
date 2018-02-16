'use strict';

const webpack = require('webpack');


module.exports = {
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
