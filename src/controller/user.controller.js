const service = require('../service/user.service')

class UserController {
    async register(ctx, next) {
        // 获取用户请求传递的参数
        const user = ctx.request.body
        
        // 查询数据
        const result = await service.register(user)

        // 返回数据
        ctx.body = {
            code: 200,
            msg: '操作成功',
            data: result
        }
    }

    async getUserInfoByName(ctx, next) {
        // 获取用户请求传递的参数
        const { name } = ctx.request.params
        
        // 查询数据
        const result = await service.getUserInfoByName(name)

        // 返回数据
        ctx.body = {
            code: 200,
            msg: '操作成功',
            data: result
        }
    }
}

module.exports = new UserController()