import API_POST from './utils/API_POST'                                 // 封装的 POST 请求
import API_GET from './utils/API_GET'                                   // 封装的 GET  请求

export default {
    install(Vue, options) {
        // 简化接口  GET
        Vue.prototype.API_GET = API_GET

        // 统一 POST 接口 防抖
        Vue.prototype.API_POST = API_POST
    }
};