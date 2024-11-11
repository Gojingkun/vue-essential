import request from '@/utils/request.js'
import store from "@/store"
import axios from "axios";

const host = 'http://1.14.200.8/api/v1'

// 添加请求拦截器
request.interceptors.request.use(
    async function (config) {
        await checkToken()
        // 通过config来添加token
        config.headers.Authorization = 'Bearer ' + store.state.accessToken
        return config
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

const checkToken = () => {
    // 从缓存中取出 Token
    const accessToken = store.state.accessToken
    const expiredAt = store.state.accessTokenExpiredAt

    // 如果 token 过期了，则调用刷新方法
    if (accessToken && new Date().getTime() > expiredAt) {
        axios.put(host + '/authorizations/current', {},
            {
                headers: {
                    Authorization: 'Bearer ' + store.state.accessToken
                }
            }).then((response) => {
            store.commit('UPDATE_TOKEN', response.data)
        })
        // try {
        //
        //     refresh().then((res)=> {
        //         store.commit('UPDATE_TOKEN', res.data)
        //         // store.dispatch('login', res.data)
        //     })
        // } catch (err) {
        //     // return store.dispatch('login')
        // }
    }
}

export const getCurrentUser = (data) => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: '/user',
        // 要传递的参数
        data: data
    })
}

export const updateUser = (data) => {
    return request({
        // 配置请求方式
        method: 'put',// GET/POSH
        // 请求接口地址
        url: '/user',
        // 要传递的参数
        data: data
    })
}

export const createTopic = (data) => {
    return request({
        // 配置请求方式
        method: 'post',// GET/POSH
        // 请求接口地址
        url: '/topics',
        // 要传递的参数
        data: data
    })
}

export const deleteTopic = (id) => {
    return request({
        // 配置请求方式
        method: 'DELETE',// GET/POSH
        // 请求接口地址
        url: '/topics/' + id,
    })
}

export const createReply = (topicId, data) => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'POST',// GET/POSH
        // 请求接口地址
        url: '/topics/' + topicId + '/replies',
        data: data
    })
}

export const editTopic = (topicId, data) => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'PATCH',// GET/POSH
        // 请求接口地址
        url: '/topics/' + topicId,
        data: data
    })
}

export const deleteReply = (topicId, replyId) => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'DELETE',// GET/POSH
        // 请求接口地址
        url: '/topics/' + topicId + '/replies/' + replyId,
    })
}

export const like = (topicId) => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'POST',// GET/POSH
        // 请求接口地址
        url: '/topics/like/' + topicId,
    })
}

export const unlike = (topicId) => {
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'POST',// GET/POSH
        // 请求接口地址
        url: '/topics/unlike/' + topicId,
    })
}
