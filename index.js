const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('*', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(3000);