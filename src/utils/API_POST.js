import axios from "axios"; // axios
import store from "../store/index"; // vuex
import { Message } from "element-ui"; // element

/**
   
    POST请求函数，支持防抖处理

    @param {string} head - 请求地址

    @param {Object} data - 请求参数，默认为空对象

    @param {boolean} shake - 是否开启防抖，默认开启

    @param {boolean} firsthand - 是否返回原始数据，默认返回处理后的数据


    @return {Promise} 返回Promise对象
   
*/

export default function (head, data = {}, shake = true, firsthand = false ) {


    return new Promise((resolve, reject) => {

        let Vuex = store.state.Vuex;
        let head_url = store.state.http + head;
        let HeadersToken = { token: localStorage.getItem("token") };
        Vuex.loading = true;
        const treatment_POSTLIST = function (head, num) {
            // 向 POSTLIST 中存储 请求
            if (num == "add") {
                // 判断是否已包含此请求
                if (JSON.stringify(Vuex.POSTLIST).indexOf(head) == -1) {
                    Vuex.POSTLIST.push(head);
                    return false;
                } else {
                    Message({ message: "请等待上一条任务完成", type: "error" });
                    return true;
                }
            }
            // 删除 POSTLIST 中的请求记录
            if (num == "del") {
                if (Vuex.POSTLIST.length != 0) {
                    for (let index = 0; index < Vuex.POSTLIST.length; index++) {
                        const element = Vuex.POSTLIST[index];
                        if (element == head) {
                            Vuex.POSTLIST.splice(index, 1);
                        }
                    }
                }
            }
        }

        // 要求防抖 且 防抖池包含当前接口 不予以通过
        if (shake && treatment_POSTLIST(head, "add")) return false;

        // API
        axios
            .post(head_url, data, { headers: HeadersToken, timeout: 20000 }) // `timeout` 请求时间超出 timeout 设置的指定时间则放弃当前请求
            .then(res => {
                let data = res.data
                data.success ? resolve(data) : Message({ message: data.message, type: "error" }); // 判断请求状态
                treatment_POSTLIST(head, "del");//  去除防抖池内的记录
                Vuex.loading = false; // 改变请求状态
            })
            .catch(err => {
                Message({ message: err, type: "error" })
                treatment_POSTLIST(head, "del");  //    去除防抖池内的记录
                Vuex.loading = false;
            });
    });
}