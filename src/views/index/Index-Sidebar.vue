<template>
  <div class="sn-list" id="sn-list" :class="{ isFixed: barFixed }">
    <div class="sn-list-s">
      <div class="sn-list0 font-mono">
        <div class="sn-list0-img">
          <img class="sn-list0-img2" id="img1" :src="User.userPhoto" alt="" />
          <!--                    <el-image-->
          <!--                            class="sn-list0-img2"-->
          <!--                            :src="User.userPhoto"-->
          <!--                            :fit="scale-down"></el-image>-->
        </div>
        <div class="sn-list0-name">
          <h3 class="sn-list0-name1">{{ User.userNickname }}</h3>
        </div>

        <div class="sn-list0-tag">
          <div class="sn-list0-tag-1 flex">
            <div class="sn-list0-tag1">
              <div class="sn-list0-tag1-1-2">
                <a>{{ ArticleCount }}</a>
              </div>
              <div class="sn-list0-tag1-1-1">文章</div>
            </div>
            <div class="sn-list0-tag2">
              <div>
                <a>
                  {{ LabelsCount }}
                </a>
              </div>
              <div>标签</div>
            </div>
            <div class="sn-list0-tag3">
              <div>
                <a>
                  {{ SortCount }}
                </a>
              </div>
              <div>分类</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sn-list2">
        <div class="sn-list2-1 flex items-center">
          <div class="sn-list2-1-1 flex-1">
            <a
              href="tencent://message/?uin=851039536&Site=http://77ya.com/&Menu=yes"
            >
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ11"></use>
              </svg>
            </a>
          </div>
          <div class="sn-list2-1-1 flex-1">
            <a target="_blank" href="https://gitee.com/kaiouyang-sn">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github1"></use>
              </svg>
            </a>
          </div>
          <div class="sn-list2-1-1 flex-1">
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin3"></use>
              </svg>
            </a>
          </div>
          <div class="sn-list2-1-1 flex-1">
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhihu"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="sn-list7">
        <div
          class="sn-list7-1 m-1 p-1 text-sm font-semibold bg-gray-200 cursor-pointer"
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
            class="sn-list3-2-1 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
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
          class="sn-list5-1 m-1 p-1 text-sm font-semibold bg-gray-200 cursor-pointer"
        >
          分类
        </div>

        <div
          class="inline-flex cursor-pointer"
          v-for="Sorts in Sort"
          :key="Sorts.sortId"
        >
          <div
            class="flex-1 text-gray-700 text-xs text-center px-1 m-1 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
            @click="tagtest(Labeslss.labelId)"
          >
            {{ Sorts.sortName }}
          </div>
        </div>
      </div>
      <div class="sn-list6">
        <div class="sn-list6-1 m-1 p-1 text-sm font-semibold bg-gray-200">
          最新内容
        </div>

        <div
          class="sn-list6-2"
          v-for="articles in article"
          :key="articles.articleId"
        >
          <div class="sn-list6-2-1 p-1 m-1 text-sm">
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

      <div class="sn-list8">
        <div
          class="sn-list8-1 m-1 p-1 text-sm font-semibold bg-gray-200 cursor-pointer"
        >
          站点信息
        </div>
        <div class="sn-list8-2">
          <div class="sn-list8-2-1 flex">
            <div class="sn-list8-2-1-1">文章数量:</div>
            <div class="sn-list8-2-1-2">210篇</div>
          </div>
          <div class="sn-list8-2-1 flex">
            <div class="sn-list8-2-1-1">运行时间:</div>
            <div class="sn-list8-2-1-2">333天</div>
          </div>
          <div class="sn-list8-2-1 flex">
            <div class="sn-list8-2-1-1">总字数:</div>
            <div class="sn-list8-2-1-2">1111k字</div>
          </div>
          <div class="sn-list8-2-1 flex">
            <div class="sn-list8-2-1-1">访客数:</div>
            <div class="sn-list8-2-1-2">1111人</div>
          </div>
          <div class="sn-list8-2-1 flex">
            <div class="sn-list8-2-1-1">访问量:</div>
            <div class="sn-list8-2-1-2">12434次</div>
          </div>
          <div class="sn-list8-2-1 flex">
            <div class="sn-list8-2-1-1">最后更新:</div>
            <div class="sn-list8-2-1-2">2012-12-12</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// 无法挂载在vue
import ajax from 'axios';
ajax.defaults.baseURL = 'http://129.204.92.64:8081/',
  ajax.defaults.timeout = 12000;

export default {
  name: 'Index-Sidebar',
  components: {},
  data () {
    return {
      newinfo: [],
      Labels: [],
      Sort: [],
      article: [],
      //当前默认页
      barFixed: false,
      UserTalk: "",
      User: [],
      ArticleCount: 0,
      SortCount: 0,
      LabelsCount: 0,
      zhihu: []
    }
  },
  created () {
    this.AsyGetTest()

  },
  methods: {
    //加载文章
    async AsyGetTest () {
      ajax.all([
        //查询标签
        ajax.get('/api/SnLabels/GetLabels'),
        //查询分类
        ajax.get('/api/SnSort/GetSort'),
        //查询最新发布前十文章
        ajax.get('/api/SnArticle/GetfyTest?label=00&pageIndex=1&pageSize=10&isDesc=true'),
        // 查询当前用户的说说
        ajax.get('/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true'),
        //查询当前用户信息
        ajax.get('/api/SnUser/AsyGetUserId?UserId=4'),
        //查询文章总数
        ajax.get('/api/SnArticle/GetArticleCount'),
        //查询标签
        ajax.get('/api/SnSort/GetSortCount'),
        //查询分类
        ajax.get('/api/SnLabels/GetLabelsCount'),


      ]).then(ajax.spread((res1, res2, res3, res4, res5, res6, res7, res8) => {
        this.Labels = res1.data;
        this.Sort = res2.data;
        this.article = res3.data;
        this.UserTalk = res4.data;
        this.User = res5.data[0];
        this.ArticleCount = res6.data;
        this.SortCount = res7.data;
        this.LabelsCount = res8.data;

      })
      ).catch(err => {
        console.log(err)
      });


    },
    tagtest (tagid) {
      // .带参数跳转
      this.$router.push({
        path: '/SnTagText',
        query: {
          id: tagid
        }
      })
    },

    // 博客详情
    AsyGetTestID (id) {
      // .带参数跳转
      this.$router.push({
        path: '/Indextext',
        query: {
          id: id
        }
      })
    },


  }
}

</script>
<style lang="scss" scoped>
@import "../../assets/sass/com";
.sn-list {
  position: fixed;
  top: 9%;
  right: 0;
  height: 90%;
  width: 28%;
  font-size: 17px;
  color: #888888;
  // background-color: #4d4f91;
  @apply ml-3;
  .sn-list-s {
    /*background-color: #55a532;*/
    height: 100%;
    width: 100%;
    overflow: auto;

    .sn-list0 {
      height: 240px;
      width: 80%;
      margin: 0 auto;
      background-color: #ffffff;
      @apply mb-3;
      @include boxshow;

      .sn-list0-img {
        /*background-color: #55a532;*/
        height: 100px;
        width: 140px;
        margin: 15px auto 0 auto;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .sn-list0-img2 {
        height: 100%;
        width: 100%;
        margin: 0 auto;
        border-radius: 3%;
        transition: all 2s;
      }

      .sn-list0-img2:hover {
        transform: rotate(720deg);
      }

      .sn-list0-name {
        height: 30px;
        margin: 20px auto;
      }

      .sn-list0-name1 {
        text-align: center;
      }

      .sn-list0-tag {
        /*background-color: #9a6e3a;*/
        width: 100%;
        height: 100%;
        @apply cursor-pointer;

        .sn-list0-tag-1 {
          /*background-color: #4eb687;*/
          width: 150px;
          margin: 0 auto;

          .sn-list0-tag1 {
            /*background-color: #55a532;*/
            width: 34%;
            @apply text-sm;
            .sn-list0-tag1-1-1 {
              /*background-color: #dddddd;*/
              text-align: center;
            }

            .sn-list0-tag1-1-2 {
              /*background-color: #795da3;*/
              text-align: center;
            }
          }

          .sn-list0-tag2 {
            /*background-color: #0086b3;*/
            width: 33%;
            @apply text-sm;
            div {
              text-align: center;
            }
          }

          .sn-list0-tag3 {
            @apply text-sm;
            /*background-color: #8146b4;*/
            width: 33%;

            div {
              text-align: center;
            }
          }
        }
      }
    }

    .sn-list2 {
      height: 50px;
      width: 80%;
      margin: 0 auto;
      @apply mb-3;
      @include boxshow;

      .sn-list2-1 {
        /*background-color: #95999c;*/
        height: 100%;
        width: 60%;
        margin: 0 auto;

        .sn-list2-1-1 {
          /*background-color: #4eb687;*/
          @apply text-center py-2 m-1 cursor-pointer;
        }
      }
    }
    .sn-list4 {
      width: 80%;
      margin: 0 auto;
      background-color: #ffffff;
      text-align: center;
      @apply mb-3;
      @include boxshow3;
      //@include gradient-text;

      h4 {
        height: 2rem;
        color: #1b1e21;
        font-size: 15px;
        line-height: 2.5rem;
      }

      .sn-list4-1 {
        p {
          @apply text-sm  px-2 py-4 m-1 cursor-pointer;
        }
      }
    }

    .sn-list7 {
      width: 80%;
      margin: 0 auto;
      background-color: #ffffff;
      @apply p-1 mb-2 cursor-pointer;
      @include boxshow3;

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
      @include boxshow3;
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
      @include boxshow3;

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

      @include boxshow3;

      .sn-list5-1 {
        color: #1b1e21;
      }
    }

    .sn-list6 {
      width: 80%;
      margin: 0 auto;
      background-color: #ffffff;
      @apply p-1 mb-2 cursor-pointer;
      @include boxshow3;

      .sn-list6-1 {
        color: #1b1e21;
      }

      .sn-list6-2 {
        background-color: white;
        border-bottom: 1px dashed #f1f1f1;

        .sn-list6-2-1 {
        }
      }
    }
  }

  .sn-list-s::-webkit-scrollbar {
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