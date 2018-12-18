const path = require('path');
const glob = require('glob');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entry = glob.sync()
    .reduce((x, y) => Object.assign(x, {
        [y]: y,
    }), {});

module.exports = {
    entry: {
        app: './assets/js/app.js',
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
            filename: '../../build/css/[name].css'
        }),
    ]
};
