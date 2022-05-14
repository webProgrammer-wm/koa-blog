const db = require('../app/database')

class UserService {
    // 用户注册
    async register(user) {
        console.log('将用户数据保存到数据库中:', user)

        const statement = 'INSERT INTO user(id, name, password, phone) VALUES(null, ?, ?, ?)'

        db.query(statement, [ user.name, user.password, user.phone ], (err, data) => {
            if (err) {
                console.log(err.message)
                return
            }
        })
        
        return user
    }

    // 根据用户名获取用户信息
    async getUserInfoByName(name) {
        const statement = 'SELECT * FROM user WHERE name = ?'
        const result = await db.promise().query(statement, [ name ])

        return result[0]
    }
}

module.exports = new UserService()