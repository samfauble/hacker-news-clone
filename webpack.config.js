const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")


module.exports = {
    entry: "./src/main/index.js",
    output: {path: path.resolve(__dirname, "dist"),
            filename: "index_bundle.js",
            publicPath:"/"},
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    mode: process.env.NODE_ENV==="production" ? "production" : "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/main/index.html"
        }),
        new CopyPlugin([
            {from: "_redirects"}
        ])
    ],
    devServer: {
        historyApiFallback: true
    }
}