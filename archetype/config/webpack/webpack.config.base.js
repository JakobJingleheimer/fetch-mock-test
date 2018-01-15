'use strict';

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

const path = require('path');
const appSrc = {
    client: path.resolve(process.cwd(), 'src/client'),
    server: path.resolve(process.cwd(), 'src/server'),
    dir: path.resolve(process.cwd(), 'src'),
};

const config = require('electrode-confippet').config;

const multiBundleMode = false; // Need to hook this up to a check for multiple webpack bundles

const extractSass = new ExtractTextPlugin({
    allChunks: true,
    disable: config.env === 'development',
    filename: multiBundleMode
       ? '[name].style.[hash].css'
       : '[name].style.css'
});

const sassOptions = {
    includePaths: [
        path.resolve(appSrc.client, 'common'),
        path.resolve(process.cwd(), 'node_modules')
    ],
    sourceMap: true
};

module.exports = {
    target: 'web',
    devtool: '#source-map', // any 'source-map'-like devtool is possible
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                  fallback: 'style-loader',
                  use: [
                      {
                        loader: 'css-loader',
                        query: {
                          sourceMap: true
                        }
                      },
                      {
                        loader: 'postcss-loader',
                        options: {
                          options: {
                            sourceMap: true
                          },
                          plugins: () => [
                              autoprefixer()
                              // ^ options specified in package.json per
                              // https://github.com/ai/browserslist#browserslist
                          ]
                        }
                      },
                      'resolve-url-loader',
                      {
                        loader: 'sass-loader',
                        options: sassOptions
                      }
                  ]
                }),
            }
        ],
    },
    plugins: [
        extractSass,
        new CopyWebpackPlugin([
          {
            from: path.resolve(appSrc.client, 'static/**/*')
          },
        ]),
        new webpack.LoaderOptionsPlugin({
            options:{
              context: appSrc.dir
              // ^ Necessary to prevent path error:
              // https://github.com/jtangelder/sass-loader/issues/285#issuecomment-248382611
            }
        }),
    ]
}
