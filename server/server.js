const express = require('express');

const app = express();
app.use(express.static('public/styles'));
app.use(express.static('public/views'));
app.use(express.static('public/images'));

app.listen(8000);
