// websocket-plugin.js
const WebSocketPlugin = {
    install(Vue, options) {
        // 初始化WebSocket连接
        //   const socket = new WebSocket('ws://82.157.236.215:3000');
        const socket = new WebSocket('ws://localhost:3000');

        // 添加WebSocket连接到Vue实例中
        Vue.prototype.$socket = socket;

        // WebSocket连接建立时的回调函数
        // socket.onopen = function () {
        //     console.log('WebSocket连接已建立');
        // };

        // // 接收到消息时的回调函数
        // socket.onmessage = function (event) {
        //     console.log(JSON.parse(event.data))
        //     return JSON.parse(event.data)
        // };

        // // 连接关闭时的回调函数
        // socket.onclose = function () {
        //     console.log('WebSocket连接已关闭');
        // };

        // // 发生错误时的回调函数
        // socket.onerror = function (error) {
        //     console.error('WebSocket发生错误:', error);
        // };
    },
};

export default WebSocketPlugin;
