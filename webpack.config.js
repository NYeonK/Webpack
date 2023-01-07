const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.tsx",
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    devServer: {
        overlay: true,
        stats: "errors-only",
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: path.resolve(__dirname, "tsconfig.json"),
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: "url-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                    limit: 10000 // 10Kb
                }
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
};
