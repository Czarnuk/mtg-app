/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
const express = require('express');
const sql = require('../query');


const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('parent');
});

router.get('/get-users', (req, res, next) => {
  const usersStandings = [];
  sql.query('select u.name, s.points from dbo.[user] u join dbo.standings s on s.id = u.standings_id join dbo.category c on c.id = s.category_id where c.type = \'Tournament\' order by points desc').then((rows) => {
    rows.forEach((element) => {
      usersStandings.push(element);
    });
    res.send(usersStandings);
  });
});
router.get('/get-categories', (req, res, next) => {
  const categories = [];

  sql.query('select type from dbo.category').then((rows) => {
    rows.forEach((element) => {
      categories.push(element);
    });
    res.send(categories);
  });
});

module.exports = router;
