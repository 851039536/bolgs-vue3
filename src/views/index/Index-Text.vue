<template>
  <div class="sn-text animate__animated animate__fadeIn">
    <div class="sn-test-2"></div>
    <!--        加载article表内容-->
    <div
      class="sn-test-1 animate__animated animate__fadeIn transition duration-500 ease-in-out hover:bg-white transform hover:-translate-y-1 hover:scale-96"
      v-for="(info, index) in dataShow"
      :class="{ alt: index % 2 == 1 }"
      :key="info.articleId"
    >
      <div class="sn-text-1-1 flex">
        <div class="sn-text-1-1-1">
          <div
            class="sn-text-1-1-1-1"
            v-on:click="AsyGetTestID(info.articleId)"
          >
            <a>{{ info.title }}</a>
          </div>
          <div class="sn-text-1-1-1-2">{{ info.titleText }}</div>
        </div>
        <div class="sn-text-1-1-2">
          <!--                    <img :src="'http://oykperson.xyz/img/article/'+info.urlImg" align="right"/>-->
          <!--                    <img :src=info.urlImg align="right"/>-->
          <!--                    <img :src="../../../public/img/article/003.jpg" align="right"/>-->
        </div>
      </div>

      <!--发表用户-->
      <div class="sn-text-1-2 flex">
        <div>Junior@</div>
        <div>{{ info.time }}</div>
        <div>
          <a>
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-chat"></use>
            </svg>
            {{ info.comment }}</a
          >
        </div>
        <div @click="AsyGetTestID(info.articleId)">
          <a>
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-liulan"></use>
            </svg>
            {{ info.read }}</a
          >
        </div>
        <div>
          <svg class="inline-block icon" aria-hidden="true">
            <use
              xlink:href="#icon-dianzan2
"
            ></use>
          </svg>
          {{ info.give }}
        </div>
      </div>
    </div>

    <!--分页-->
    <div class="p-1 m-1">
      <!-- <el-pagination
        background
        :page-size="pagesize"
        @current-change="current_change"
        :page="page"
        layout="prev, pager, next, jumper ,->, total, slot"
        :total="this.count"
        :small="true"
      >
      </el-pagination> -->

      <div id="components-pagination-demo-mini">
        <a-pagination
          size="small"
          @change="current_change"
          :total="count"
          :pageSize="pagesize"
          show-size-changer
          show-quick-jumper
        />
      </div>
    </div>
  </div>
</template>


<script>


// 组件导入
export default {
  name: 'Index-Text',
  components: {},

  data () {
    return {
      pageSize: 7,// 每页显示的个数
      dataShow: [],// 当前显示的数据
      page: 1, //当前页码
      pagesize: 8, //每页的数据条数
      count: 0//默认数据总数
    }
  },

  created () {
    this.getCount();
    this.AsyGetTest()
  },
  setup () {

  },
  methods: {
    //加载文章
    async AsyGetTest () {

      this.$api({
        url: "/api/SnArticle/GetfyTest?label=00" +
          "&pageIndex=" +
          this.page +
          "&pageSize=" +
          this.pagesize +
          "&isDesc=true"
      }).then(res => {
        this.dataShow = res.data;

      }).catch((e) => {
        console.log(e + '获取数据失败');
      });
    },
    // 博客详情
    async AsyGetTestID (id) {
      // .带参数跳转
      this.$router.push({
        path: '/Indextext2',
        query: {
          id: id
        }
      })
    },
    getCount () {
      this.$api({
        url: '/api/SnArticle/GetArticleCount'
      }).then(res => {
        this.count = res.data;
      }).catch((e) => {
        console.log(e + '获取数据失败');
      });
    },
    current_change (val) {
      this.page = val;
      this.AsyGetTest();
      this.backtop(); //回到顶部
    },
    backtop () {
      {
        var timer = setInterval(function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop;
          let ispeed = Math.floor(-osTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
          this.isTop = true;
          if (osTop === 0) {
            clearInterval(timer);
          }
        }, 30)

      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/com";

.sn-text {
  width: 49%;
  background-color: #ffffff;
  margin-left: 23%;
  @include boxshow3;
  p {
    @apply mb-4 text-xs;
  }

  .sn-test-2 {
    height: 120px;
    @apply mb-2;
    background: no-repeat center/100% url("../../assets/img/bg.jpg");
    @include boxshow3;
  }
  .sn-test-1 {
    /*background-color: #6990f6;*/
    width: 100%;
    height: 130px;
    @apply mb-2;
    //@include boxshow3;

    .sn-text-1-1 {
      /*background-color: #63a35c;*/
      height: 78%;

      .sn-text-1-1-1 {
        height: 100%;
        /*background-color: red;*/
        width: 100%;

        .sn-text-1-1-1-1 {
          height: 35%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          // background-color: #4eb687;
          @apply px-3 pt-1 m-1 text-lg cursor-pointer font-semibold;
        }

        .sn-text-1-1-1-2 {
          color: #888888;
          height: 44%;
          // background-color: #9a6e3a;
          @apply px-3 m-1 mt-2 text-sm tracking-wide leading-relaxed;
          display: -webkit-box;
          word-break: break-all;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; //需要显示的行数
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .sn-text-1-1-2 {
        height: 100%;
        /*width: 28%;*/
        @apply p-1 cursor-default;
        /*background-color: #55ff00;*/
        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    .sn-text-1-2 {
      // background-color: #95999c;
      height: 25%;
      width: 100%;
      border-bottom: 1px solid #edeef0;
      //   background-color: #795da3;
      @apply pl-3;
      div {
        // background-color: #0086b3;

        height: 78%;
        @apply m-1;
      }
    }
  }

  .sn-text1 {
    background-color: #795da3;
    width: 100%;
    height: 132px;
    @apply mb-2 pt-3 pb-2 pl-3 bg-white cursor-default;
    @include boxshow3;

    h5 > a {
      @apply text-base;
      position: relative;
      text-decoration: none;
    }

    h5 > a::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #7f828f;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }

    h5 > a:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }

    p {
      /* 设置p标签内容不超过多少行 */
      @apply p-1;
      height: 44px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
    }

    img {
      height: 76%;
    }

    .sn-text2 {
      /*background-color: red;*/
      /* 边框下划线 */
      border-top: 1px solid #edeef0;
      height: 32px;

      p {
        display: inline-block;
        height: 22px;
      }
    }
  }
}
</style>
