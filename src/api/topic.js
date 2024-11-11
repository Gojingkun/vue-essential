import request from '@/utils/request.js'
import {objectToQuery} from '@/utils/utils.js'

// 分别暴露的方式暴露内容
export const getTopics = (data) => {
    let query = objectToQuery(data);
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/topics' + query,
        // 要传递的参数
        data: data
    })
}

export const getCategories = (data) => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/categories',
        // 要传递的参数
        data: data
    })
}

export const getTopic = (id, data) => {
    let query = objectToQuery(data);
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/topics/' + id + query,
        // 要传递的参数
        data: data
    })
}

export const getUserTopics = (userId, data) => {
    let query = objectToQuery(data);
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/users/' + userId + '/topics' + query,
        // 要传递的参数
        data: data
    })
}

export const getUser = (userId) => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/users/'+userId,
    })
}

export const getActivedUser = () => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/actived/users',
    })
}

export const getLink = () => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/links',
    })
}

export const search = (params) => {
    let query = objectToQuery(params);
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/topics/search' + query,
    })
}

export const hot = () => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/topics/hot',
    })
}

export const total = () => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/topics/total',
    })
}
