const port = process.env.PORT || 8000;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.bundle.js',
    },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'library.min.js'
    // },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(svg|png|jpg|jpeg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/, 
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'fonts/[name].[hash].[ext]', 
                      publicPath: 'css', 
                    }
                  }
                ]
            }
        ]
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/page.html')
        }),
        new UnminifiedWebpackPlugin(),
        new CssMinimizerPlugin(),
       // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/images',
                    to: 'images'
                },
                {
                    from: 'src/js',
                    to: 'js'
                },
                {
                    from: 'src/css',
                    to: 'css'
                }
            ]
        })
    ],

    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
}