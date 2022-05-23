const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "master.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: "index.html"
    })],
    devServer: {
        port: 9000,
        open: true
    }
}