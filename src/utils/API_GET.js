import axios from "axios"; // axios
import { Message } from "element-ui"; // element

export default function (head, data = {}) {
    return new Promise((resolve, reject) => {
        let head_url = 'http://localhost:1129/' + head;
        // let head_url = 'http://localhost:1129/' + head;
        let HeadersToken = { token: localStorage.getItem("token") };
        // API
        axios
            .get(head_url, { params: data, headers: HeadersToken })
            .then(res => {
                if (typeof res.data === "string") {
                    var Data = JSON.parse(res.data);
                } else {
                    var Data = res.data;
                }
                Data.Code == 0 ? resolve(Data.Data) : Message({ message: Data.Msg, type: "error" }); // 判断请求状态
            })
            .catch(err => {
                // 错误提示
                Message({ message: err, type: "error" })
            });
    });
}