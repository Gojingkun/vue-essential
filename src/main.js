import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import './directives'
import './components'
// 引入 store/index.js 的默认值
import store from './store'
// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'
// 引入插件
import Message from './plugins/message'
import './filters'
import { mockArticles } from './mock/data'
import ls from './utils/localStorage'
// 运行 ./mock/index.js
import './mock'
// 引入 axios 的默认值
import axios from 'axios'

// 将 axios 添加到 Vue.prototype 上，使其在实例内部的所有组件中可用
Vue.prototype.$axios = axios

// 使用插件
Vue.use(VueSweetalert2)
// 使用插件
Vue.use(Message)

Vue.config.productionTip = false

const AddMockData = (() => {
  // 是否加入测试数据
  const isAddMockData = false
  // 用户数据
  let userArticles = ls.getItem('articles')

  if (Array.isArray(userArticles)) {
    userArticles = userArticles.filter(article => parseInt(article.uid) === 1)
  } else {
    userArticles = []
  }

  if (isAddMockData) {
    // 合并用户数据和测试数据，使用合并值作为所有文章
    store.commit('UPDATE_ARTICLES', [...userArticles, ...mockArticles(60)])
  } else {
    // 使用用户数据作为所有文章
    store.commit('UPDATE_ARTICLES', userArticles)
  }
})()

new Vue({
  router,
  // 注入 store
  store,
  render: h => h(App),
}).$mount('#app')
