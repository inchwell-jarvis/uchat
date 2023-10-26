<template>
    <div class='page animate__animated animate__fadeIn'>
        <Menu></Menu>
        <div class="subpage">
          <router-view />
        </div>
    </div>
</template>

<script>
import Menu from '../../components/menu.vue';
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
    components: {
        Menu,
    },
    // 定义属性
    data() {
        return {
            // animate__animated animate__fadeIn
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
.page {
    width: 100%;
    height: 100%;
    background: #f7f8fd;
    .subpage {
        width: calc(100% - 220px);
        height: 100%;
        float: left;
        background: #f7f8fd;
    }
}
</style>