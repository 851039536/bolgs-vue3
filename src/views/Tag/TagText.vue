<template>
  <div class="SnTagText animate__animated animate__fadeIn">
    <div class="flex text">
      <div class="text-sidebar">
        <div class="text-sidebar-forms" v-for="label in newinfo" :key="label.article_id">
          <div class="forms-1" @click="AsyGetTest(label.article_id)">
            <a>{{ label.title }}</a>
          </div>
          <div class="forms-2">{{ label.time }}</div>
        </div>
      </div>

      <div class="text-blog">
        <div class="blog" v-html="blog"></div>
      </div>
    </div>

    <div class="SnTagText-top">
      <div class="flex flex-wrap tag-text">
        <div class="tag-text-1 w-2/16" v-for="labelss in labels" :key="labelss.labelId">
          <a @click="GetlabelsID(labelss.labelId)" variant="light">{{ labelss.labelName }}</a>
        </div>
      </div>
    </div>

    <div class="bruce flex-ct-x animate__animated animate__fadeIn">
      <div class="vertical-text">
        <!--                <h3></h3>-->
        <p>
          我见犹怜
          <br />爱不释手
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import markdown from "@/utils/markdown.js";
  import {
    getCurrentInstance,
    reactive,
    toRefs,
    onMounted,
  } from "vue";
  import { useRoute } from "vue-router";
  export default {
    name: "TagText",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
      // 加载路由
      const route = useRoute();
      const state = reactive({
        newinfo: [],
        newtext: [],
        labels: [],
        // 获取index主页传过来的id值
        id: route.query.id,
        blog: "",
      });

      const AsyGetTag = async (id: any) => {
        if (id == null) {
          id = 1;
        }
        proxy
          .$api({
            url: "/api/SnArticle/GetTagtextAsync?labelId=" + id + "&isDesc=true",
          })
          .then((res: any) => {
            state.newinfo = res.data;
          })

      };

      const AsyGetTest = async (id: any) => {
        proxy.$api
          .all([
            //查询标签
            proxy.$api.get("/api/SnArticle/AsyGetTestID?id=" + id),
            //查询分类
            proxy.$api.get("/api/SnLabels/GetAllAsync"),
          ])
          .then(
            proxy.$api.spread((res1: any, res2: any) => {
              const article = markdown.marked(res1.data.text);
              article.then((response: any) => {
                state.blog = response.content;
              });
              state.labels = res2.data;
            })
          )

      };

      const GetlabelsID = async (id: any) => {
        AsyGetTag(id);
      };

      onMounted(async () => {

        await AsyGetTag(state.id);
        await AsyGetTest(1);
      });


      return {
        ...toRefs(state),
        AsyGetTag,
        AsyGetTest,
        GetlabelsID,
      };
    },
  };
</script>

<style lang="scss">
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  .SnTagText {
    position: fixed;
    @include w-h(100%, 100%);
    .text {
      position: absolute;
      top: 22.1%;
      @include initialize(94%, 75%, null, null, 3%, null, #ffffff);
      // 侧边框
      .text-sidebar {
        @include w-h(32%, null);
        overflow: auto;
        .text-sidebar-forms {
          @apply p-1 m-1 bg-gray-100 cursor-pointer shadow;
          .forms-1 {
            @apply bg-gray-300 text-base p-1;
          }
          .forms-2 {
            @apply p-2;
          }
        }
      }

      // 内容
      .text-blog {
        @include w-h(68%, null);
        @apply px-1 bg-gray-100;
        overflow: auto;
        .blog {
          @include blogs;
        }
      }
    }

    // 头部
    .SnTagText-top {
      position: absolute;
      top: $Text_height;
      @include initialize(94%, 11%, null, null, 3%, null, #ffffff);
      @apply rounded-sm;
      .tag-text {
        @include w-h(null, 100%);
        .tag-text-1 {
          @apply m-1 bg-gray-200 text-base font-thin shadow-sm  rounded-sm;
          a {
            @apply p-2;
          }
        }
      }
    }

    .vertical-text {
      position: absolute;
      top: 12%;
      right: 0px;
      border-radius: 2px;
      writing-mode: vertical-rl;
      h3 {
        padding-left: 20px;
        font-weight: bold;
        font-size: 18px;
        color: #f66;
      }

      p {
        line-height: 30px;
        color: #66f;
      }
    }
  }
</style>