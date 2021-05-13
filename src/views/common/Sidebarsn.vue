<template>
  <div class="sidebarsn">
    <div class="si_scroll">
      <div class="si_img">
        <img src="@/assets/img/si.jpg" alt />
      </div>
      <div class="si_text">
        <p @click="nav(1)">舔狗日记</p>
      </div>
      <div class="si_text">
        <p @click="nav(2)">bili视频</p>
      </div>
      <div class="si_text">
        <p @click="nav(4)">网站收藏</p>
      </div>
      <div class="si_text">
        <p @click="nav(5)">博客导航</p>
      </div>
      <div class="si_text">
        <p @click="nav(6)">我的书单</p>
      </div>
      <div class="si_text">
        <p @click="nav(7)">后台管理</p>
      </div>
      <div class="si_text">
        <p @click="nav(8)">聚合搜索</p>
      </div>
      <div class="si_text">
        <p @click="nav(8)">博客日记</p>
      </div>
      <div class="si_text">
        <p @click="nav(8)">工具软件</p>
      </div>
      <div class="si_text">
        <p @click="nav(8)">工具软件</p>
      </div>
      <div class="si_text">
        <p @click="nav(8)">工具软件</p>
      </div>
      <div class="si_text">
        <p @click="nav(8)">工具软件</p>
      </div>
      <div class="si_text">
        <p @click="nav(8)">工具软件</p>
      </div>
      <div class="si_website">
        <a>http://oykperson.xyz</a>
      </div>
      <div class="si_described">
        <p
          class="si_described_text"
        >SN © 2019. All Rights Reserved. 粤ICP备19130826号 2017 - 2020 Junior</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRouter } from "vue-router";
  export default {
    name: "Sidebarsn",
    setup(): { nav: (num: number) => Promise<void>; } {
      const router = useRouter();
      let nav = async (num: number) => {
        switch (num) {
          case 1:
            router.push("/One");
            break;
          case 2:
            router.push("/SnVideo");
            break;
          case 3:
            // this.$router.push('/AfterLogin')
            break;
          case 4:
            router.push("./favorite");
            break;
          case 5:
            router.push("./BlogCircles");

            break;
          case 6:
            router.push("./Book");
            break;
          case 7:
            window.open("http://localhost:8082/");
            break;

          default:
            router.push("./index");
            break;
        }
      };

      return {
        nav,
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  .sidebarsn {
    position: relative;
    @include w-h(20%, 100%);
    position: fixed;
    @include excursion($Text_height, null, 3%, null);
    background-color: $back_sidebar;
    @apply shadow rounded-md;

    .si_scroll {
      height: 80%;
      overflow: auto;
      .bgys {
        position: absolute;
        top: 0;
        @include w-h(100%, 100%);
      }
      .si_img {
        img {
          @include w-h(100%, 140px);
          @apply rounded-md;
        }
      }
      .si_text {
        // background-color: #55a532;
        @include initialize(40%, 30px, 5px, auto, auto, auto, null);
        @apply text-center antialiased cursor-pointer;
        p {
          @apply py-1 px-4 text-base font-light;
        }
        p:hover {
          color: #f08080;
        }
      }
      .si_website {
        position: absolute;
        bottom: 18%;
        margin-left: 25%;
      }
      .si_described {
        position: absolute;
        bottom: 12%;
        @apply text-xs;
        .si_described_text {
          text-align: center;
          color: #333336;
        }
      }
    }
    .si_scroll::-webkit-scrollbar {
      display: none;
    }
  }
</style>