<template>
    <div class='me'>
        <div class="me_box">

            <h2>个人中心</h2>

            <!-- 头像 信息 -->
            <div class="personalCenter">
                <!-- 左侧头像 -->
                <div class="avatar">
                    <!-- 展示 -->
                    <div class="showAvatar">
                        <img src="../../assets/images/avatar1.png" alt="">
                    </div>
                    <!-- 上传 -->
                    <el-upload list-type=".jpg" class="upload-demo" :action="$store.state.http" :show-file-list="false" :auto-upload="false" :on-change="handleChange" :file-list="fileList">
                        <div class="updateAvatar">
                            <i class="el-icon-upload2"></i>
                        </div>
                    </el-upload>
                </div>
                <!-- 信息 -->
                <div class="init">
                    <!-- 名称 -->
                    <div class="initName">
                        <span>赵鸿飞</span>
                        <span class="initNameEdit">
                            <i class="el-icon-edit"></i>
                        </span>
                    </div>
                    <!-- 签名 -->
                    <div class="signature">
                        生活，是一首奇妙的诗，需要我们以一颗善感的心去解读。在这诗中，我们或许会遇到一些曲折，又或者是平淡。但无论如何，积极向上的态度将会为我们的诗篇注入绚丽的色彩。

                        每当风雨降临，我们不要被困难吓倒。它们犹如暴风雨前的宁静，是在锻造我们内心坚强的力量。就像钢铁需要火炼一般，我们也需要经历挫折才能更加坚韧。失败并不可怕，反而是成功路上的一个重要伴侣。

                        积极面对生活不仅是勇敢面对挫折，也包括感恩生活中的点滴美好。在日复一日的生活中，不妨停下脚步，感受太阳的温暖，聆听风的吟唱，珍惜友情的陪伴。每个瞬间都值得我们怀抱感恩之心。

                        此外，分享快乐也是生活中一大幸事。快乐是一种传染，它能点亮他人的生活，温暖世界的每一个角落。当我们分享微笑、传递友善，当我们伸出援手，我们不仅让他人快乐，也将充实自己的内心。

                        最重要的是，要追随内心的声音，追逐梦想的脚步。不要因为外界的期望而忽视了自己的激情。无论你的梦想是怎样的，都要毫不犹豫地去追求。生活是一次神奇的冒险，而我们则是故事的创作者。

                        因此，让我们带着积极向上的心态，面对生活中的曲折，感恩每个瞬间，分享快乐，不忘梦想，创造自己独特的诗篇。这个世界就是一本精彩的书，而我们每一个人都是其中的主角，塑造着自己的传奇。
                    </div>
                    <!-- 标签 -->
                </div>
            </div>
            <!-- 其他 -->
            <div class="other">
                收藏
                相册
                分享
                设置
                更多
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
            base64: '',
            fileList: []
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

        // 上传图片
        handleChange(file, fileList) {
            let me = this;
            let reader = new FileReader();
            // 判断格式为 图片
            if (/image\/(jpeg|jpg|png|gif)/.test(file.raw.type)) {
                reader.readAsDataURL(file.raw);
                reader.onload = async function (e) {
                    // 压缩 base64 编码 至 指定大小
                    let rv = await me.resizeImageToSize(reader.result, 200)
                    console.log(rv)
                };
            } else {
                me.$message.error("暂仅支持 jpeg jpg png 格式图片!");
            }
        },


        // 压缩base64位编码 至指定大小  并返回压缩耗时
        async resizeImageToSize(base64Image, targetSizeKB) {
            const img = new Image();
            img.src = base64Image;

            return new Promise((resolve, reject) => {
                const startTime = Date.now();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const maxSizeBytes = targetSizeKB * 1024;

                    let quality = 0.7; // 初始 JPEG 质量
                    let dataURL = '';

                    do {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, 0, 0);

                        dataURL = canvas.toDataURL('image/jpeg', quality);

                        quality -= 0.02;
                    } while (dataURL.length > maxSizeBytes && quality > 0);

                    const endTime = Date.now();
                    const compressionTime = endTime - startTime; // 压缩耗时

                    resolve({ compressedImage: dataURL, compressionTime: compressionTime });
                };

                img.onerror = () => reject('无法加载图像');
            });
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
.me {
    width: 100%;
    height: 100%;
    .me_box {
        width: 1200px;
        height: 100%;
        margin: auto;
        padding: 0 20px;
        box-sizing: border-box;
        background: #ffffff;
        h2 {
            line-height: 100px;
        }

        .personalCenter {
            width: 100%;
            height: 250px;
            overflow: hidden;

            .avatar {
                width: 200px;
                height: 250px;
                float: left;
                position: relative;
                .showAvatar {
                    width: 150px;
                    height: 150px;
                    position: absolute;
                    left: 25px;
                    right: 25px;
                    top: 25px;
                    border-radius: 50%;
                    overflow: hidden;
                    z-index: 10;
                    background: #cccccc;
                    cursor: pointer;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .upload-demo {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    position: absolute;
                    left: 25px;
                    right: 25px;
                    top: 25px;
                }
                .updateAvatar {
                    width: 150px;
                    height: 150px;
                    position: absolute;
                    top: 0px;
                    border-radius: 50%;
                    overflow: hidden;
                    z-index: 100;
                    background: #00000063;
                    color: #ffffff;
                    font-size: 40px;
                    text-align: center;
                    line-height: 150px;
                    cursor: pointer;
                    transition: all 0.3s;
                    opacity: 0;
                }
                .updateAvatar:hover {
                    opacity: 1;
                }
            }
            .init {
                width: calc(100% - 200px);
                height: 100%;
                float: left;
                padding-left: 50px;
                padding-top: 20px;
                box-sizing: border-box;
                .initName {
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    font-size: 26px;
                    font-weight: bold;
                    .initNameEdit {
                        opacity: 0;
                        transition: all 0.3s;
                        cursor: pointer;
                        color: #909399;
                    }
                }
                .initName:hover {
                    .initNameEdit {
                        opacity: 1;
                    }
                }
                .signature {
                    width: 100%;
                    height: 80px;
                    line-height: 26px;
                    font-size: 12px;
                    margin-top: 20px;
                    // background: #ccc;
                    text-indent: 2em;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    font-family: "YouYuan";
                }
            }
        }
        .other {
            width: 100%;
            height: 500px;
            background: #cccccc;
        }
    }
}
</style>