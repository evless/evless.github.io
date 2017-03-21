const NODE_ENV = process.env.NODE_ENV || 'develop';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        index: './app.js',
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extenstions: ['', '.min.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extenstions: ['', '.js']
    },

    watch: true,
    watchoptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './templates/index.html',
            showErrors: true,
            chunks: ['index']
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.html$/,
                loader: 'html',
                query: {
                    minimize: true
                }
            },
            {
                test: /.*\.(jsx|js)?$/,
                loader: 'babel',
                include: __dirname,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file'
            }
        ]
    }
};
