<template>
  <div class="animate__animated animate__fadeIn">
    <blog-sidebar></blog-sidebar>
    <!--标题-->
    <div class="Talk-title">
      <a-page-header :title="newinfo.talkTitle" @back="() => houtui()" />
    </div>

    <!--内容-->
    <div class="editor">
      <a-skeleton :loading="spinning" :paragraph="{ rows: 15 }" active />
      <div class="Talkblog" v-html="blog"></div>
    </div>

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
          <a @click="UpGive(newinfo)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-qinggan
" />
            </svg>
            {{ newinfo.give }}
          </a>
        </div>
        <div>
          <svg class="inline-block icon" aria-hidden="true">
            <use xlink:href="#icon-liulan" />
          </svg>
          ({{ newinfo.read }})
        </div>

        <div>xxx</div>
        <div>xxx</div>
        <div>{{ newinfo.time }}</div>
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
      const { proxy }: any = getCurrentInstance();
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
  @import "./scss/TalkText.scss";
</style>