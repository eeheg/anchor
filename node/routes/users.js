var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

const mariadb = require("mariadb/callback");
const conn = mariadb.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database:process.env.database,
});

conn.query(`쿼리문`, (err, rows) => {
  console.log(err);
  console.log(rows);
})