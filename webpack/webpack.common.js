const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/app.js',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Capita Technical Test',
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ],
    module: {
        loaders: [{
                test: /\.js$/,
                loaders: ['ng-annotate', 'babel'],
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: ['style', 'css']
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            }, {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.(png|jpg)$/,
                // No limit required in this fictional app context
                loader: 'url'
            },
            {
                test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                // No limit required in this fictional app context
                loader: "url?mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                // No limit required in this fictional app context
                loader: "url?mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                // No limit required in this fictional app context
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                // No limit required in this fictional app context
                loader: "url?mimetype=image/svg+xml"
            },
        ]
    },
    devtool: 'eval-source-map'
};
