<!--
 * @Author: your name
 * @Date: 2021-07-14 15:00:34
 * @LastEditTime: 2021-07-22 17:11:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Home.vue
-->

<template>
  <div id="home" class="animate__animated animate__fadeIn">
    <div class="home_main">
      <div class="home_main_top">
        <div class="home_introduce">
          <p class="home_introduce-1 animate__animated animate__slideInDown">你好，</p>
          <p class="home_introduce-2 animate__animated animate__slideInLeft">
            我叫少年
            。
          </p>
          <p
            class="home_introduce-3 animate__animated animate__slideInLeft animate__slideInRight"
          >一位热爱生活、xxxxxx开发者。</p>
          <p class="home_introduce-4 animate__animated animate__jackInTheBox">很高兴与你相遇！</p>
        </div>
      </div>
      <div class="flex home_enter animate__animated animate__slideInUp">
        <div class="home_enter-1">
          <button @click="onk(1)">进入</button>
        </div>
        <div class="home_enter-2">
          <button>关于</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRouter } from "vue-router";
  export default {
    name: "Home",
    setup(): { onk: (num: any) => Promise<void>; } {
      const router = useRouter();
      let onk = async (num: any) => {
        switch (num) {
          case 1:
            router.push("/index");
            break;
          case 2:
            router.push("/TagText");
            break;

          default:
            router.push("./index");
            break;
        }
      };

      return {
        onk,
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  #home {
    position: fixed;
    @apply bg-white;
    @include w-h(100%, 100%);

    .home_main {
      @include initialize(100%, 80%, $Text_height, null, null, null, null);
      @apply shadow-sm rounded-sm relative;

      .home_main_top {
        @apply bg-white;
        .home_introduce {
          @apply text-center;
          @include initialize(50%, 40%, 13%, null, 25%, null, null);
          p {
            @apply mt-3;
          }
          .home_introduce-1 {
            @apply text-7xl;
          }
          .home_introduce-2 {
            @apply text-6xl;
          }
          .home_introduce-3 {
            @apply text-3xl;
          }
          .home_introduce-4 {
            @apply text-4xl;
          }
        }
      }

      .home_enter {
        @apply text-2xl;

        @include initialize(11%, null, 20px, null, 43%, null, null);
        .home_enter-1 {
          @include initialize(50%, 100%, null, null, null, null, null);
          @apply bg-gray-100 text-center rounded shadow;
          button {
          }
        }
        .home_enter-2 {
          @include initialize(50%, 100%, null, null, null, null, null);
          @apply bg-gray-100 text-center shadow;
        }
      }
    }
  }

  @screen xp {
    #home .home_main .home_main_top {
      @include initialize(100%, 50%, 35%, null, null, null, null);
    }

    #home .home_main .home_enter {
      @include initialize(45%, null, null, null, 26%, null, null);
    }
    #home .home_main .home_main_top .home_introduce .home_introduce-1 {
      @apply text-5xl;
    }
    #home .home_main .home_main_top .home_introduce .home_introduce-2 {
      @apply text-4xl;
    }
    #home .home_main .home_main_top .home_introduce .home_introduce-3 {
      @apply text-3xl;
    }
    #home .home_main .home_main_top .home_introduce .home_introduce-4 {
      @apply text-2xl;
    }
  }
</style>