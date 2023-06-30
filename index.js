const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
// const webpack = require('webpack');
// const config = require('./webpack.config');
// const compiler = webpack(config);
const bodyParser = require('body-parser');
const {test, addPiece} = require('./src/controllers/musicController.js')

app.use(express.json());
app.use(bodyParser.json());

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//   next();
// });

// app.use(require('webpack-dev-middleware')(compiler, {
//   publicPath: config.output.publicPath
// }));

//after addPieces, this is where controller will go; controller will query to the database.
app.post('/addpieces', addPiece, (req, res) => {
  console.log("Piece has been added.")
  return res.status(200).end();
});

// app.get('/addpiece', (req, res) => {
//   console.log('hello');
//   return res.send("Hello from the backend.")
// })

app.get('*', (req, res) => {
  console.log('hello2');
  res.sendFile('public/index.html', { root: __dirname });
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
})