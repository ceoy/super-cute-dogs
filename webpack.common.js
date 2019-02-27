const path = require("path");

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('vue-html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const { InjectManifest } = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: ['./src/index.js', './src/style.scss'],
        install: './src/install.js',
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist"),
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
                use: [{
                    loader:'file-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[hash].[ext]'
                    }
                }]
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
                    MiniCssExtractPlugin.loader,
                    // 'vue-style-loader',
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
            template: './src/template.html',
            meta: {
                description: "Super Cute Dogs - Dogs that are super cute deserve to be shown!",
                keywords: "Super, Cute, Dogs, Samoyed",
                "theme-color": "#6200ee"
            },
            favicon: './src/assets/favicon_dog.ico'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackPwaManifest({
            name: "Super Cute Dogs",
            short_name: "CuteDogs",
            description: "Super Cute Dogs are super cute!",
            background_color: "#ffffff",
            theme_color: "#6200ee",
            icons: [{
                src: path.resolve('src/assets/gooddog.png'),
                sizes: [96, 128, 192, 256, 384, 512]
            }],
            inject: true,
            ios: true
        }),
        new InjectManifest({
            swSrc: './src/sw.js'
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            test: /\.js$|\.css|\.html/,
            algorithm: 'gzip',
            threshold: 10240,
            minRatio: 0.8
        }),
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.js$|\.css|\.html/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].[hash].css"
        }),
    ]
};