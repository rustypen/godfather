const express = require('express');
const app = express()
const router = require('./api');
const connectDB = require('./db');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config');
const compiler = webpack(config);
const path = require('path');

connectDB();


app.use(express.static('assets'))
app.use(express.static('build'))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

// app.get('*',
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );
app.get('*', (req, res)=>{
  res.sendFile(path.join(process.cwd(), '/build','index.html'))
})

app.use('/api',router);

app.listen(3000, ()=>{
  console.log('server is listening')
})