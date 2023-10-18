<template>
    <div class='menu'>
        <!-- 头部LOGO -->
        <div class="logo">
            <!-- logo -->
            <img src="../../assets/images/logo.png" alt="">
            <!--  -->
            <div>
                UChat
            </div>
        </div>
        <!-- MENU -->
        <div class="menu_list">
            <!--  -->
            <div class="menu_li" v-for="(item,index) in menu" :key="index" @click="headleMenu(item,index)" :style="{'background':(menu_index == index ?'#eff1f8':'')}">
                <img :src="menu_index == index ? item.start_icon : item.close_icon" alt="">
                <div class="text">{{ item.name }}</div>
            </div>
        </div>
        <!-- exit -->
        <div class="menu_list exit">
            <!--  -->
            <div class="menu_li" @click="headleMenu(exit[0],99)">
                <img :src="exit[0].start_icon" alt="" >
                <div class="text">{{ exit[0].name }}</div>
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
            menu: [
                {
                    name: '主页',
                    path: '/index',
                    start_icon: require('../../assets/menu/settings-start.png'),
                    close_icon: require('../../assets/menu/settings-close.png'),
                }
                ,
                {
                    name: '沟通',
                    path: '/chat',
                    start_icon: require('../../assets/menu/message-start.png'),
                    close_icon: require('../../assets/menu/message-close.png'),
                }
                ,
                {
                    name: '应用',
                    path: '/app',
                    start_icon: require('../../assets/menu/app-start.png'),
                    close_icon: require('../../assets/menu/app-close.png'),
                }
            ],
            exit: [
                {
                    name: '退出',
                    path: '/',
                    start_icon: require('../../assets/menu/exit-start.png')
                }
            ],
            menu_index: 0
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
        headleMenu(item, index) {
            console.log(item)
            this.menu_index = index
            this.$router.push({
                path: item.path
            })
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
.menu {
    width: 220px;
    height: 100%;
    float: left;
    background: #ffffff;
    .logo {
        width: 100%;
        height: 100px;
        // background: #000;
        padding: 20px;
        box-sizing: border-box;
        img {
            width: 60px;
            height: 60px;
            display: block;
            float: left;
        }
        div {
            width: 120px;
            height: 100%;
            float: left;
            line-height: 60px;
            padding-left: 20px;
            box-sizing: border-box;
            font-weight: 700;
            font-size: 30px;
            background-image: linear-gradient(to top, #d08f5f 0%, #f9773f 100%);
            -webkit-background-clip: text;
            -moz-background-clip: text;
            background-clip: text;
            color: transparent;
            font-family: "Mooli";
        }
    }

    .menu_list {
        width: 100%;
        height: calc(100% - 250px);
        margin-top: 50px;
        .menu_li {
            width: 80%;
            height: 40px;
            border-radius: 10px;
            margin: auto;
            cursor: pointer;
            padding: 5px;
            box-sizing: border-box;
            margin-top: 20px;
            img {
                width: 26px;
                display: block;
                float: left;
                margin-top: 2px;
                pointer-events: none;
            }
            .text {
                width: 100px;
                height: 100%;
                float: left;
                margin-left: 10px;
                line-height: 30px;
                font-weight: bold;
                user-select: none;
            }
        }
        .menu_li:hover {
            background: #eff1f8;
        }
    }
    .exit {
        width: 100%;
        height: 100px;
        margin-top: 0px;
        float: left;
    }
}
</style>