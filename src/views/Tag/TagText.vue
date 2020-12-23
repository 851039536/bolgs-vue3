<template>
  <div class="SnTagText1 animate__animated animate__fadeIn">
    <div class="flex SnTagText animate__animated animate__fadeIn">
      <div class="SnTagText-1">
        <div
          class="SnTagText-1-1"
          v-for="label in newinfo"
          :key="label.articleId"
        >
          <div class="SnTagText-1-1-1" @click="AsyGetTest(label.articleId)">
            <a>{{ label.title }}</a>
          </div>
          <div class="p-2 SnTagText-1-1-2">{{ label.time }}</div>
        </div>
      </div>

      <div class="SnTagText-2">
        <div class="blog" v-html="blog"></div>
      </div>
    </div>

    <div class="SnTagText2">
      <div class="flex flex-wrap tag-text">
        <div
          class="tag-text-1 w-2/16"
          v-for="labelss in labels"
          :key="labelss.labelId"
        >
          <a @click="GetlabelsID(labelss.labelId)" variant="light"
            >{{ labelss.labelName }}
          </a>
        </div>
      </div>
    </div>

    <div class="bruce flex-ct-x animate__animated animate__fadeIn">
      <div class="vertical-text">
        <!--                <h3></h3>-->
        <p>我见犹怜<br />爱不释手</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "highlight.js/styles/googlecode.css";
import hljs from "highlight.js"; //导入代码高亮文件
import marked from "marked"; //解析器
import {
  getCurrentInstance,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
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
          url: "/api/SnArticle/AsyGetTestString?LabelId=" + id,
        })
        .then((res: any) => {
          state.newinfo = res.data;
        })
        .catch((e: any) => {
          console.log(e + "获取数据失败");
        });
    };

    const AsyGetTest = async (id: any) => {
      proxy.$api
        .all([
          //查询标签
          proxy.$api.get("/api/SnArticle/AsyGetTestID?id=" + id),
          //查询分类
          proxy.$api.get("/api/SnLabels/GetLabels"),
        ])
        .then(
          proxy.$api.spread((res1: any, res2: any) => {
            state.labels = res2.data;
            state.blog = marked(res1.data.text);
          })
        )
        .catch((err: any) => {
          console.log(err);
        });
    };

    const GetlabelsID = async (id: any) => {
      AsyGetTag(id);
    };
    const highlighthandle = async () => {
      await hljs;
      let highlight = document.querySelectorAll("code,pre");
      highlight.forEach((block: any) => {
        hljs.highlightBlock(block);
      });
    };
    onMounted(async () => {
      await AsyGetTag(state.id);
      await AsyGetTest(1);
    });
    onUpdated(async () => {
      await highlighthandle();
    });

    return {
      ...toRefs(state),
      AsyGetTag,
      AsyGetTest,
      GetlabelsID,
      highlighthandle,
    };
  },
};
</script>

<style lang="scss">
  @import "../../assets/sass/com";
  .SnTagText1 {
    position: fixed;
    @include w-h(100%, 100%);
    .SnTagText {
      position: absolute;
      top: 21.5%;
      @include w-h(null, 75%);
      @include initialize(85%, 75%, null, null, 7.5%, null, #ffffff);

      // 侧边框
      .SnTagText-1 {
        @include w-h(32%, null);
        overflow: auto;
        .SnTagText-1-1 {
          @apply p-1 m-1 bg-gray-100 cursor-pointer shadow;
          /*background-color: #95999c;*/
          .SnTagText-1-1-1 {
            /*background-color: #795da3;*/
            @apply bg-gray-300 text-base p-1;
          }
          .SnTagText-1-1-2 {
            // background-color: #ffffff;
          }
        }
      }

      // 内容
      .SnTagText-2 {
        @include w-h(68%, null);
        @apply p-1  bg-gray-200;
        overflow: auto;
        /*background-color: #1e7e34;*/
        .blog {
          @include blogs;
        }
      }
    }

    // 按钮
    .SnTagText2 {
      position: absolute;
      top: 10%;
      @include initialize(85%, 11%, null, null, 7.5%, null, #ffffff);
      @apply rounded-sm;
      .tag-text {
        @include w-h(null, 100%);
        .tag-text-1 {
          @apply m-1 bg-gray-200 text-base font-thin shadow-sm  rounded-sm;
          a {
            margin: 0 10px 0 10px;
          }
        }
      }
    }

    .vertical-text {
      position: absolute;
      top: 12%;
      right: 10px;
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