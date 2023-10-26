<template>
    <div class='page'>

        <div :class="page_name">
            <!-- logo -->
            <div class="page_box_left" :style="{left:slide?'500px':'0px'}">
                <img src="../../assets/images/logo.png" alt="">
            </div>
            <!-- 登录 -->
            <div class="page_box_right" :style="{left:slide?'0px':'500px',zIndex:slide?'0':'100'}">
                <p class="title">UChat</p>
                <br>
                <p class="start">开始你的第一次对话</p>
                <br>
                <div class="optionalIdentity">
                    <p class="choose">邮箱</p>
                    <el-input v-model="Login.email" style="width: 320px" placeholder="请输入邮箱"></el-input>
                    <p class="choose">密码</p>
                    <el-input v-model="Login.password" style="width: 320px" placeholder="请输入密码"></el-input>
                    <br>
                    <p class="choose" style="width: 320px;margin-top: 20px;color: #67C23A;">
                        <span style="cursor: pointer;" @click="Register_route(true)">注册</span>
                        <el-button style="float: right;" type="primary" plain @click="login_fun()">登 录</el-button>
                    </p>
                </div>
            </div>
            <!-- 注册 -->
            <div class="page_box_register" :style="{left:slide?'0px':'500px',zIndex:slide?'100':'0'}">
                <p class="start">注册账号</p>
                <br>
                <div class="optionalIdentity">

                    <p class="choose choose2">邮箱</p>
                    <el-input v-model="Register.email" style="width: 320px" placeholder="请输入邮箱"></el-input>
                    <el-button @click="getVCode()">获取验证码</el-button>

                    <p class="choose choose2">验证码</p>
                    <el-input v-model="Register.vcode" style="width: 320px" placeholder="请输入验证码"></el-input>
                    <!-- <el-button>验证码正确</el-button> -->
                    <p class="choose choose2">设置密码</p>
                    <el-input v-model="Register.password" style="width: 320px" placeholder="请输入密码"></el-input>
                    <p class="choose choose2">再次输入密码</p>
                    <el-input v-model="Register.twoPassword" style="width: 320px" placeholder="请再次输入密码"></el-input>
                    <br>
                    <p class="choose" style="width: 320px;margin-top: 20px;color: #3883f7;">
                        <span style="cursor: pointer;" @click="Register_route(false)">登录</span>
                        <el-button style="float: right;" type="success" plain @click="registerAccount()">注 册</el-button>
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
            // class
            page_name: 'page_box animate__animated animate__fadeIn',

            // 登录
            Login: {
                email: '2237928292@qq.com',
                password: 'anxuan',
            },

            // 注册
            Register: {
                email: '2237928292@qq.com',
                vcode: '',
                password: '',
                twoPassword: '',
            },
            // 滑动
            slide: false
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        // this.CookieManager('del','token')
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
        // 登录
        login_fun() {
            // 正则表达式模式用于验证邮箱格式
            var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailPattern.test(this.Login.email)) {
                return this.$message.warning('邮箱格式不正确，请输入有效的邮箱地址！');
            }
            if (this.Login.password.trim() == '') {
                return this.$message.warning('请输入密码！');
            }
            // 满足条件 进入后端
            this.API_POST('account/login', this.Login)
                .then(rv => {
                    // 注册成功应该直接返回 token 进入主页
                    console.log(rv)
                    this.path(rv.data.token)
                })
        },
        // 前往主页
        path(token) {
            this.CookieManager('set', 'token', token, 7)
            this.page_name = 'page_box animate__animated animate__bounceOut'
            setTimeout(() => {
                this.$router.push({
                    path: 'home'
                })
            }, 1000);
        },
        // 注册
        Register_route(bool) {
            this.slide = bool
            console.log(this.slide)
        },
        // 注册账号
        registerAccount() {
            // 正则表达式模式用于验证邮箱格式
            var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailPattern.test(this.Register.email)) {
                return this.$message.warning('邮箱格式不正确，请输入有效的邮箱地址');
            }
            // 验证码为七位数
            if (this.Register.vcode.length != 7) {
                return this.$message.warning('验证码格式错误');
            }
            // 判断二次输入密码存在 且相同
            if (this.Register.password == this.Register.twoPassword && this.Register.password.trim() != '') {
                // 满足条件 进入后端
                this.API_POST('account/register', this.Register)
                    .then(rv => {
                        // 注册成功应该直接返回 token 进入主页
                        console.log(rv)
                        this.$message.success('注册成功！正在前往主页！');
                        this.path()
                    })
            } else {
                return this.$message.error('请确认二次密码不为空且相同！');
            }
        },

        // 获取验证码
        getVCode() {
            // 正则表达式模式用于验证邮箱格式
            var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (emailPattern.test(this.Register.email)) {
                // 邮箱格式正确，执行获取验证码的操作
                this.API_GET('account/vcode', { email: this.Register.email })
                    .then(rv => {
                        this.$message.success('验证码发送成功，请查看邮箱！');
                    })
            } else {
                // 邮箱格式不正确，给出错误提示
                this.$message.warning('邮箱格式不正确，请输入有效的邮箱地址');
            }
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
            transition: 1s;
            overflow: hidden;
            background: #ffffff;
        }

        .page_box_left {
            padding: 50px;
            box-sizing: border-box;
            background: #ffffff;
            left: 0;
            top: 0;
            z-index: 200;
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
            .choose2 {
                color: #67c23a;
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