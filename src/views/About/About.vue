<template>
  <div class="abouts">
    <div class="about gradient-bg animate__animated animate__fadeIn">
      <sncode></sncode>

      <div class="bg">
        <div class="about-1" v-bind:class="[activeClass, backInDown]">
          <div class="about-1-1">
            <div class="about-1-1-1">
              <img :src="User.userPhoto" alt="" />
            </div>
          </div>
          <div class="about-1-2">
            <a>{{ User.userBrief }}</a>
          </div>
          <div class="about-1-3 flex items-center">
            <div class="about-1-3-1 flex-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ11"></use>
              </svg>
            </div>
            <div class="about-1-3-1 flex-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github1"></use>
              </svg>
            </div>
            <div class="about-1-3-1 flex-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin3"></use>
              </svg>
            </div>
            <div class="about-1-3-1 flex-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhihu"></use>
              </svg>
            </div>
          </div>
        </div>

        <div class="about-2 flex flex-wrap">
          <div class="about-2-1 w-1/5 p-2">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-C"></use>
            </svg>
            <a>技术</a>
          </div>
          <div class="about-2-1 w-1/5 p-2">
            <svg class="icon" aria-hidden="true">
              <use
                xlink:href="#icon-dianzan
"
              ></use>
            </svg>
            <a>生活</a>
          </div>
          <div class="about-2-1 w-1/5 p-2">
            <svg class="icon" aria-hidden="true">
              <use
                xlink:href="#icon-wenzhang
"
              ></use>
            </svg>
            <a>文章</a>
          </div>
          <div class="about-2-1 w-1/5 p-2">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-daohang"></use>
            </svg>
            <a>分享</a>
          </div>
          <div class="about-2-1 w-1/5 p-2">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chat"></use>
            </svg>
            <a>留言</a>
          </div>
        </div>
        <div class="about-3">
          博客sn-blogs由少年本人制作 SN © 2019. All Rights Reserved.
          粤ICP备19130826号 2017 - 2020 Junior
        </div>
      </div>

      <div class="bg-2" v-bind:class="[activeClass, errorClass]">
        <div class="bg-2-1">
          <div class="bg-2-1-1">
            <h2>
              <svg class="inline-block icon" aria-hidden="true">
                -->
                <use
                  xlink:href="#icon-forum_help_feedback
"
                ></use>
              </svg>
              关于我：
            </h2>
          </div>
          <div class="bg-2-1-2">表面腼腆,内心奔放</div>
        </div>
        <div class="bg-2-2">
          <div class="bg-2-2-1">
            <h2>
              <svg class="inline-block icon" aria-hidden="true">
                -->
                <use
                  xlink:href="#icon-yurenjie
"
                ></use>
              </svg>
              关于本站：
            </h2>
          </div>
          <div class="bg-2-2-2">
            本站基于TailWindcss,Vue,Axios,NetCoreWebApi
            开发搭建，部署于腾讯云，备案于腾讯云，建站初衷是想学习记录生活。
          </div>
        </div>
        <div class="bg-2-3">
          <div class="bg-2-3-1">
            <h2>
              <svg class="inline-block icon" aria-hidden="true">
                -->
                <use
                  xlink:href="#icon-computer

"
                ></use>
              </svg>
              建站缘由
            </h2>
          </div>
          <div class="bg-2-3-2">搭建一个属于我自己的世界。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import api from 'axios';
api.defaults.baseURL = 'http://129.204.92.64:8081/',
  api.defaults.timeout = 12000;

export default {
  name: "About",
  data () {
    return {
      activeClass: 'animate__animated',
      errorClass: 'animate__fadeInRightBig',
      bounceIn: 'animate__bounceIn',
      backInDown: 'animate__backInDown',
      fadeInTopRight: 'animate__fadeInTopRight',
      User: [],
      newinfo: [],
      markdownOption: {
        bold: true, // 粗体
      },
    }
  },
  computed: {},
  components: { //注册
  },
  created () {
    this.getall()
  },

  methods: {
    getall () {
      //查询当前用户信息
      api({
        url: '/api/SnUser/AsyGetUserId?UserId=4'
      }).then(res => {
        this.User = res.data[0];

      }).catch((e) => {
        console.log(e + '获取数据失败');
      });


      // this.$api({
      //     url: '/api/SnArticle/AsyGetTestID?id=' + 186
      // }).then(res => {
      //     this.newinfo = res.data;
      // }).catch((e) => {
      //     console.log(e + '获取数据失败');
      // });
    }


  }


}


</script>


<style lang="scss" scoped>
@import "../../assets/sass/com";

.abouts {
  /*position: fixed;*/
  width: 100%;
  height: 100%;
  /* 关于界面 */
  .about {
    width: 83%;
    height: 100%;
    margin: 60px auto;
    padding: 0 0 1.25rem 0;
    background-color: #ffffff;

    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    /*overflow: auto;*/

    .bg {
      height: 500px;
      /* 背景图片 */
      background: no-repeat center/100% url("../../assets/img/ab.jpg");
      @include boxshow;

      .about-1 {
        /*background-color: #0086b3;*/
        height: 61%;
        width: 35%;
        margin: 5% auto 0 auto;
        @include boxshow;

        .about-1-1 {
          /*background-color: #55ff00;*/
          height: 50%;

          .about-1-1-1 {
            height: 112px;
            width: 150px;
            margin: 3% auto 0 auto;

            @apply p-3;
            img {
              height: 100%;
              width: 100%;
              border-radius: 3%;
            }
          }
        }

        .about-1-2 {
          background-color: #4d4d4d;
          height: 20%;
          margin: 0 auto;
          @apply p-1 pt-4 text-lg text-center;

          a {
            background-image: linear-gradient(90deg, #f66, #f90);
            background-clip: text;
            animation: hue 5s linear infinite;
            -webkit-text-fill-color: transparent;
            @keyframes hue {
              from {
                filter: hue-rotate(0);
              }
              to {
                filter: hue-rotate(-1turn);
              }
            }
          }
        }

        .about-1-3 {
          /*background-color: #55a532;*/
          height: 30%;
          width: 50%;
          margin: 0 auto;

          .about-1-3-1 {
            /*background-color: #4eb687;*/
            @apply text-center py-2 m-1;
          }
        }
      }

      .about-2 {
        background-color: #dddddd;
        width: 35%;
        margin: 10px auto 0 auto;
        @apply text-base cursor-pointer;
        @include boxshow;
      }

      .about-3 {
        width: 51%;
        /*background-color: #6990f6;*/
        margin: 20px auto 0 auto;
      }

      .bg-1 {
        position: relative;
        height: 65%;
        width: 35%;
        margin: 20px auto 0 auto;
        @include boxshow;

        img {
          height: 40%;
          width: 32%;
          position: absolute;
          top: 3%;
          left: 34%;
          border-radius: 50%;
        }

        .bg-1-1 {
          position: absolute;
          top: 50%;
          width: 100%;
          height: 60px;
          background-color: #4d4d4d;
          color: #e5e0d6;
          line-height: 60px;
          text-align: center;

          p {
            background-image: linear-gradient(90deg, #f66, #f90);
            background-clip: text;
            animation: hue 5s linear infinite;
            -webkit-text-fill-color: transparent;
            @keyframes hue {
              from {
                filter: hue-rotate(0);
              }
              to {
                filter: hue-rotate(-1turn);
              }
            }
          }
        }

        .bg-1-2 {
          position: absolute;
          top: 75%;
          /*background-color: white;*/
          height: 35px;
          left: 33%;

          ul li {
            display: inline-block;
            margin-left: 12px;
          }
        }
      }
    }

    .bg-2 {
      width: 100%;
      /*background-color: #95999c;*/
      @include boxshow;
      margin: 10px auto 0 auto;

      .bg-2-1 {
        white-space: pre-wrap;
        word-wrap: break-word;
        @apply m-2;
        /*background-color: #4eb687;*/
        .bg-2-1-1 {
          /*background-color: #0086b3;*/
          @apply m-2;
        }

        .bg-2-1-2 {
          /*background-color: #55ff00;*/
          @apply m-2 text-base font-light;
        }
      }

      .bg-2-2 {
        white-space: pre-wrap;
        word-wrap: break-word;
        @apply m-2;
        /*background-color: #4eb687;*/

        .bg-2-2-1 {
          /*background-color: #0086b3;*/
          @apply m-2;
        }

        .bg-2-2-2 {
          /*background-color: #55ff00;*/
          @apply m-2 text-base font-light;
        }
      }

      .bg-2-3 {
        white-space: pre-wrap;
        word-wrap: break-word;
        @apply m-2;
        /*background-color: #4eb687;*/

        .bg-2-3-1 {
          /*background-color: #0086b3;*/
          @apply m-2;
        }

        .bg-2-3-2 {
          /*background-color: #55ff00;*/
          @apply m-2 text-base font-light;
        }
      }
    }
  }

  /*.about::-webkit-scrollbar{*/
  /*    display: none;*/
  /*}*/
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.5rem;
  fill: currentColor;
  overflow: hidden;
}
</style>
