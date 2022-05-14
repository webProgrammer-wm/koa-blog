const db = require('../app/database')

class UserService {
    async register(user) {
        // 保存用户数据
        console.log('将用户数据保存到数据库中:', user)

        const statement = 'INSERT INTO user(id, name, password, phone) VALUES(null, ?, ?, ?)'

        db.query(statement, [ user.name, user.password, user.phone ], (err, data) => {
            if (err) {
                console.log(err.message)
                return
            }

            console.log('注册成功!')
        })
        
        return user
    }

    async getUserInfoByName(name) {
        const statement = 'SELECT * FROM user WHERE name = ?'
        const result = await db.promise().query(statement, [ name ])

        return result[0]
    }
}

module.exports = new UserService()