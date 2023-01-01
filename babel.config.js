module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage",
                corejs: {
                    version: 2,
                },
            },
        ],
        "@babel/preset-typescript",
        "@babel/preset-react"
    ],
}