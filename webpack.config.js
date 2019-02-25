const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool: 'cheap-source-map',
    entry: './lib/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sblock-web-driver.min.js',
        library: 'SBlockWebDriver',
        libraryExport: 'default',
        globalObject: 'this',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
        }]
    },
}