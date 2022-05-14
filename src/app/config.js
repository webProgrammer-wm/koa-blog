// 将配置信息写入到环境变量（src/.env）
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    APP_PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_DATABASE
} = process.env