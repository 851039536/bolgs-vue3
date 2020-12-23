<template>
  <div class="animate__animated animate__fadeIn">
    <Sidebarsn></Sidebarsn>
    <!--标题-->
    <div class="Talk-title">
      <a-page-header :title="newinfo.talkTitle" @back="() => houtui()" />
      <!-- <a class="text-lg" @click="houtui">&lt;</a> -->
      <!-- <p class="text-lg text-center">
        {{ newinfo.talkTitle }}
      </p> -->
    </div>

    <!--内容-->
    <div class="editor">
      <a-skeleton :loading="spinning" :paragraph="{ rows: 15 }" active />
      <div class="Talkblog" v-html="newinfo.talkText"></div>
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
        <div class="">
          <a @click="UpGive(newinfo)">
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-qinggan
"
              ></use>
            </svg>
            {{ newinfo.give }}</a
          >
        </div>
        <div class="">
          <svg class="inline-block icon" aria-hidden="true">
            <use xlink:href="#icon-liulan"></use>
          </svg>
          ({{ newinfo.read }})
        </div>

        <div class="">xxx</div>
        <div class="">xxx</div>
        <div class="">{{ newinfo.time }}</div>
      </div>

      <TalkSidebar></TalkSidebar>
    </div>
    <!-- 回到顶部 -->
    <a-back-top />

    <!-- 加载框 -->
    <div class="lo">
      <!-- <a-switch v-model:checked="spinning" /> -->
    </div>
  </div>
</template>


<script lang="ts">
// 组件导入
import "highlight.js/styles/googlecode.css";
import hljs from "highlight.js"; //导入代码高亮文件
import marked from "marked"; //解析器
import TalkSidebar from "./TalkSidebar.vue";
import {
  getCurrentInstance,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
} from "vue";
import { useRoute, useRouter } from "vue-router";
// import { useRoute } from "vue-router";
export default {
  name: "TalkText",
  components: { TalkSidebar },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    //获取上下文实例，ctx=vue2的this
    const { proxy }: any = getCurrentInstance();
    // 加载路由
    const route = useRoute();
    const router = useRouter();
    // 数据定义
    const state: any = reactive({
      newinfo: [],
      id: route.query.id,
      article: [],
      timebool: true,
      fullscreenLoading: false,
      blog: "",
      spinning: true,
    });
    // 加载内容

    const AsyGetTest = (): void => {
      console.log(state.id);
      proxy.$api
        .all([
          // 读取详情页数据
          proxy.$api.get("/api/SnTalk/GetAllAsyncID?id=" + state.id),
        ])
        .then(
          proxy.$api.spread((res1: any) => {
            state.newinfo = res1.data[0];
            // UpRead(state.newinfo);
            state.blog = marked(state.newinfo.talkText);
            state.spinning = false;
            // alert(this.spinning);
          })
        )
        .catch((err: never) => {
          console.log(err);
        });
    };
    // 阅读数
    // const UpRead = (info: any): void => {
    //   if (info == null) {
    //     console.log(info);
    //     return;
    //   } else {
    //     info.read++;
    //     proxy
    //       .$api({
    //         // 更新
    //         url: "/api/SnArticle/AysUpArticle",
    //         method: "put",
    //         data: {
    //           articleId: info.articleId,
    //           userId: Number(info.userId),
    //           title: info.title,
    //           titleText: info.titleText,
    //           text: info.text,
    //           time: info.time,
    //           labelId: info.labelId,
    //           read: Number(info.read),
    //           give: Number(info.give),
    //           comment: info.comment,
    //           sortId: info.sortId,
    //           typeTitle: info.typeTitle,
    //           urlImg: info.urlImg,
    //         },
    //       })
    //       .then((res: any) => {
    //         if (res.status === 200) {
    //           // console.log("1");
    //         } else {
    //           alert("更新失败");
    //         }
    //       })
    //       .catch(console.error.bind(console)); // 异常
    //   }
    // };
    // 点击数
    // const UpGive = (info: any): void => {
    //   var timebools = state.timebool;
    //   if (info == null || timebools == false) {
    //     console.log(info, state.timebool);
    //     return;
    //   } else {
    //     info.give++;
    //     proxy
    //       .$api({
    //         // 更新
    //         url: "/api/SnArticle/AysUpArticle",
    //         method: "put",
    //         data: {
    //           articleId: info.articleId,
    //           userId: Number(info.userId),
    //           title: info.title,
    //           titleText: info.titleText,
    //           text: info.text,
    //           time: info.time,
    //           labelId: info.labelId,
    //           read: Number(info.read),
    //           give: Number(info.give),
    //           comment: info.comment,
    //           sortId: info.sortId,
    //           typeTitle: info.typeTitle,
    //           urlImg: info.urlImg,
    //         },
    //       })
    //       .then((res: any) => {
    //         if (res.status === 200) {
    //           state.timebool = false;
    //           var time = 10;
    //           var timer = setInterval(function () {
    //             time--;
    //             // console.log(time);
    //             if (time == 0) {
    //               state.timebool = true;
    //               // alert(this.timebool)
    //               clearInterval(timer);
    //             }
    //           }, 1000);
    //         } else {
    //           alert("更新失败");
    //         }
    //       })
    //       .catch(console.error.bind(console)); // 异常
    //   }
    // };
    // 博客详情
    const AsyGetTestID = (id: number): void => {
      // .带参数跳转
      router.push({
        path: "/Indextext2",
        query: {
          id: id,
        },
      });

      location.reload();
    };

    // 代码高亮
    const highlighthandle = async () => {
      await hljs;
      let highlight = document.querySelectorAll("code,pre");
      highlight.forEach((block: any) => {
        hljs.highlightBlock(block);
      });
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
      await AsyGetTest();
      await backtop();
    });
    onUpdated(async () => {
      await highlighthandle();
    });
    return {
      ...toRefs(state),
      AsyGetTest,
      highlighthandle,
      houtui,
      // UpRead,
      // UpGive,
      AsyGetTestID,
      backtop,
    };
  },
};
</script>

<style lang="scss">
  @import "../../assets/sass/com";
  .lo {
    position: fixed;
    top: 50%;
    width: 100%;
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
      div {
        /*background-color: #795da3;*/
        @apply text-center px-1 py-2 m-2 text-sm font-light;
      }
    }
  }

  .icons {
    @include w-h(1.5em, 1.5em);
  }

  /*编译器组件*/
  .editor {
    @include w-h($w, null);
    margin: 38px 0 0 $ml;
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
  .Talk-title {
    position: relative;
    @include initialize($w, 30px, 60px, null, $ml, null, #ffffff);
    @apply shadow rounded cursor-pointer;

    p {
      line-height: 30px;
      font-weight: 800;
    }

    a {
      position: absolute;
      @include excursion(1px, null, 8px, null);
    }
    .ant-page-header {
      @apply shadow rounded-sm;
    }
    .ant-page-header-back {
      @apply mt-1;
    }
  }

  .Talkblog {
    @include blogs;
  }
</style>