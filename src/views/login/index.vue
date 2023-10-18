<template>
    <div class='page'>

        <div :class="page_name">
            <div class="page_box_left">
                <img src="../../assets/images/logo.png" alt="">
            </div>
            <div class="page_box_right">
                <p class="title">UChat</p>
                <br>
                <p class="start">开始你的第一次对话</p>
                <br><br><br><br><br>
                <p class="choose">选择身份 开始对话</p>
                <br>
                <div class="optionalIdentity">
                    <div class="identity" @click="path()"><img src="../../assets/images/avatar1.png" alt=""></div>
                    <div class="identity" @click="path()"><img src="../../assets/images/avatar2.png" alt=""></div>
                    <div class="identity" @click="path()"><img src="../../assets/images/avatar3.png" alt=""></div>
                    <div class="identity" @click="path()"><img src="../../assets/images/avatar4.png" alt=""></div>
                </div>
            </div>
        </div>

        <!-- <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>

        <img src="../../assets/images/logo.png" alt="" style="width: 500px;"> -->
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
    // 定义属性
    data() {
        return {
            page_name: 'page_box'
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
        path() {
            this.page_name = 'page_box animate__animated animate__bounceOut'
            setTimeout(() => {
                this.$router.push({
                    path: 'home'
                })
            }, 1000);
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
        .page_box_right {
            width: 50%;
            height: 100%;
            float: left;
            // border: 1px solid #ccc;
            box-sizing: border-box;
        }
        .page_box_left {
            padding: 50px;
            box-sizing: border-box;
            img {
                width: 400px;
                height: 400px;
            }
        }
        .page_box_right {
            .title {
                font-size: 100px;
                font-family: 'Mooli';
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
            }
            .optionalIdentity {
                width: 100%;
                height: 100px;
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
    }
}
</style>