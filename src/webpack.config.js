const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: path.resolve(
            process.env.WEBPACK_INPUT_PATH,
            'app.js'
        ),
        admin: path.resolve(
            process.env.WEBPACK_INPUT_PATH,
            'admin.js'
        )
    },
    output: {
        filename: '[name].js',
        path: path.resolve(
            process.env.WEBPACK_OUTPUT_PATH,
            'js/'
        )
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css'
        }),
    ]
};
