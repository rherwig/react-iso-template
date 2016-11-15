import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

let nodeModules = {};

fs.readdirSync('node_modules')
    .filter((x) => ['.bin'].indexOf(x) === -1)
    .forEach((mod) => nodeModules[mod] = 'commonjs ' + mod);

const BASE_PATH = path.resolve('./');

export default {
    entry: {
        express: [
            path.resolve(BASE_PATH, "src/express")
        ]
    },
    target: 'node',
    externals: nodeModules,
    resolve: {
        extensions: [
            "",
            ".js",
            ".jsx"
        ]
    },
    output: {
        path: path.resolve(BASE_PATH, "build"),
        filename: "[name].js",
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: [
                    "babel"
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'hidden-source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            },
            __DEV__: false
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};