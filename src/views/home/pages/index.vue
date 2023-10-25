<template>
    <div class='index'>
        <div class="index_box">
            <!-- 标题 -->
            <p class="title">UChat</p>
            <!-- 装逼 -->
            <p class="zb">创新和成功通常开始于一个清晰的、有趣的、具有潜力的想法。</p>
            <p class="zb">这个想法可以是解决一个问题、满足一种需求、创造一种新产品或服务，或者改进现有的过程或方法。</p>
            <p class="zb">从想法到成功需要努力、计划、执行和坚持不懈的工作，但一切都始于一个原始的概念或愿景。</p>

            <p class="Github">
                <span @click="clickPath({url:'https://github.com/inchwell-jarvis'})">我的GITHUB主页</span>
            </p>

            <div class="but">
                <button class="button1" @click="addToFavorites">
                    订阅
                </button>
                <button class="button2" @click="clickPath({url:'https://github.com/inchwell-jarvis/uchat'})">
                    访问 Github 源码 <i class="el-icon-right"></i>
                </button>
            </div>
            <!-- 图片 -->
            <img class="img" src="../../../assets/images/logo.png" alt="">
        </div>
        <div class="router_web">
            <h1>文档导航</h1>
            <div class="router_web_list">
                <div class="router_web_li" v-for="(item,index) in router_web" :key="index" @click="clickPath(item)">
                    <!-- icon -->
                    <div class="icon">
                        <img :src="item.icon" alt="">
                    </div>
                    <!-- 标题 -->
                    <div class="title">{{ item.title }}</div>
                    <!-- 描述 -->
                    <div class="describe">
                        <p v-for="(item,index2) in item.describe.split(',')" :key="index2"> {{ item }}</p>
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
            router_web: [
                {
                    title: 'VueJs 2',
                    icon: require('../../../assets/document/logo.svg'),
                    describe: 'Vue2 开发文档, Vue2 渐进式 JavaScript 框架',
                    url: 'https://v2.cn.vuejs.org'
                },
                {
                    title: 'VueJs 3',
                    icon: require('../../../assets/document/logo.svg'),
                    describe: '渐进式 JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。',
                    url: 'https://cn.vuejs.org'
                },
                {
                    title: 'React Js',
                    icon: require('../../../assets/document/React.png'),
                    describe: '由Facebook开发的流行的JavaScript库，用于构建交互式、可复用的用户界面组件的库，旨在提高应用程序的性能和可维护性。',
                    url: 'https://react.dev'
                },
                {
                    title: 'Angular Js',
                    icon: require('../../../assets/document/Angular.svg'),
                    describe: '由Google开发的一个完整的前端开发框架，它提供了一整套工具和功能，用于简化Web应用程序的开发、测试和维护。',
                    url: 'https://angular.io/'
                },
                {
                    title: 'Uniapp',
                    icon: require('../../../assets/document/uniapp.png'),
                    describe: '使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序、快应用等多个平台。',
                    url: 'https://uniapp.dcloud.net.cn/'
                },

                {
                    title: 'Typescript',
                    icon: require('../../../assets/document/typescript.svg'),
                    describe: 'TypeScript具有类型系统，且是JavaScript的超集。 它可以编译成普通的JavaScript代码。 TypeScript支持任意浏览器、环境、系统并且是开源的。',
                    url: 'https://typescript.bootcss.com/'
                },

                {
                    title: 'Vite',
                    icon: require('../../../assets/document/vite.png'),
                    describe: '一个现代化的前端构建工具，旨在提供快速的开发和构建体验。它是由 Evan You（Vue.js的创始人）和 Vue.js 团队开发的。',
                    url: 'https://vitejs.dev/'
                },

                {
                    title: '微信公众平台',
                    icon: require('../../../assets/document/weixin.png'),
                    describe: '微信公众平台是运营者通过公众号为微信用户提供资讯和服务的平台',
                    url: 'https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html'

                },
                {
                    title: '微信支付',
                    icon: require('../../../assets/document/weixin.png'),
                    describe: '微信支付文档,开放技术能力，为商家提供全方位安全保障',
                    url: 'https://pay.weixin.qq.com/wiki/doc/api/index.html'

                },
                {
                    title: '微信小程序',
                    icon: require('../../../assets/document/weixin.png'),
                    describe: '微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/api/'
                },
                {
                    title: '支付宝',
                    icon: require('../../../assets/document/zfb.jpg'),
                    describe: '支付宝开放平台将强大的支付、营销、数据能力，通过接口等形式开放给自研商家与服务商',
                    url: 'https://open.alipay.com/'
                },

                {
                    title: '淘宝',
                    icon: require('../../../assets/document/tb.png'),
                    describe: '通过新的技术形式，帮助商家运营，更好的为消费者服务，提升消费者体验',
                    url: 'https://open.taobao.com/docCenter?spm=a219a.15212433.0.0.3277669avomTH2#/'
                },
                {
                    title: 'Element UI',
                    icon: require('../../../assets/document/element-ui.png'),
                    describe: 'Element UI，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
                    url: 'https://element.eleme.io/#/zh-CN'
                },
                {
                    title: 'Element PLUS',
                    icon: require('../../../assets/document/element-ui.png'),
                    describe: 'Element PLUS，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库',
                    url: 'https://element-plus.org/zh-CN/#/zh-CN'
                },
                {
                    title: 'Echarts',
                    icon: require('../../../assets/document/echarts.png'),
                    describe: 'Echarts，一个基于 JavaScript 的开源可视化图表库',
                    url: 'https://echarts.apache.org/zh/index.html'
                },
                {
                    title: 'Bootstrap.css',
                    icon: require('../../../assets/document/Bootstrap.jpg'),
                    describe: 'Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。',
                    url: 'https://v3.bootcss.com/'
                },
                {
                    title: 'Animate.css',
                    icon: require('../../../assets/document/Animate.css.png'),
                    describe: 'Animate.css 是一个流行的开源 CSS 动画库，它提供了一系列预定义的 CSS 动画效果，使开发者能够轻松地为网页元素添加动画效果。',
                    url: 'https://animate.style'
                },
                {
                    title: 'WangEditor',
                    icon: require('../../../assets/document/wangEditor.png'),
                    describe: 'WangEditor 是一个开源的 Web 富文本编辑器，开箱即用，配置简单。',
                    url: 'https://www.wangeditor.com'
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
        clickPath(item) {
            window.open(item.url, '_blank');
        },
        addToFavorites() {
            if (window.external && 'AddFavorite' in window.external) {
                window.external.AddFavorite(location.href, document.title);
            } else {
                alert("请使用浏览器的收藏功能 (Ctrl+D) 来添加此页面到收藏夹。");
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
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        .title {
            font-size: 100px;
            font-family: "Mooli";
            font-weight: 700;
        }
        .zb {
            font-size: 16px;
            color: #666666;
            line-height: 30px;
        }
        .Github {
            font-size: 16px;
            color: #3b73f0;
            line-height: 30px;
            font-weight: bold;
            margin-top: 50px;
        }
        .but {
            width: 100%;
            height: 80px;
            // background: #000;
            position: absolute;
            bottom: 20px;
            left: 0;
            padding: 0 20px;
            box-sizing: border-box;
            .button1 {
                border-radius: 24px;
                width: 120px;
                height: 48px;
                color: var(--fontColorTop, #1f1d2b);
                font-weight: 700;
                cursor: pointer;
                margin-right: 20px;
                border: 1px solid #ccc;
                background: #ffffff;
            }
            .button2 {
                background: #3b73f0;
                border-radius: 24px;
                width: 180px;
                height: 48px;
                color: #fff;
                font-weight: 700;
                cursor: pointer;
                margin-right: 20px;
                padding: 0 10px;
                transition: all 0.3s;
                border: none;
                font-size: 14px;
                font-family: Arial, sans-serif;
            }
        }
        img {
            position: absolute;
            width: 400px;
            right: 50px;
            top: 50px;
        }
    }
    .router_web {
        width: calc(100% - 100px);
        min-height: 100px;
        margin: auto;

        h1 {
            line-height: 100px;
        }
        .router_web_list {
            width: 100%;
            display: flex;
            flex-wrap: wrap; /* 启用自动换行 */
            justify-content: space-between; /* 子元素从左边开始排列 */
            // align-items: flex-start; /* 使每行内的子元素从左上角开始 */

            .router_web_li {
                width: 304px;
                height: 130px;
                margin: 10px;
                border-radius: 10px;
                box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
                cursor: pointer;
                transition: 0.4s;
                padding: 10px;
                box-sizing: border-box;
                .icon {
                    width: 50px;
                    height: 50px;
                    float: left;
                    img {
                        width: 100%;
                    }
                }
                .title {
                    min-width: 130px;
                    height: 50px;
                    float: left;
                    line-height: 50px;
                    font-size: 28px;
                    padding-left: 20px;
                    box-sizing: border-box;
                }
                .describe {
                    width: 280px;
                    height: 60px;
                    float: left;
                    color: #666666;
                    padding-left: 10px;
                    padding-top: 5px;
                    line-height: 20px;
                    box-sizing: border-box;
                    font-size: 12px;
                }
            }
            .router_web_li:hover {
                box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
                background: #ffffff;
            }
        }
    }
}
</style>