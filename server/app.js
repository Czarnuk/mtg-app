/* eslint-disable import/no-unresolved */
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.set('views', '../public/views');
app.engine('html', require('ejs').renderFile);

app.use(cors());

app.use(express.static('../public/styles'));
app.use(express.static('../public/views'));
app.use(express.static('../public/images'));

app.use('/', routes);

app.use((req, res) => {
  res.render('404.html');
});

module.exports = app;
