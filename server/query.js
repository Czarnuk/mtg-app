/* eslint-disable import/no-unresolved */
const mssql = require('mssql');
const database = require('./config/connection');

const pool = new mssql.ConnectionPool(database.config).connect();

async function query(sql, params) {
  try {
    const connection = await pool;
    let result;
    if (params) {
      let req = connection.request();
      params.forEach((p) => {
        req = req.input(p.name, p.type, p.value);
      });
      result = req.query(sql);
    } else {
      result = await connection.query(sql);
      return result.recordset;
    }
  } catch (err) {
    alert(err);
  }
  return [];
}

module.exports.query = query;
