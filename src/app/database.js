const mysql2 = require('mysql2')
const config = require('./config')

const DB_CONFIG = {
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
    database: config.DB_DATABASE
}

const db = mysql2.createConnection(DB_CONFIG)

db.connect(err => {
    if (err) throw err
    console.log('数据库连接成功!')
})

module.exports = db