const mysql = require('mysql2')
export const mysqlPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: '6603825_DIT350'


})