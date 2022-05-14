const bodyParser = require('koa-body')
const Router = require('@koa/router')
const {
    getUserInfoByName,
    register
} = require('../controller/user.controller')
const {
    verifyUser,
    md5Passowrd
} = require('../middleware/user.middleware')

// 接口的二级前缀
const router = new Router({
    prefix: '/user'
})

// RESTful风格 API
// 定义get请求
router.get('/:name', getUserInfoByName)

// 注册
router.post('/', verifyUser, md5Passowrd, register)

module.exports = router