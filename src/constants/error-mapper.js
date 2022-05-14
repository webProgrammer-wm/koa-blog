const errorTypes = require('./error-types')

module.exports = {
    [errorTypes.NAME_OR_PASSWORD_IS_REQUIRED]: {
        code: 400,
        msg: '用户名或密码不能为空!'
    },

    [errorTypes.USER_IS_ALREADY_EXIST]: {
        code: 409,
        msg: '注册失败，用户已经存在！'
    },

    'defaultError': {
        code: 500,
        msg: '操作失败'
    }
}