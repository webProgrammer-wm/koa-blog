const Koa = require('koa')
const Router = require('@koa/router')
const userRouter = require('../router/user.router.js')
const bodyParser = require('koa-body')
const errorHandler = require('./error-handler')

// koa实例化
const app = new Koa()
const router = new Router()

app
    .use(bodyParser({
        multipart: true
    }))
    .use(router.routes())
    .use(router.allowedMethods())

router.prefix('/api')
router.use(userRouter.routes())

app.on('requestError', errorHandler)


module.exports = app