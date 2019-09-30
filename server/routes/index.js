/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('parent');
});

router.get('/get-users', (req, res, next) => {
  const users = [
    { lp: 1, points: 50, nick: 'Morgoth' },
    { lp: 2, points: 40, nick: 'Grubby' },
    { lp: 3, points: 30, nick: 'Krollu' },
  ];

  res.send(users);
});

router.get('/get-categories', (req, res, next) => {
  const categories = [
    { id: 1, type: 'Friendly' },
    { id: 2, type: 'Tournament' },
  ];

  res.send(categories);
});

module.exports = router;
