// 导入axios
import axios from 'axios'

// 创建axios
const request = axios.create({
    // 配置代理接口
    // 不需要配置代理服务器的话可以直接写域名
    baseURL: 'http://1.14.200.8/api/v1',
    // 响应时间
    timeout: 3000
})
    // 暴露
export default request
