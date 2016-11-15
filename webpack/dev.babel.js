import webpack from 'webpack';
import path from 'path';

export default {
    devtool: '#inline-source-map',
    entry: [
        path.join(__dirname, '..', 'src', 'client', 'index'),
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, '..', 'build', 'public'),
        filename: 'client.bundle.js',
        publicPath: '/public/'
    },
    resolve: {
        root: [path.join(__dirname, 'src')],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            query: {
                "presets": ["react-hmre"],
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};