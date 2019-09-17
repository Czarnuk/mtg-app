/* eslint-disable import/no-unresolved */
const express = require('express');

const app = express();

app.set('views', '../public/views');
app.engine('html', require('ejs').renderFile);

app.use(express.static('../public/styles'));
app.use(express.static('../public/views'));
app.use(express.static('../public/images'));

app.use((req, res) => {
  res.render('404.html');
});

module.exports = app;
