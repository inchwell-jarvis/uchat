import axios from "axios"; // axios
import { Message } from "element-ui"; // element
import store from "../store/index"; // vuex

export default function (head, data = {}) {
    return new Promise((resolve, reject) => {
        let head_url = store.state.http + head;
        let HeadersToken = { token: localStorage.getItem("token") };
        // API
        axios
            .get(head_url, { params: data, headers: HeadersToken })
            .then(res => {
                console.log(res)
                let data = res.data
                data.success ? resolve(data) : Message({ message: data.message, type: "error" }); // 判断请求状态
            })
            .catch(err => {
                Message({ message: err, type: "error" })
            });
    });
}