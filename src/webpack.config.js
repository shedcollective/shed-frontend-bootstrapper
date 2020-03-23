const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = ()  => {

    const VALID_ENVIRONMENTS = ['production', 'development', 'none'];
    const ENVIRONMENT = process.env.NODE_ENV.toLowerCase();
    let mode = 'production';

    if (VALID_ENVIRONMENTS.includes(ENVIRONMENT)) {
        mode = ENVIRONMENT;
    }

    let isWin = process.platform === 'win32';

    return {
        watchOptions: {
            poll: isWin ? 5000 : false
        },
        entry: {
            app: path.resolve(__dirname, 'assets/js/app.js'),
            admin: path.resolve(__dirname, 'assets/js/admin.js'),
        },
        devtool: 'cheap-source-map',
        output: {
            path: path.resolve(__dirname, 'assets/build/js'),
            filename: '[name].js'
        },
        mode: mode,
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                },
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
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                sourceMapContents: false
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/].*\.js$/,
                        chunks: 'initial',
                        name: 'vendor',
                        enforce: true
                    }
                }
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '../../build/css/[name].css',
            }),
            new VueLoaderPlugin(),
            mode==='production' ? new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: 'buildReport.html'
            }) : false,
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/
            })
        ].filter(Boolean)
    };
};