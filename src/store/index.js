import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token:'',
        role: '',
        roleId: '',
        http: 'http://localhost:1129/',
        // http:'http://localhost:1129/',
        Vuex: {
            loading: false,
            POSTLIST: [],// post 请求池
        }

    },
    mutations: {},
    actions: {},
})
export default store