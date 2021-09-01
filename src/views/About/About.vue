<template>
  <div id="About">
    <div class="About-div gradient-bg animate__animated animate__fadeIn">
      <div class="About-bg">
        <div class="about-1" :class="[activeClass, backInDown]">
          <div class="about-1-1">
            <div class="about-1-1-1">
              <!-- <img :src="User.userPhoto" alt="" /> -->
              <img src="../../assets/img/bb.jpg" />
            </div>
          </div>
          <div class="about-1-2">
            <a>{{ User.brief }}</a>
          </div>
          <div class="flex items-center about-1-3">
            <div class="flex-1 about-1-3-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ11" />
              </svg>
            </div>
            <div class="flex-1 about-1-3-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github1" />
              </svg>
            </div>
            <div class="flex-1 about-1-3-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin3" />
              </svg>
            </div>
            <div class="flex-1 about-1-3-1">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhihu" />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap about-2">
          <div class="w-1/5 p-2 about-2-1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-C" />
            </svg>
            <a @click="Getid(1)">文章</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dianzan
" />
            </svg>
            <a @click="Getid(2)">娱乐</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wenzhang
" />
            </svg>
            <a @click="Getid(3)">日志</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-daohang" />
            </svg>
            <a @click="Getid(4)">分享</a>
          </div>
          <div class="w-1/5 p-2 about-2-1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chat" />
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
                <use xlink:href="#icon-guanyuqunfeng
" />
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
                <use xlink:href="#icon-shujuku1
" />
              </svg>
              关于本站：
            </h2>
          </div>
          <div class="bg-2-2-2">
            本站基于TailWindcss,Vue,NetCoreWebApi
            开发搭建，部署于腾讯云，备案于腾讯云，建站初衷是想学习记录生活。
          </div>
        </div>
        <div class="bg-2-3">
          <div class="bg-2-3-1">
            <h2>
              <svg class="inline-block icon" aria-hidden="true">
                -->
                <use xlink:href="#icon-shudan

" />
              </svg>
              建站缘由
            </h2>
          </div>
          <div class="bg-2-3-2">搭建一个属于自己的世界。</div>

          <div></div>
        </div>
      </div>
    </div>
    <div>
      <div class="btn" @click="like()">jenny</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { user } from "../../api/user";

  export default {
    name: "About",
    setup() {
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
      let count = 0;
      const like = () => {
        const likeDom = document.createElement("div");
        count++;
        likeDom.className = count % 2 === 0 ? "like" : "like like--is-second";
        likeDom.style.willChange = "margin-top";
        document.body.appendChild(likeDom);
        setTimeout(() => {
          document.body.removeChild(likeDom);
        }, 3900);
      };
      const getall = async () => {

        await user.GetByIdAsync(4)
          .then((res: any) => {
            state.User = res.data;
          })
      };

      const Getid = async (id: number) => {
        switch (id) {
          case 1:
            await router.push("./index");
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
      return { ...toRefs(state), getall, Getid, like };
    },
  };
</script>

<style lang="scss" scoped>
  @import "./About.scss";
</style>
