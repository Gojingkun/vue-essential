import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'
// 引入 actions.js 的所有导出
import * as moreActions from './actions'
import * as moreGetters from './getters'
import { getCurrentUser } from "@/api/user";

Vue.use(Vuex)

const state = {
    // 用户信息，初始值从本地 localStorage 获取
    user: ls.getItem('user'),
    // 添加 auth 来保存当前用户的登录状态
    auth: ls.getItem('auth'),
    // 用户accessToken
    accessToken: ls.getItem('access_token'),
    // 用户accessToken过期时间
    accessTokenExpiredAt: ls.getItem('access_token_expired_at'),
    // 所有文章状态
    articles: ls.getItem('articles'),
    // 搜索值
    searchValue: '',
    // 默认为 location.origin
    origin: 'http://www.7ikun.club',
    // 当前所有分类
    navList: [],
    // 当前分类
    currentCategoryId: 0,
}

const mutations = {
    UPDATE_USER(state, user) {
        // 改变 user 的值
        state.user = user
        // 将改变后的值存入 localStorage
        ls.setItem('user', user)
    },
    // 添加 UPDATE_AUTH 来更改当前用户的登录状态
    UPDATE_AUTH(state, auth) {
        state.auth = auth
        ls.setItem('auth', auth)
    },
    // 更改所有文章的事件类型
    UPDATE_ARTICLES(state, articles) {
        state.articles = articles
        ls.setItem('articles', articles)
    },
    // 更新搜索值的事件类型
    UPDATE_SEARCH_VALUE(state, searchValue) {
        state.searchValue = searchValue
    },
    // 更新TOKEN
    UPDATE_TOKEN(state, tokenPayload) {
        state.accessToken = tokenPayload.access_token
        state.accessTokenExpiredAt = new Date().getTime() + ((tokenPayload.expires_in - 200) * 1000)
        ls.setItem('access_token', state.accessToken)
        ls.setItem('access_token_expired_at', state.accessTokenExpiredAt)
    },
    // 更新当前分类
    UPDATE_CATEGORY(state, currentCategoryId) {
        state.currentCategoryId = currentCategoryId
    }
}

const actions = {
    login({ commit }, tokenPayload) {
        // 登录时有传用户信息，就更新下用户信息
        // if (params.user) commit('UPDATE_USER', params.user)
        // 更新当前用户的登录状态为已登录
        commit('UPDATE_AUTH', true)
        // 存储 token
        commit('UPDATE_TOKEN', tokenPayload)
        // 再获取用户信息 存储用户信息
        // dispatch('getUser')
        // 跳转到首页
        // router.push('/')
    },
    logout({ commit }) {
        commit('UPDATE_AUTH', false)
        ls.clearItem()
        router.push({ name: 'Home', params: { logout: true } })
    },
    updateUser({ state, commit }, user) {
        // 获取仓库的个人信息
        const stateUser = state.user

        // 简单的数据类型判断
        if (stateUser && typeof stateUser === 'object') {
            // 合并新旧个人信息，等价于 user = Object.assign({}, stateUser, user)
            user = { ...stateUser, ...user }
        }

        // 更新个人信息
        commit('UPDATE_USER', user)
    },
    getUser({ state, commit }, user) {
        commit('UPDATE_USER', user)
    },
    // 使用对象展开运算符混入 moreActions
    ...moreActions
}

// 添加 getters
const getters = {
    // 第一参数是 state，因为要传 id，所以这里返回一个函数
    getArticleById: (state, getters) => (id) => {
        // 使用派生状态 computedArticles 作为所有文章
        let articles = getters.computedArticles

        // 所有文章是一个数组时
        if (Array.isArray(articles)) {
            // 传进来的 id 和文章的 articleId 相同时，返回这些文章
            articles = articles.filter(article => parseInt(id) === parseInt(article.articleId))
            // 根据文章长度，返回文章或者 null
            return articles.length ? articles[0] : null
        } else {
            // 返回 null
            return null
        }
    },
    // 混入 moreGetters, 你可以理解为 getters = Object.assign(getters, moreGetters)
    ...moreGetters
}

const store = new Vuex.Store({
    state,
    // 注册 getters
    getters,
    mutations,
    actions
})

export default store
