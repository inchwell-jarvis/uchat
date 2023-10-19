<template>
    <div class='api'>
        <div class="api_home">

            <h2>API 文档</h2>
            
            <!--  -->
            <div class="api_li" v-for="(item,index) in api_list" :key="index">
                <!-- 标题 -->
                <div class="api_header" @click="item.bool = !item.bool">
                    <div class="api_header_title">{{item.name}}</div>
                    <div class="icon">
                        <div class="icon_30">
                            <i :style="{ transform: item.bool ? 'rotate(-90deg)' : 'none' }" class="el-icon-caret-left"></i>
                        </div>
                    </div>
                </div>
                <!-- 内容 -->
                <div class="api_content" :style="{ height: item.bool ? '800px' : '0px',margin: item.bool ? '20px auto' : '0px auto' }">
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
            api_list: [
                {
                    name: '账号相关',
                    bool: false,
                }
                ,
                {
                    name: '权限相关',
                    bool: false,
                }
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
.api {
    width: 100%;
    height: 100%;
    .api_home {
        width: 1140px;
        height: 100%;
        // background: #ffffff;
        margin: auto;
        overflow: auto;
        padding: 0 20px;
        box-sizing: border-box;

        h2 {
            line-height: 100px;
        }

        .api_li {
            width: 100%;
            min-height: 40px;
            background: #ffffff;
            margin: 10px auto;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
                0 0 6px rgba(0, 0, 0, 0.04);
            
            float: left;

            .api_header {
                cursor: pointer;
                width: 100%;
                height: 40px;
                .api_header_title {
                    width: 1000px;
                    height: 100%;
                    float: left;
                    line-height: 40px;
                    padding-left: 20px;
                    box-sizing: border-box;
                    font-weight: bold;
                    font-size: 16px;
                    color: #303133;
                    user-select: none;
                }
                .icon {
                    width: 40px;
                    height: 40px;
                    float: right;
                    margin-right: 15px;
                    .icon_30 {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background: #ebeef5;
                        margin: 5px;
                        text-align: center;
                        line-height: 30px;
                        font-size: 20px;
                        color: #909399;
                        i {
                            transition: 0.4s;
                        }
                    }
                }
            }

            .api_content {
                width: 1060px;
                transition: 0.4s;
                overflow: hidden;
                background: #F2F6FC;
                border-radius: 6px;
            }
        }
        .api_li:nth-child(1){
            margin-top: 50px;
        }
    }
}
</style>