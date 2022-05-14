const errorTypes = require('../constants/error-types')
const md5 = require('../utils/md5-encrypt.js')
const {
    getUserInfoByName
} = require('../service/user.service')

// 验证用户
async function verifyUser(ctx, next) {
    // 1.获取用户名和密码
    const { name, password } = ctx.request.body

    if (!name || !password) {
        const err = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('requestError', err, ctx)
    }

    // 2.判断用户是否已经存在
    const queryRes = await getUserInfoByName(name)

    if (queryRes.length !== 0) {
        const err = new Error(errorTypes.USER_IS_ALREADY_EXIST)
        return ctx.app.emit('requestError', err, ctx)
    }

    await next()
}

// md5加密密码
async function md5Passowrd(ctx, next) {
    const { password } = ctx.request.body
    ctx.request.body.password = md5(password)
    
    await next()
}

module.exports = {
    verifyUser,
    md5Passowrd
}