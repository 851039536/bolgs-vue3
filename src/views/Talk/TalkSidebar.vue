<template>
  <div class="TalkSidebar" id="sn-list" :class="{ isFixed: barFixed }">
    <div class="TalkSidebar-text">
      <!--            <div class="font-mono sn-list0">-->
      <!--                <div class="sn-list0-img">-->
      <!--                    <img-->
      <!--                            class="sn-list0-img2"-->
      <!--                            id="img1"-->
      <!--                            :src=User.userPhoto-->
      <!--                            alt=""-->
      <!--                    />-->
      <!--                    &lt;!&ndash;                    <el-image&ndash;&gt;-->
      <!--                    &lt;!&ndash;                            class="sn-list0-img2"&ndash;&gt;-->
      <!--                    &lt;!&ndash;                            :src="User.userPhoto"&ndash;&gt;-->
      <!--                    &lt;!&ndash;                            :fit="scale-down"></el-image>&ndash;&gt;-->
      <!--                </div>-->
      <!--                <div class="sn-list0-name">-->
      <!--                    <h3 class="sn-list0-name1 ">{{User.userNickname}}</h3>-->
      <!--                </div>-->

      <!--                <div class="sn-list0-tag">-->
      <!--                    <div class="flex sn-list0-tag-1">-->
      <!--                        <div class="sn-list0-tag1 ">-->
      <!--                            <div class="sn-list0-tag1-1-2"><a>{{ArticleCount}}</a></div>-->
      <!--                            <div class="sn-list0-tag1-1-1">文章</div>-->
      <!--                        </div>-->
      <!--                        <div class="sn-list0-tag2 ">-->
      <!--                            <div><a>-->
      <!--                                {{LabelsCount}}-->
      <!--                            </a></div>-->
      <!--                            <div>标签</div>-->
      <!--                        </div>-->
      <!--                        <div class="sn-list0-tag3">-->
      <!--                            <div><a>-->
      <!--                                {{SortCount}}-->
      <!--                            </a></div>-->
      <!--                            <div>分类</div>-->
      <!--                        </div>-->
      <!--                    </div>-->
      <!--                </div>-->
      <!--            </div>-->

      <!--搜索框-->
      <div class="TalkSidebar-text-2">
        <div class="TalkSidebar-text-2-1">
          <!-- <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input> -->
        </div>
      </div>
      <!--qq 微信分享框-->
      <div class="TalkSidebar-text-1">
        <div class="flex items-center TalkSidebar-text-1-1">
          <div class="flex-1 TalkSidebar-text-1-2">
            <a
              href="tencent://message/?uin=851039536&Site=http://77ya.com/&Menu=yes"
            >
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ11"></use>
              </svg>
            </a>
          </div>
          <div class="flex-1 TalkSidebar-text-1-2">
            <a target="_blank" href="https://gitee.com/kaiouyang-sn">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github1"></use>
              </svg>
            </a>
          </div>
          <div class="flex-1 TalkSidebar-text-1-2">
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin3"></use>
              </svg>
            </a>
          </div>
          <div class="flex-1 TalkSidebar-text-1-2">
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhihu"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!--内容框-->
      <div class="TalkSidebar-text-4">
        <div
          class="p-1 m-1 text-sm font-semibold bg-gray-200 TalkSidebar-text-4-1"
        >
          推荐内容
        </div>

        <div
          class="TalkSidebar-text-4-2"
          v-for="articles in article"
          :key="articles.articleId"
        >
          <div class="p-1 m-1 text-sm TalkSidebar-text-4-2-1">
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-liulan
"
              ></use>
            </svg>
            <a @click="AsyGetTestID(articles.articleId)">{{
              articles.title
            }}</a>
          </div>
        </div>
      </div>

      <div class="sn-list7">
        <div
          class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list7-1"
        >
          公告
        </div>
        <div class="sn-list7-1">
          <p class="">专注c#,vue,并发编程,netCore,WinForm,CSS</p>
        </div>
      </div>
      <div class="sn-list4">
        <h4>最新动态</h4>
        <div class="sn-list4-1">
          <p class="">{{ UserTalk }}</p>
        </div>
      </div>

      <div class="sn-list3">
        <div class="sn-list3-1">标签</div>

        <div
          class="sn-list3-2"
          v-for="Labeslss in Labels"
          :key="Labeslss.labelId"
        >
          <div
            class="transition duration-500 ease-in-out transform sn-list3-2-1 hover: hover:scale-110 hover:text-red-600"
            @click="tagtest(Labeslss.labelId)"
          >
            <svg class="inline-block icon" aria-hidden="true">
              <use :xlink:href="Labeslss.labelAlias"></use>
            </svg>
            <a>{{ Labeslss.labelName }}</a>
          </div>
        </div>
      </div>
      <div class="sn-list5">
        <div
          class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list5-1"
        >
          分类
        </div>

        <div
          class="inline-flex cursor-pointer"
          v-for="Sorts in Sort"
          :key="Sorts.sortId"
        >
          <div
            class="flex-1 px-1 m-1 text-xs text-center text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
            @click="tagtest(Labeslss.labelId)"
          >
            {{ Sorts.sortName }}
          </div>
        </div>
      </div>

      <div class="sn-list8">
        <div
          class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list8-1"
        >
          站点信息
        </div>
        <div class="sn-list8-2">
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">文章数量:</div>
            <div class="sn-list8-2-1-2">210篇</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">运行时间:</div>
            <div class="sn-list8-2-1-2">333天</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">总字数:</div>
            <div class="sn-list8-2-1-2">1111k字</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">访客数:</div>
            <div class="sn-list8-2-1-2">1111人</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">访问量:</div>
            <div class="sn-list8-2-1-2">12434次</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">最后更新:</div>
            <div class="sn-list8-2-1-2">2012-12-12</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'TalkSidebar',
  components: {},
  //   data () {
  //     return {
  //       newinfo: [],
  //       Labels: [],
  //       Sort: [],
  //       article: [],
  //       //当前默认页
  //       barFixed: false,
  //       UserTalk: "",
  //       User: [],
  //       ArticleCount: 0,
  //       SortCount: 0,
  //       LabelsCount: 0,
  //       zhihu: [],
  //       data: new Date()
  //     }
  //   },
  //   created () {
  //     this.AsyGetTest()

  //   },
  //   methods: {
  //     //加载文章
  //     async AsyGetTest () {
  //       this.$api.all([
  //         //查询标签
  //         this.$api.get('/api/SnLabels/GetLabels'),
  //         //查询分类
  //         this.$api.get('/api/SnSort/GetSort'),
  //         //查询最新发布前十文章
  //         this.$api.get('/api/SnArticle/GetfyTest?label=00&pageIndex=1&pageSize=10&isDesc=true'),
  //         // 查询当前用户的说说
  //         this.$api.get('/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true'),
  //         //查询当前用户信息
  //         this.$api.get('/api/SnUser/AsyGetUserId?UserId=4'),
  //         //查询文章总数
  //         this.$api.get('/api/SnArticle/GetArticleCount'),
  //         //查询标签
  //         this.$api.get('/api/SnSort/GetSortCount'),
  //         //查询分类
  //         this.$api.get('/api/SnLabels/GetLabelsCount'),


  //       ]).then(this.$api.spread((res1, res2, res3, res4, res5, res6, res7, res8) => {
  //         this.Labels = res1.data;
  //         this.Sort = res2.data;
  //         this.article = res3.data;
  //         this.UserTalk = res4.data;
  //         this.User = res5.data[0];
  //         this.ArticleCount = res6.data;
  //         this.SortCount = res7.data;
  //         this.LabelsCount = res8.data;

  //       })
  //       ).catch(err => {
  //         console.log(err)
  //       });


  //     },
  //     tagtest (tagid) {
  //       // .带参数跳转
  //       this.$router.push({
  //         path: '/SnTagText',
  //         query: {
  //           id: tagid
  //         }
  //       })
  //     },

  //     // 博客详情
  //     AsyGetTestID (id) {
  //       // .带参数跳转
  //       this.$router.push({
  //         path: '/Indextext',
  //         query: {
  //           id: id
  //         }
  //       })

  //     },


  //   }
}

</script>
<style lang="scss" scoped>
  @import "../../assets/sass/com";
  .TalkSidebar {
    position: fixed;
    @include excursion(9%, null, null, 0);
    @include w-h(28%, 90%);
    font-size: 17px;
    color: #888888;
    /*background-color: #4d4f91;*/
    @apply ml-3;
    .TalkSidebar-text {
      /*background-color: #55a532;*/
      @include w-h(100%, 100%);
      overflow: auto;

      .TalkSidebar-text-1 {
        height: 50px;
        width: 80%;
        margin: 0 auto;
        @apply mb-3;
        @apply shadow rounded;
        .TalkSidebar-text-1-1 {
          /*background-color: #95999c;*/
          @include w-h(60%, 100%);
          margin: 0 auto;

          .TalkSidebar-text-1-2 {
            /*background-color: #4eb687;*/
            @apply text-center py-2 m-1 cursor-pointer;
          }
        }
      }

      .TalkSidebar-text-2 {
        width: 80%;
        margin: 0 auto;
        @apply mb-3;
        @apply shadow rounded;
        .TalkSidebar-text-2-1 {
        }
      }

      .TalkSidebar-text-3 {
        width: 80%;
        margin: 0 auto;
        @apply mb-3;
        @apply shadow rounded;
        #calendar {
          height: 200px;
        }
      }
      .el-calendar-table .el-calendar-day {
        height: 44px !important;
      }
      .sn-list4 {
        width: 80%;
        margin: 0 auto;
        background-color: #ffffff;
        text-align: center;
        @apply mb-3;
        @apply shadow rounded;
        //@include gradient-text;

        h4 {
          height: 2rem;
          color: #1b1e21;
          font-size: 15px;
          line-height: 2.5rem;
        }

        .sn-list4-1 {
          p {
            @apply text-sm px-2 py-4 m-1 cursor-pointer;
          }
        }
      }

      .sn-list7 {
        width: 80%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2 cursor-pointer;
        @apply shadow rounded;

        //@include gradient-text;

        .sn-list7-1 {
          color: #1b1e21;
          p {
            @apply text-sm px-2 py-2 cursor-pointer;
          }
        }
      }

      .sn-list8 {
        width: 80%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2 cursor-pointer;
        @apply shadow rounded;
        .sn-list8-1 {
          color: #1b1e21;
        }
        .sn-list8-2 {
          @apply text-sm m-2;
          .sn-list8-2-1 {
            /*background-color: #6990f6;*/
            .sn-list8-2-1-1 {
              /*background-color: #dddddd;*/
              @apply p-1;
              width: 35%;
            }
            .sn-list8-2-1-2 {
              width: 40%;
              @apply p-1;
              /*background-color: #55a532;*/
            }
          }
        }
      }

      .sn-list3 {
        width: 80%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2 cursor-pointer;
        @apply shadow rounded;

        .sn-list3-1 {
          @apply m-1 p-1 text-sm font-semibold bg-gray-200;
          color: #1b1e21;
        }

        .sn-list3-2 {
          @apply inline-flex;

          .sn-list3-2-1 {
            @apply flex-1;
            @apply text-gray-700 text-xs text-center px-1 m-1;
          }
        }
      }

      .sn-list5 {
        width: 80%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2;

        @apply shadow rounded;

        .sn-list5-1 {
          color: #1b1e21;
        }
      }

      .TalkSidebar-text-4 {
        width: 80%;
        margin: 0 auto;
        background-color: #ffffff;
        @apply p-1 mb-2 cursor-pointer;
        @apply shadow rounded;

        .TalkSidebar-text-4-1 {
          color: #1b1e21;
        }

        .TalkSidebar-text-4-2 {
          background-color: white;
          border-bottom: 1px dashed #f1f1f1;
        }
      }
    }

    .TalkSidebar-text::-webkit-scrollbar {
      display: none;
    }
  }

  .isFixed {
    position: fixed;
    top: 0;
    right: 7%;
    z-index: 999;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.1em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
