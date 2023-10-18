<template>
    <div class='index'>
        <div class="index_box"></div>
        <div class="router_web">
            <h1>文档导航</h1>
            <div class="router_web_li">
              <!-- icon -->
              <div class="icon"></div>
            </div>
            <div class="router_web_li"></div>
            <div class="router_web_li"></div>
            <div class="router_web_li"></div>
            <div class="router_web_li"></div>
            <div class="router_web_li"></div>
            <div class="router_web_li"></div>
            <div class="router_web_li"></div>
            <div class="router_web_li"></div>
            <div class="router_web_li"></div>
        </div>

    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
    // 定义属性
    data() {
        return {
            router_web: [
                {
                    title: 'VueJs 2',
                    describe: 'Vue2 渐进式 JavaScript 框架',
                    // icon: require('../../assets/menu/settings-start.png'),
                },
            ]
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
.index {
    width: 100%;
    height: 100%;
    float: left;
    overflow: auto;
    .index_box {
        width: calc(100% - 100px);
        height: 500px;
        margin: auto;
        background: #ffffff;
        margin-top: 50px;
        border-radius: 30px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        cursor: pointer;
    }
    .router_web {
        width: calc(100% - 100px);
        min-height: 100px;
        margin: auto;
        h1 {
            line-height: 100px;
        }
        .router_web_li {
            width: 304px;
            height: 130px;
            background: #ffffff;
            float: left;
            margin: 0 10px 10px 0;
            border-radius: 10px;
            box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: 0.4s;
        }
        .router_web_li:hover {
            box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
        }
    }
}
</style>