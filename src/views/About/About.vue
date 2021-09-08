<template>
  <div class="about_main" :class="[state.activeClass, state.fadeIn]">
    <!-- 背景图+介绍 -->
    <div class="about-bg">
      <div class="about-1" :class="[state.activeClass, state.backInDown]">
        <div class="about-1-1">
          <div class="about-1-1-1">
            <!-- <img :src="User.userPhoto" alt="" /> -->
            <img src="../../assets/img/bb.jpg" />
          </div>
        </div>
        <div class="about-1-2">
          <a>{{ state.User["brief"] }}</a>
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
        博客sn-blog由少年本人制作 SN © 2019. All Rights Reserved.
        粤ICP备19130826号 2017 - 2020 Junior
      </div>
    </div>
    <!-- end 背景图+介绍 -->
    <!-- 关于我：  -->
    <div class="bg-2" :class="[state.activeClass, state.errorClass]">
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
          本站基于TailWindcss,Vue3+ts,Net5Api
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
      </div>
    </div>

    <!-- end 关于我：  -->
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, defineComponent, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { user } from "../../api/user";

export default defineComponent({
  setup() {
    const router = useRouter();
    interface State {
      activeClass: string,
      errorClass: string,
      bounceIn: string,
      backInDown: string,
      fadeInTopRight: string,
      fadeIn: string,
      User: any,
    }
    const state: State = reactive({
      activeClass: "animate__animated",
      errorClass: "animate__fadeInRightBig",
      bounceIn: "animate__bounceIn",
      backInDown: "animate__backInDown",
      fadeInTopRight: "animate__fadeInTopRight",
      fadeIn: "animate__fadeIn",
      User: [],
    });

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
    // 挂载开始之前被调用
    onBeforeMount(() => {
      console.log("about");
    })

    onMounted(async () => {
      await getall();
      window.scrollTo(0, 0);

    });
    // 页面使用必须
    return {
      state,
      Getid,
    };
  },
});
</script>

<style lang="scss" scoped>
@charset "UTF-8";
@import "./index.scss";
</style>
