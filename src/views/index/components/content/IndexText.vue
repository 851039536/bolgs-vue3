<template>
  <!-- 通用组件 -->
  <blog-sidebar></blog-sidebar>
  <IndexSidebar></IndexSidebar>
  <a-back-top />
  <!-- end 通用组件 -->

  <div class="indextext">
    <!--标题-->
    <div class="indexText_title">
      <a-page-header :title="state.article_String.title" @back="() => $router.back()" />
    </div>
    <!-- end 标题 -->

    <!--内容-->
    <div class="indextest_text">
      <a-skeleton :loading="state.spinning" :paragraph="{ rows: 15 }" active />
      <div id="content" class="blog" v-html="state.blog"></div>
    </div>
    <!-- end 内容 -->

    <!--底部信息-->
    <div class="indextest_copyright">
      <div class="indextest_copyright_title">
        <!-- <div>版权属于：少年</div> -->
        <div>本文链接：原创文章转载请注明</div>
        <!-- <div>
          作品采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
          进行许可
        </div>-->
      </div>
      <div class="indextest_comment">
        <div class>
          <a @click="UpGive(state.article_String)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-qinggan
" />
            </svg>
            {{ state.article_String.give }}
          </a>
        </div>
        <div>
          <!-- <svg class="inline-block icon" aria-hidden="true">
            <use xlink:href="#icon-liulan" />
          </svg>-->
          {{ state.article_String.read }} ℃
        </div>

        <div class="indextest_comment_text">{{ state.Sort.sortName }}</div>
        <div class="indextest_comment_text">{{ state.Labels.labelName }}</div>
        <div class>{{ state.article_String.timeCreate }}</div>
      </div>
    </div>
  </div>
  <!-- end 底部信息 -->
</template>



<script lang="ts">
import markdown from "@/utils/markdown.js";
import { article, labels, sort } from '@/api/index';
import {
  reactive,
  onMounted,
  defineComponent,
} from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "IndexText",
  setup() {
    const route = useRoute();
    const router = useRouter();

    interface State {
      article_String: any,
      Labels: any,
      Sort: any,
      id: any,
      timebool: boolean,
      fullscreenLoading: boolean,
      blog: string,
      spinning: boolean,
    }
    const state: State = reactive({
      article_String: [],
      Labels: [],
      Sort: [],
      id: route.query.id,
      timebool: true,
      fullscreenLoading: false,
      blog: "",
      spinning: true,
    });

    // 加载内容
    const GetAll = async () => {

      await article.GetByIdAsync(state.id, true).then((res: any) => {
        state.article_String = res.data;
        GetByIdAsync(state.article_String.labelId);
        GetSortById(state.article_String.sortId);
        UpRead(state.article_String);
        const article = markdown.marked(state.article_String.text);
        article.then((response: any) => {
          state.blog = response.content;
        });
        state.spinning = false;
      })

    };
    const GetByIdAsync = (id: number) => {
      labels.GetByIdAsync(id).then((result: any) => {
        state.Labels = result.data;
      })
    }

    const GetSortById = (id: number) => {
      sort.GetByIdAsync(id).then((result: any) => {
        state.Sort = result.data;
      })
    }

    // 阅读数
    const UpRead = async (info: any) => {
      if (info == null) {
        return;
      } else {
        info.read++;
        await article.UpdatePortionAsync(info, "Read");
      }
    };
    // 点击数
    const UpGive = async (info: any) => {
      var timebools = state.timebool;
      if (info == null || timebools == false) {
        return;
      } else {
        info.give++;
        await article.UpdatePortionAsync(info, "Give")
          .then((res: any) => {
            if (res.status === 200) {
              state.timebool = false;
              var time = 10;
              var timer = setInterval(function () {
                time--;
                if (time == 0) {
                  state.timebool = true;
                  clearInterval(timer);
                }
              }, 1000);
            }
          })
      }
    };

    const backtop = () => {
      {
        var timer = setInterval(function () {
          let osTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          let ispeed = Math.floor(-osTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop =
            osTop + ispeed;
          if (osTop === 0) {
            clearInterval(timer);
          }
        }, 30);
      }
    };

    onMounted(async () => {
      await GetAll();
      await backtop();
    });
    return {
      state,
      UpGive,
    };
  },
});
</script>

<style lang="scss" >
@import "./index.scss";
</style>