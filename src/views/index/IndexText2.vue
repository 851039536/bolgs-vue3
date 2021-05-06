<template>
  <div class="animate__animated animate__fadeIn">
    <Sidebarsn></Sidebarsn>
    <!--侧边栏-->
    <IndexSidebar></IndexSidebar>

    <!--标题-->
    <div class="article-title">
      <a-page-header :title="article_String.title" @back="() => $router.push('/indexs')" />
    </div>
    <!--内容-->
    <div class="editor-text">
      <a-skeleton :loading="spinning" :paragraph="{ rows: 15 }" active />
      <div id="content" class="blog" v-html="blog"></div>
    </div>

    <!-- <Comment></Comment> -->
    <!--底部信息-->
    <div class="article-3">
      <div class="article-3-1">
        <div>版权属于：少年</div>
        <div>本文链接：原创文章转载请注明</div>
        <div>
          作品采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
          进行许可
        </div>
      </div>
      <div class="flex article-3-2">
        <div class>
          <a @click="UpGive(article_String)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-qinggan
" />
            </svg>
            {{ article_String.give }}
          </a>
        </div>
        <div class>
          <svg class="inline-block icon" aria-hidden="true">
            <use xlink:href="#icon-liulan" />
          </svg>
          ({{ article_String.read }})
        </div>

        <div class="article_type">{{ Sort.sortName }}</div>
        <div class="article_type">{{ Labels.labelName }}</div>
        <div class>{{ article_String.time }}</div>
      </div>
    </div>

    <!-- 回到顶部 -->
    <a-back-top />

    <!-- 加载框 -->
    <div class="lo">
      <!-- <a-switch v-model:checked="spinning" /> -->
    </div>
    <div class="give">
      <div class="btn" @click="like()">点赞</div>
    </div>
  </div>
</template>


<script lang="ts">
  // 组件导入
  // import "highlight.js/styles/googlecode.css";
  // import hljs from "highlight.js"; //导入代码高亮文件
  // import marked from "marked"; //解析器
  import markdown from "@/utils/markdown.js";
  import {
    getCurrentInstance,
    reactive,
    toRefs,
    onMounted,
    onUpdated,
  } from "vue";
  import { useRoute, useRouter } from "vue-router";
  export default {
    name: "IndexText2",
    components: {},
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const { proxy }: any = getCurrentInstance();
      const route = useRoute();
      const router = useRouter();
      const state: any = reactive({
        article_String: [],
        Labels: [],
        Sort: [],
        id: route.query.id,
        timebool: true,
        fullscreenLoading: false,
        blog: "",
        spinning: true,
      });
      let count = 0;
      const like = () => {
        const likeDom = document.createElement("div");
        count++;
        likeDom.className = count % 2 === 0 ? "like" : "like like--is-second";
        likeDom.style.willChange = "margin-top";
        document.body.appendChild(likeDom);
        setTimeout(() => {
          document.body.removeChild(likeDom);
        }, 3900);
      }

      // 加载内容
      const GetTest = (): void => {

        proxy.$api
          .all([
            // 读取详情页数据
            proxy.$api.get("/api/SnArticle/AsyGetTestID?id=" + state.id),

          ])
          .then(
            proxy.$api.spread((res1: any) => {
              state.article_String = res1.data;
              GetLabelsById(state.article_String.label_id);
              GetSortById(state.article_String.sort_id);
              UpRead(state.article_String);
              // state.blog = marked(state.article_String.text);

              // -----------------------------------------------------------------
              // 使用 marked 转换
              const article = markdown.marked(state.article_String.text);
              article.then((response: any) => {
                state.blog = response.content;

              });
              state.spinning = false;
            })
          )
          .catch((err: never) => {
            console.log(err);
          });
      };
      const GetLabelsById = (id: number) => {
        proxy
          .$api({
            url: "/api/SnLabels/GetByIdAsync?id=" + id,
          })
          .then((res: any) => {
            state.Labels = res.data;
          })
          .catch((e: any) => {
            console.log(e + "获取数据失败");
          });

      }
      const GetSortById = (id: number) => {
        proxy
          .$api({
            url: "/api/SnSort/GetByIdAsync?sortId=" + id,
          })
          .then((res: any) => {
            state.Sort = res.data;
          })
          .catch((e: any) => {
            console.log(e + "获取数据失败");
          });

      }
      // 阅读数
      const UpRead = (info: any): void => {
        if (info == null) {
          console.log(info);
          return;
        } else {
          console.log(info.read);
          info.read++;
          console.log(state.id + "-" + info.read);
          proxy
            .$api({
              // 更新
              url: "/api/SnArticle/UpdatePortionAsync?type=read",
              method: "put",
              data: {
                article_id: info.article_id,
                user_id: Number(info.user_id),
                title: "string",
                title_text: "string",
                text: "string",
                time: info.time,
                label_id: 0,
                read: Number(info.read),
                give: 0,
                comment: "0",
                sort_id: 0,
                type_title: "string",
                url_img: "string",
              },
            })
            .then((res: any) => {
              if (res.status === 200) {
                // console.log("1");
              } else {
                alert("更新失败");
              }
            })
            .catch(console.error.bind(console)); // 异常
        }
      };
      // 点击数
      const UpGive = (info: any): void => {
        var timebools = state.timebool;
        if (info == null || timebools == false) {
          // console.log(info, state.timebool);
          return;
        } else {
          info.give++;
          console.log(info.give);
          proxy
            .$api({
              // 更新
              url: "/api/SnArticle/UpdatePortionAsync?type=give",
              method: "put",
              data: {
                article_id: info.article_id,
                user_id: Number(info.user_id),
                title: "string",
                title_text: "string",
                text: "string",
                time: info.time,
                label_id: 0,
                read: 0,
                give: Number(info.give),
                comment: "0",
                sort_id: 0,
                type_title: "string",
                url_img: "string",
              },
            })
            .then((res: any) => {
              if (res.status === 200) {
                state.timebool = false;
                var time = 10;
                var timer = setInterval(function () {
                  time--;
                  //console.log(time);
                  if (time == 0) {
                    state.timebool = true;
                    // alert(this.timebool)
                    clearInterval(timer);
                  }
                }, 1000);
              } else {
                alert("更新失败");
              }
            })
            .catch(console.error.bind(console)); // 异常
        }
      };
      // 博客详情
      const AsyGetTestID = (id: number): void => {
        // .带参数跳转
        router.push({
          path: "/Indextext2",
          query: {
            id: id,
          },
        });
        // location.reload();
      };

      // 代码高亮
      const highlighthandle = async () => {
        // await hljs;
        // let highlight = document.querySelectorAll("pre");
        // highlight.forEach((block: any) => {
        //   hljs.highlightBlock(block);
        // });
      };
      const houtui = async () => {
        router.go(-1);
      };

      const backtop = async () => {
        {
          var timer = setInterval(function () {
            let osTop =
              document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop =
              osTop + ispeed;
            // this.isTop = true;
            if (osTop === 0) {
              clearInterval(timer);
            }
          }, 30);
        }
      };

      onMounted(async () => {
        await GetTest();
        await backtop();
        like();
      });
      onUpdated(async () => {
        await highlighthandle();
      });
      return {
        ...toRefs(state),
        GetTest,
        highlighthandle,
        houtui,
        UpRead,
        UpGive,
        AsyGetTestID,
        backtop,
        like,
        GetLabelsById,
        GetSortById
      };
    },
  };
</script>

<style lang="scss">
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";

  .lo {
    position: fixed;
    top: 50%;
    width: 100%;
  }
  .color {
    color: #42b983;
  }
  /* 规定动画，改变y轴偏移距离*/
  @keyframes animation-y {
    0% {
      transform: translate(-50%, 100px) scale(0);
    }
    50% {
      transform: translate(-50%, -100px) scale(1.5);
    }
    100% {
      transform: translate(-50%, -300px) scale(1.5);
    }
  }
  /* 规定动画，改变x轴偏移距离 */
  @keyframes animation-x {
    0% {
      margin-left: 0px;
    }
    25% {
      margin-left: 25px;
    }
    75% {
      margin-left: -25px;
    }
    100% {
      margin-left: 0px;
    }
  }
  .like {
    position: fixed;
    left: 90%;
    bottom: 35%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
    pointer-events: none;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(https://img14.360buyimg.com/ling/jfs/t1/134959/40/26/8929/5ec79d68E968b0377/aa4feff2b7bcf231.png);
    animation: animation-x 3s 0s linear infinite, animation-y 4s 0s linear 1;
  }
  .like--is-second {
    background-image: url(https://img14.360buyimg.com/ling/jfs/t1/134906/37/26/9080/5ec79d5dE90e5f972/bc39e647c61c8bab.png);
    animation: animation-x 3s -2s linear infinite, animation-y 4s 0s linear 1;
  }
  .btn {
    position: fixed;
    left: 90%;
    top: 90%;
    transform: translate(-50%, -50%);
    top: 80%;
    user-select: none;
    width: 50px;
    line-height: 50px;
    background: rgb(255, 0, 179);
    color: #fff;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 10px #999;
    cursor: pointer;
  }
  .btn:hover {
    opacity: 0.8;
  }
  .btn:active {
    opacity: 1;
  }

  /*底部*/
  .article-3 {
    @include initialize($w, null, 1px, null, $ml, null, null);
    @apply shadow rounded;
    @apply cursor-pointer bg-white text-black;
    .article-3-1 {
      /*background-color: #55ff00;*/
      @apply p-1;
      div {
        border-bottom: 1px dashed #f1f1f1;
        /*background-color: #4eb687;*/
        @apply p-1 m-1 text-sm font-light;
      }
    }

    .article-3-2 {
      .article_type {
        @apply bg-blue-400 shadow  rounded-sm;
      }
      div {
        /*background-color: #795da3;*/
        @apply text-center px-1 py-1 m-2 text-sm font-light;
      }
    }
  }

  .icons {
    @include w-h(1.5em, 1.5em);
  }

  /*编译器组件*/
  .editor-text {
    @include w-h($w, null);
    margin: 28px 0 0 $ml;
  }

  /*左侧边栏*/
  .article-text {
    position: fixed;
    @include excursion(61px, null, 1%, null);
    @include w-h(17%, bull);
    @apply shadow rounded-sm;
    @apply font-sans bg-white;

    .article-text-1 {
      @apply font-semibold bg-gray-200 cursor-pointer;
    }

    .article-text-2 {
      // background-color: #9a6e3a;
      @apply m-1 cursor-pointer;

      div {
        /*background-color: #55a532;*/
        @apply m-1 p-1 px-3 text-base;
        border-bottom: 1px dashed #f1f1f1;
      }
    }
  }

  /*返回上一页*/
  .article-title {
    position: relative;
    @include initialize($w, 40px, $Text_height, null, $ml, null, #ffffff);
    @apply shadow rounded cursor-pointer;
    .ant-page-header-heading-title {
      @apply text-lg;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ant-page-header {
      @apply shadow-sm rounded-sm;

      // background: #cc9494;
    }
    .ant-page-header-back {
      // background: #f1f1f1;
      @apply mt-0;
    }
  }

  .blog {
    @include blogs;
  }

  @screen xp {
    .article-title {
      width: 100%;
      @apply ml-0;
    }
    .editor-text {
      width: 100%;
      @apply ml-0 mt-7;
    }
    .article-3 {
      width: 100% !important;
      @apply ml-0 #{!important};
    }
  }
</style>