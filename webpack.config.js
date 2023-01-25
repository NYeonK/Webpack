const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.tsx",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        modules: ['node_modules'],
        alias: {
            '@': path.join(__dirname, '..', 'src/'),
        },
    },
    devServer: {
        overlay: true,
        stats: "errors-only",
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                loader: "url-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                    limit: 10000, // 10Kb
                    outputPath: 'asset',
                },
                type: 'javascript/auto',
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
            template: path.join(__dirname, '.', 'public/index.html'),
            filename: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public/',
                    to: 'public/',
                    globOptions: {
                        ignore: ['**/*.html'],
                    },
                },
            ],
        }),
        new ReactRefreshWebpackPlugin(),
    ],
};
