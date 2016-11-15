import express from 'express';
import path from 'path';
import webpack from 'webpack';
import devConfig from '../webpack/dev.babel';
import App from './server/index';

const app = express();

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(devConfig);
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: devConfig.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
    app.use('/public', express.static(path.join('..', 'build', 'public')));
} else {
    app.use('/public', express.static('public'));
}

app.use((req, res) => {

    res.status(200).end(App(req, res));
});

app.listen(3000, () => {
    console.log('Server listening...')
});
