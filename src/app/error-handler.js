const errorTypes = require('../constants/error-types')
const errorMapper = require('../constants/error-mapper')

// 错误处理
function errorHandler(err, ctx) {
    const { code, msg } = errorMapper[err.message || 'defaultError']

    ctx.status = code
    ctx.body = {
        code,
        msg,
        data: null
    }
}

module.exports = errorHandler