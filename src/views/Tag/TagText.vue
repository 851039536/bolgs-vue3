<template>
  <div :class="[SnTagText,activeClass, fadeIn]">
    <div class="flex text">
      <div class="text-sidebar animate__animated" :class="[backInDown]">
        <div class="text-sidebar-forms" v-for="label in newinfo" :key="label.articleId">
          <div class="forms-1" @click="getAll1(label.articleId)">
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
  import { article } from '../../api/article';
  import { labels } from '../../api/labels';
  // import $ from '../assets/js/jquery.js';//非必要
  import {

    reactive,
    toRefs,
    onMounted,
  } from "vue";
  import { useRoute } from "vue-router";
  export default {
    name: "TagText",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      // 加载路由
      const route = useRoute();
      const state = reactive({
        newinfo: [],
        newtext: [],
        labels: [],
        id: route.query.id,
        blog: "",
        // -----------------------------------------
        activeClass: "animate__animated",
        errorClass: "animate__fadeInRightBig",
        bounceIn: "animate__bounceIn",
        backInDown: "animate__backInDown",
        fadeInTopRight: "animate__fadeInTopRight",
        fadeIn: "animate__fadeIn",
        SnTagText: "SnTagText"
      });

      async function AsyGetTag(id: any): Promise<void> {
        if (id == null) {
          id = 1;
        }
        await article.GetTagtextAsync(id, true).then((result: any) => {
          state.newinfo = result.data;

        });
      }

      async function getAll1(id: any): Promise<void> {

        await article.GetByIdAsync(id, true).then((res: any) => {
          const result = markdown.marked(res.data.text);
          result.then((response: any) => {
            state.blog = response.content;
          });
        });

      }
      async function getAll(): Promise<void> {

        // await article.GetByIdAsync(id, true).then((res: any) => {
        //   const result = markdown.marked(res.data.text);
        //   result.then((response: any) => {
        //     state.blog = response.content;
        //   });
        // });
        await labels.GetAllAsync().then((result: any) => {
          state.labels = result.data;
        });
      }

      async function GetlabelsID(id: any): Promise<void> {
        AsyGetTag(id);
      }
      onMounted(async () => {
        await AsyGetTag(state.id);
        await getAll();
      });

      return {
        ...toRefs(state),
        AsyGetTag,
        getAll,
        getAll1,
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