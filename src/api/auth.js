import request from '@/utils/request.js'

// 分别暴露的方式暴露内容
export const register = (data) => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'POST',// GET/POSH
        // 请求接口地址
        url: '/h5users',
        // 要传递的参数
        data: data
    })
}

// 分别暴露的方式暴露内容
export const login = (data) => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'POST',// GET/POSH
        // 请求接口地址
        url: '/web/authorizations',
        // 要传递的参数
        data: data
    })
}