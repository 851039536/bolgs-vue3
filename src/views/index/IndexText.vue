<template>
  <div class="animate__animated animate__fadeIn">
    <Sidebarsn></Sidebarsn>
    <!--侧边栏-->
    <IndexSidebar></IndexSidebar>

    <!--标题-->
    <div class="IndexText-title">
      <a-page-header :title="article_String.title" @back="() => $router.back(-1)" />
    </div>
    <!-- ---------------------------- -->
    <!--内容-->
    <div class="IndexText-text">
      <a-skeleton :loading="spinning" :paragraph="{ rows: 15 }" active />
      <div id="content" class="blog" v-html="blog"></div>
    </div>
    <!-- -------------------------------------------- -->
    <!-- <Comment></Comment> -->
    <!--底部信息-->
    <div class="IndexText-copyright">
      <div class="IndexText-copyright-text">
        <!-- <div>版权属于：少年</div> -->
        <div>本文链接：原创文章转载请注明</div>
        <!-- <div>
          作品采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
          进行许可
        </div>-->
      </div>
      <div class="flex IndexText-comment">
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
          <!-- <svg class="inline-block icon" aria-hidden="true">
            <use xlink:href="#icon-liulan" />
          </svg>-->
          {{ article_String.read }} ℃
        </div>

        <div class="IndexText-comment-text">{{ Sort.sortName }}</div>
        <div class="IndexText-comment-text">{{ Labels.labelName }}</div>
        <div class>{{ article_String.time }}</div>
      </div>
    </div>
    <!-- ------------------------------------------------- -->
    <!-- 回到顶部 -->
    <a-back-top />

    <!-- <div class="IndexText-give">
      <div class="btn" @click="like(article_String)">点赞</div>
    </div>-->
  </div>
</template>

<script lang="ts">
  import markdown from "@/utils/markdown.js";
  import { article } from '../../api/article';
  import { labels } from '../../api/labels';
  import { sort } from '../../api/sort';
  import {
    reactive,
    toRefs,
    onMounted,
  } from "vue";
  import { useRoute, useRouter } from "vue-router";
  export default {
    name: "IndexText",
    components: {},
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
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
      const like = async (name: any) => {

        await UpGive(name);
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
          console.log(info);
          return;
        } else {
          // console.log(info.read);
          info.read++;
          // console.log(state.id + "-" + info.read);
          await article.UpdatePortionAsync(info, "Read");
        }
      };
      // 点击数
      const UpGive = async (info: any) => {
        var timebools = state.timebool;
        if (info == null || timebools == false) {
          // console.log(info, state.timebool);
          return;
        } else {
          info.give++;
          // console.log(info.give);
          await article.UpdatePortionAsync(info, "Give")
            .then((res: any) => {
              if (res.status === 200) {
                state.timebool = false;
                var time = 10;
                var timer = setInterval(function () {
                  time--;
                  // console.log(time);
                  if (time == 0) {
                    state.timebool = true;
                    // alert(this.timebool)
                    clearInterval(timer);
                  }
                }, 1000);
              }
            })
        }
      };
      // 博客详情
      const SkipText = (id: number): void => {
        // .带参数跳转
        router.push({
          path: "/IndexText",
          query: {
            id: id,
          },
        });
      };
      const houtui = async () => {
        router.go(-1);
      };
      const backtop = () => {
        {
          // utils.backtop();
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
        await GetAll();
        await backtop();
      });

      return {
        ...toRefs(state),
        GetAll,
        houtui,
        UpRead,
        UpGive,
        SkipText,
        backtop,
        like,
        GetByIdAsync,
        GetSortById
      };
    },
  };
</script>

<style lang="scss">
  @import "./scss/indexText.scss";
</style>