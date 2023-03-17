const path = require('path')


module.exports = {
    mode: 'development',
    entry: './src/Assets/JS/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/main.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"},
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        port: 9000
    }
};