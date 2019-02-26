const path = require("path");

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('vue-html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const { InjectManifest } = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/index.js', './src/style.scss'],
        install: './src/install.js',
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // this will apply to both plain `.scss` files
            // AND `<style lang="scss">` blocks in `.vue` files
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, 'node_modules')],
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "Super Cute Dogs",
            vue: true,
            favicon: './src/assets/favicon_dog.ico'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackPwaManifest({
            name: "Super Cute Dogs",
            short_name: "CuteDogs",
            description: "Super Cute Dogs are super cute!",
            background_color: "#ffffff",
            icons: [{
                src: path.resolve('src/assets/gooddog.png'),
                sizes: [96, 128, 192, 256, 384, 512]
            }],
            inject: true,
            ios: true
        }),
        new InjectManifest({
            swSrc: './src/sw.js',
            swDest: 'sw.js'
        })
    ]
};