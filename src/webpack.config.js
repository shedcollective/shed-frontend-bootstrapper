const path = require('path');

// These will be provided by ENV vars
// NAILS
const WEBPACK_INPUT_PATH = './assets/js/';
const WEBPACK_OUTPUT_PATH = '../../build/'; // <- Should look at using an absolute path rather than the hops here.

// LARAVEL
// const WEBPACK_INPUT_PATH = './resources/assets/js/';
// const WEBPACK_OUTPUT_PATH = '/public/'; <- Not sure if this needs to be relative to the source or not - as above

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: path.resolve(WEBPACK_INPUT_PATH, '/app.js'),
        admin: './assets/js/admin.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/build/js/')
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
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
            filename: path.resolve(WEBPACK_OUTPUT_PATH, 'css/[name].css');
        }),
    ]
};
