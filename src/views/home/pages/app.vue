<template>
    <div class='app'>
        <div class="app_box">

            <h2>接口</h2>

            <div class="platform">
                <div class="platform_li"></div>
                <div class="platform_li"></div>
                <div class="platform_li"></div>
                <div class="platform_li"></div>
                <div class="platform_li"></div>
                <div class="platform_li"></div>
                <div class="platform_li"></div>
                <div class="platform_li"></div>
            </div>

            <h2>生成</h2>

            <h2>编码加密</h2>

            <h2>其他</h2>

        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
    // 定义属性
    data() {
        return {

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
.app {
    width: 100%;
    height: 100%;
    .app_box {
        width: 1200px;
        height: 100%;
        margin: auto;
        h2 {
            line-height: 100px;
        }

        .platform {
            width: 100%;
            min-height: 100px;
            float: left;
            .platform_li {
                width: 280px;
                height: 200px;
                background: #ffffff;
                border-radius: 10px;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
                float: left;
                margin: 0 20px 20px 0;
                cursor: pointer;
                transition: 0.4s;
            }
            .platform_li:hover{
                box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.1);
            }
        }
    }
}
</style>