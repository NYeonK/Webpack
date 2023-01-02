const path = require("path");
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
                test: /\.(ts|tsx|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
};
