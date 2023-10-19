<template>
    <div class='chat'>
        <!-- 头像 -->
        <div class="avatar"></div>

        <div class="chat_home">
            <div class="chat_content" ref="scrollContainer">
                <!-- 别人的消息 -->
                <!-- 我的消息 -->
                <div  v-for="(item,index) in msgData" :key="index">

                    <div class="my_msg animate__animated animate__fadeIn" v-if="item.role == role && item.type == 'text' ">
                        <div class="my_avatar">
                            <img src="../../../assets/images/avatar1.png" alt="">
                        </div>
                        <div class="message">
                            <span>{{item.message}}</span>
                        </div>
                    </div>

                    <div class="my_msg you_msg animate__animated animate__fadeIn" v-if="item.role != role && item.type == 'text'">
                        <div class="my_avatar">
                            <img src="../../../assets/images/avatar1.png" alt="">
                        </div>
                        <div class="message">
                            <span>{{item.message}}</span>
                        </div>
                    </div>

                </div>

            </div>
            <div class="chat_input">
                <div class="chat_input_">
                    <div class="chat_input_send">
                        <input class="inputClass" type="text" v-model="inputValue" placeholder="Send a message" @keyup.enter="Send()">
                    </div>
                    <!-- 右侧小箭头 -->
                    <div class="send" @click="Send()">
                        <img :src="inputValue ? sendStart : sendClose" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
    // 定义属性
    data() {
        return {
            inputValue: '',
            sendClose: require('../../../assets/send/send-close.png'),
            sendStart: require('../../../assets/send/send-start.png'),
            socket: null,
            msgData: [],
            role: this.$store.state.role
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        console.log(this.$store.state.role)
        // 在Vue组件中访问WebSocket连接
        this.$socket.send(JSON.stringify({ type: "system", value: '获取历史记录' }))
    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        let that = this
        that.$socket.onmessage = function (event) {
            that.msgData = JSON.parse(event.data).chatHistory
            console.log(that.msgData)
            setTimeout(() => {
                that.scrollToBottom();
            }, 100);
        };
    },
    // 计算属性，会监听依赖属性值随之变化
    computed: {
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {

        // this.$socket.send(message): 发送消息给WebSocket服务器。
        // this.$socket.onmessage(event): 为WebSocket消息接收添加回调函数。
        // this.$socket.onopen(): 为WebSocket连接建立时添加回调函数。
        // this.$socket.onclose(): 为WebSocket连接关闭时添加回调函数。
        // this.$socket.onerror(error): 为WebSocket连接发生错误时添加回调函数。

        Send() {
            this.$socket.send(JSON.stringify({ type: "info", value: this.inputValue, role: this.role }))
            this.inputValue = ''
        },

        scrollToBottom() {
            // 获取滚动容器的DOM元素
            const container = this.$refs.scrollContainer;
            // 滚动到底部
            container.scrollTop = container.scrollHeight;
        },
    },
    beforeCreate() { }, // 生命周期 - 创建之前
    beforeMount() { }, // 生命周期 - 挂载之前
    beforeUpdate() { }, // 生命周期 - 更新之前
    updated() { }, // 生命周期 - 更新之后
    beforeDestroy() { }, // 生命周期 - 销毁之前
    destroyed() { }, // 生命周期 - 销毁完成
    activated() { }, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='scss' scoped>
.chat {
    width: 100%;
    height: 100%;
    position: relative;

    .avatar {
        width: 300px;
        height: 70px;
        position: absolute;
        border: 1px solid #ccc;
        background: #ffffff;
        top: 0;
        right: -230px;
        cursor: pointer;
        transition: 0.4s;
        box-sizing: border-box;
    }
    .avatar:hover {
        right: 0px;
    }
    .chat_home {
        width: 1200px;
        height: 100%;
        margin: auto;
        box-sizing: border-box;

        .chat_content {
            width: 100%;
            height: calc(100% - 150px);
            overflow: auto;
            box-sizing: border-box;
            transition: 1s;
            padding-bottom: 50px;
            // 我的消息
            .my_msg {
                width: 100%;
                min-height: 50px;
                box-sizing: border-box;
                padding-left: 50px;
                box-sizing: border-box;
                margin-top: 20px;
                float: left;
                .message {
                    min-width: 10px;
                    min-height: 50px;
                    max-width: 1070px;
                    float: right;
                    background: #e1f3d8;
                    border-radius: 6px;
                    margin-right: 10px;
                    padding: 10px;
                    box-sizing: border-box;
                    line-height: 30px;
                    span {
                        float: right;
                    }
                }
                .my_avatar {
                    width: 50px;
                    height: 50px;
                    float: right;
                    padding: 5px;
                    box-sizing: border-box;
                    background: #ffffff;
                    border-radius: 6px;
                    img {
                        width: 40px;
                        height: 40px;
                    }
                }
            }

            // 别人的消息
            .you_msg {
                padding-left: 0px;
                padding-right: 50px;
                .message {
                    float: left;
                    margin-right: 0px;
                    margin-left: 10px;
                    background: #ffffff;
                    line-height: 30px;
                }
                .my_avatar {
                    float: left;
                }
            }
        }
        .chat_input {
            width: 100%;
            height: 150px;
            float: left;
            box-sizing: border-box;
            .chat_input_ {
                width: 800px;
                min-height: 56px;
                margin: auto;
                border-radius: 10px;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                background: #ffffff;
                margin-top: 40px;
                padding: 3px;
                box-sizing: border-box;

                .chat_input_send {
                    width: calc(100% - 60px);
                    min-height: 50px;
                    float: left;
                    padding-left: 10px;
                    box-sizing: border-box;
                    .inputClass {
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        font-size: 16px;
                        border: none;
                        box-shadow: none;
                        font-family: Arial, Helvetica, Roboto, sans-serif;
                    }
                    .inputClass:focus {
                        outline: none;
                    }
                }

                .send {
                    width: 50px;
                    height: 50px;
                    float: right;
                    padding: 8px;
                    box-sizing: border-box;
                    cursor: pointer;

                    img {
                        width: 34px;
                        height: 34px;
                    }
                }
            }
        }
    }
}
</style>