import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'js/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'js'),
        publicPath: '/',
        filename: 'js/bundle.js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            noInfo: false,
            debug: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|examples)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
