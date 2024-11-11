import request from '@/utils/request.js'
import {objectToQuery} from '@/utils/utils.js'

// 分别暴露的方式暴露内容
export const getReplies = (topicId, data) => {
    let query = objectToQuery(data);
    // 返回请求的数据
    return request({
        // 配置请求方式
        method: 'GET',// GET/POSH
        // 请求接口地址
        url: 'topics/' + topicId + '/replies' + query,
    })
}
