const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CompressionPlugin = require('compression-webpack-plugin')

const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
    ]
})