<template>
  <div>
    <nav class="flex header-sn">
      <div class="flex items-center flex-shrink-0 text-black">
        <span class="text-2xl font-medium tracking-tight">少年</span>
      </div>
      <div class="header_main">
        <div class="header_text">
          <a @click="onk(1)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-icon-" />
            </svg>
            主页
          </a>
          <a @click="onk(2)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-liulan
" />
            </svg>
            博文
          </a>
          <!-- <a @click="onk(5)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-dianzan
            " />
            </svg>
            时间线
          </a>-->
          <a @click="onk(6)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-tupian" />
            </svg>
            图册
          </a>
          <a @click="onk(7)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-daohang1" />
            </svg>
            导航
          </a>
          <a @click="onk(8)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-guanyuwomen
" />
            </svg>
            关于
          </a>

          <!-- <a @click="onk(9)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-24" />
            </svg>
            日志
          </a>-->

          <a @click="onk(12)" class="header_text_text">留言</a>
          <a @click="onk(13)" class="header_text_text">博客园</a>
          <a @click="onk(14)" class="header_text_text">Gitee</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
  import { useRouter } from "vue-router";
  export default {
    name: "Headers",
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
          case 3:
            router.push("./Resource");
            break;
          case 4:
            router.push("./Classify");
            break;
          case 5:
            router.push("./Timeline");
            break;
          case 6:
            router.push("./Photo");
            break;
          case 7:
            router.push("./Navigation");
            break;
          case 8:
            router.push("./About");
            break;
          case 9:
            router.push("./Talk");
            break;
          case 10:
            router.push("./Books");
            break;
          case 11:
            router.push("./PersonalNavigation");
            break;
          case 12:
            router.push("./Leave");
            break;
          case 13:
            window.open("https://www.cnblogs.com/ouyangkai/");
            break;
          case 14:
            window.open("https://gitee.com/kaiouyang-sn");
            break;
          case 15:
            router.push("./SnVideo");
            break;
          default:
            router.push("./Indexs");
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
  .header-sn {
    position: fixed;
    @include excursion(0, null, 3%, null);
    z-index: 10;
    @include w-h(94%, 58px);
    background-color: $back_headers;
    @apply p-2  shadow-sm rounded-sm;
    .header_main {
      width: 100%;
      .header_text {
        @apply mt-2 text-base;
        a {
          @apply ml-3 hover:text-red-400;
        }
        .header_text_text {
          float: right;
        }
      }
    }
  }
  @screen xp {
    .header-sn {
      width: 100%;
      @include excursion(0, null, 0, null);
      a {
        @apply hidden;
      }
    }
  }
</style>