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
          <div class="flex items-center about-1-3">
            <div class="flex-1 about-1-3-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ11"></use>
              </svg>
            </div>
            <div class="flex-1 about-1-3-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github1"></use>
              </svg>
            </div>
            <div class="flex-1 about-1-3-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin3"></use>
              </svg>
            </div>
            <div class="flex-1 about-1-3-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhihu"></use>
              </svg>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap about-2">
          <div class="w-1/5 p-2 about-2-1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-C"></use>
            </svg>
            <a @click="Getid(1)">技术</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <svg class="icon" aria-hidden="true">
              <use
                xlink:href="#icon-dianzan
"
              ></use>
            </svg>
            <a @click="Getid(2)">娱乐</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <svg class="icon" aria-hidden="true">
              <use
                xlink:href="#icon-wenzhang
"
              ></use>
            </svg>
            <a @click="Getid(3)">日志</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-daohang"></use>
            </svg>
            <a @click="Getid(4)">分享</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chat"></use>
            </svg>
            <a @click="Getid(5)">留言</a>
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
                  xlink:href="#icon-guanyuqunfeng
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
                  xlink:href="#icon-shujuku1
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
                  xlink:href="#icon-shudan

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
<script lang="ts">
import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "About",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
    const router = useRouter();
    const state = reactive({
      activeClass: "animate__animated",
      errorClass: "animate__fadeInRightBig",
      bounceIn: "animate__bounceIn",
      backInDown: "animate__backInDown",
      fadeInTopRight: "animate__fadeInTopRight",
      User: [],
      newinfo: [],
    });

    const getall = () => {
      //查询当前用户信息
      proxy
        .$api({
          url: "/api/SnUser/AsyGetUserId?UserId=4",
        })
        .then((res: any) => {
          state.User = res.data[0];
        })
        .catch((e: any) => {
          console.log(e + "获取数据失败");
        });
    };

    const Getid = async (id: number) => {
      switch (id) {
        case 1:
          await router.push("./Indexs");
          break;
        case 2:
          await router.push("./SnVideo");
          break;
        case 3:
          await router.push("./Talk");
          break;
        case 4:
          await router.push("./favorite");
          break;
        case 5:
          await router.push("./Leave");
          break;
      }
    };

    onMounted(async () => {
      await getall();
    });
    return { ...toRefs(state), getall, Getid };
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  .abouts {
    /*position: fixed;*/
    @include w-h(100%, 100%);
    /* 关于界面 */
    .about {
      @include initialize(83%, 100%, 60px, auto, auto, auto, #ffffff);
      padding: 0 0 1.25rem 0;

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
          @include initialize(35%, 61%, 5%, auto, auto, auto, null);
          @include boxshow;

          .about-1-1 {
            /*background-color: #55ff00;*/
            height: 50%;

            .about-1-1-1 {
              @include initialize(150px, 112px, 3%, auto, auto, auto, null);
              @apply p-3;
              img {
                @include w-h(100%, 100%);
                border-radius: 2%;
              }
            }
          }

          .about-1-2 {
            @include initialize(null, 20%, 0, auto, auto, auto, #4d4d4d);
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
            @include initialize(50%, 30%, 0, auto, auto, auto, null);
            .about-1-3-1 {
              /*background-color: #4eb687;*/
              @apply text-center py-2 m-1;
            }
          }
        }

        .about-2 {
          @include initialize(35%, null, 10px, auto, auto, auto, null);
          @apply text-base cursor-pointer bg-gray-200;
          @apply shadow rounded-sm;
          .about-2-1 {
            @apply pl-5;
          }
        }

        .about-3 {
          /*background-color: #6990f6;*/
          @include initialize(55%, null, 20px, auto, auto, auto, null);
        }
      }

      .bg-2 {
        width: 100%;
        /*background-color: #95999c;*/

        margin: 10px auto 0 auto;

        .bg-2-1 {
          white-space: pre-wrap;
          word-wrap: break-word;
          @apply m-2;
          /*background-color: #4eb687;*/
          .bg-2-1-1 {
            /*background-color: #0086b3;*/
            @apply m-2 text-lg;
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
            @apply m-2 text-lg;
          }

          .bg-2-2-2 {
            /*background-color: #55ff00;*/
            @apply m-2 text-base font-light;
          }
        }

        .bg-2-3 {
          white-space: pre-wrap;
          word-wrap: break-word;
          @apply m-2 text-lg;
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
