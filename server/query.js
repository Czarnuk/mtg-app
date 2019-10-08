/* eslint-disable import/no-unresolved */
const mssql = require('mssql');
const database = require('./config/connection');

const pool = new mssql.ConnectionPool(database.config).connect();

async function query(sql) {
  try {
    const connection = await pool;
    const result = await connection.query(sql);
    return result.recordset;
  } catch (err) {
    console.log('SQL error', err);
  }
  return [];
}

module.exports.query = query;
