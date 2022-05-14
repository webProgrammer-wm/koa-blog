const errorTypes = require('../constants/error-types')
const errorMapper = require('../constants/error-mapper')

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