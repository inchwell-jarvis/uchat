<template>
    <div class='page'>

        <div :class="page_name">
            <!-- logo -->
            <div class="page_box_left" ref="page_box_left">
                <img src="../../assets/images/logo.png" alt="">
            </div>
            <!-- 登录 -->
            <div class="page_box_right">
                <p class="title">UChat</p>
                <br>
                <p class="start">开始你的第一次对话</p>
                <br>
                <div class="optionalIdentity">
                    <p class="choose">邮箱</p>
                    <el-input v-model="Email" style="width: 320px" placeholder="请输入邮箱"></el-input>
                    <p class="choose">密码</p>
                    <el-input v-model="Email" style="width: 320px" placeholder="请输入密码"></el-input>
                    <br>
                    <p class="choose" style="width: 320px;margin-top: 20px;color: #67C23A;">
                        <span style="cursor: pointer;" @click="Register()">注册</span>
                        <el-button style="float: right;"  type="primary" plain>登 录</el-button>
                    </p>
                </div>
            </div>
            <!-- 注册 -->
            <div class="page_box_register">
                <p class="start">注册账号</p>
                <br>
                <div class="optionalIdentity">

                    <p class="choose">邮箱</p>
                    <el-input v-model="Email" style="width: 320px" placeholder="请输入邮箱"></el-input>
                    <el-button>获取验证码</el-button>

                    <p class="choose">验证码</p>
                    <el-input v-model="Email" style="width: 320px" placeholder="请输入验证码"></el-input>
                    <!-- <el-button>验证码正确</el-button> -->
                    <p class="choose">密码</p>
                    <el-input v-model="Email" style="width: 320px" placeholder="请输入密码"></el-input>
                    <p class="choose">再次输入密码</p>
                    <el-input v-model="Email" style="width: 320px" placeholder="请再次输入密码"></el-input>
                    <br>
                    <p class="choose" style="width: 320px;margin-top: 20px;color: #67C23A;" >
                        <el-button style="float: right;"  type="success" plain @click="registerAccount()">注 册</el-button>
                    </p>
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
            page_name: 'page_box animate__animated animate__fadeIn',
            Email: ''
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    // 计算属性，会监听依赖属性值随之变化
    computed: {
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        path(id) {
            this.$store.state.role = id
            this.page_name = 'page_box animate__animated animate__bounceOut'
            setTimeout(() => {
                this.$router.push({
                    path: 'home'
                })
            }, 1000);
        },
        // 注册
        Register() {
            this.$refs.page_box_left.style.left = '500px'
        },
        // 注册账号
        registerAccount(){
            this.$refs.page_box_left.style.left = '0px'
        }
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
.page {
    width: 100%;
    height: 100%;
    background: #ffffff;
    .page_box {
        width: 1000px;
        height: 500px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        .page_box_left,
        .page_box_right,
        .page_box_register {
            width: 50%;
            height: 100%;
            // border: 1px solid #ccc;
            box-sizing: border-box;
            position: absolute;
            transition: 0.6s;
        }

        .page_box_left {
            padding: 50px;
            box-sizing: border-box;
            background: #ffffff;
            left: 0;
            top: 0;
            z-index: 10;
            img {
                width: 400px;
                height: 400px;
            }
        }
        .page_box_right,
        .page_box_register {
            left: 500px;
            top: 0;
            z-index: 5;
            .title {
                font-size: 100px;
                font-family: "Mooli";
                font-weight: 700;
                background-image: linear-gradient(
                    to top,
                    #d08f5f 0%,
                    #f9773f 100%
                );
                -webkit-background-clip: text;
                -moz-background-clip: text;
                background-clip: text;
                color: transparent;
            }
            .start {
                font-size: 30px;
            }
            .choose {
                color: rgb(56, 131, 247);
                font-weight: bold;
                line-height: 30px;
            }
            .optionalIdentity {
                width: 100%;
                min-height: 100px;
                .identity {
                    width: 100px;
                    height: 100px;
                    float: left;
                    border-radius: 20px;
                    margin-right: 10px;
                    cursor: pointer;
                    -webkit-user-select: none;
                    user-select: none;
                    box-sizing: border-box;
                    padding: 10px;
                    background: #3883f7;
                    filter: grayscale(100%);
                    img {
                        width: 100%;
                        pointer-events: none;
                        -webkit-user-select: none;
                        user-select: none;
                    }
                }
                .identity:hover {
                    filter: grayscale(0%);
                }
            }
        }
        .page_box_register {
            left: 0;
            top: 0;
            z-index: 5;
        }
    }
}
</style>