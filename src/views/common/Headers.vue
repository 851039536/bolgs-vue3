<template>
  <div>
    <nav class="flex header-sn">
      <div class="flex items-center flex-shrink-0 text-black">
        <span class="text-xl tracking-tight">Junior</span>
      </div>

      <div class="header-1">
        <div class="header-1-1">
          <a @click="onk(1)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-icon-"></use>
            </svg>
            主页
          </a>
          <a @click="onk(2)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-biaoqian"></use>
            </svg>
            标签
          </a>
          <a @click="onk(5)">
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-dianzan

            "
              ></use>
            </svg>
            时间线
          </a>
          <a @click="onk(6)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-tupian"></use>
            </svg>
            图册
          </a>
          <a @click="onk(7)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-daohang1"></use>
            </svg>
            导航站
          </a>
          <a @click="onk(8)">
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-guanyuwomen
"
              ></use>
            </svg>
            关于
          </a>

          <a @click="onk(9)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-24"></use>
            </svg>
            日志
          </a>

          <a @click="onk(12)" class="header-1-1-a"> 留言 </a>
          <a @click="onk(13)" class="header-1-1-a"> 博客园 </a>
          <a @click="onk(14)" class="header-1-1-a"> Gitee </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
  import { useRouter } from "vue-router";
  export default {
    name: "Headers",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const router = useRouter();
      let onk = async (num: any) => {
        switch (num) {
          case 1:
            router.push("/Indexs");
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

  .header-sn {
    position: fixed;
    @include excursion(0, null, 5%, null);
    z-index: 10;
    @include w-h(90%, 56px);
    // background-color: #795da3;
    @apply p-2 bg-white shadow-sm;
    .header-1 {
      // background-color: #795da3;
      width: 100%;
      .header-1-1 {
        // background-color: #b2a8c0;
        @apply mt-2 text-base;
        a {
          // background-color: #b188e9;
          @apply ml-3 hover:text-red-400;
        }

        .header-1-1-a {
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