<template>
  <div class="fo">
    <div class="fos">
      <div class="fo-img1">
        <img src="@/assets/img/ab.jpg" alt="" />
      </div>
      <div class="fo-1">
        <p
          class="text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
          @click="nav(1)"
        >
          短文
        </p>
      </div>
      <div class="fo-1">
        <p
          class="text-gray-700 transition duration-500 ease-in-out transform text-xm hover: hover:scale-110 hover:text-red-600"
          @click="nav(2)"
        >
          视频
        </p>
      </div>
      <div class="fo-1">
        <p
          class="text-gray-700 transition duration-500 ease-in-out transform text-xm hover: hover:scale-110 hover:text-red-600"
          @click="nav(4)"
        >
          收藏
        </p>
      </div>
      <div class="fo-1">
        <p
          class="text-gray-700 transition duration-500 ease-in-out transform text-xm hover: hover:scale-110 hover:text-red-600"
          @click="nav(5)"
        >
          博客
        </p>
      </div>
      <div class="fo-1">
        <p
          class="text-gray-700 transition duration-500 ease-in-out transform text-xm hover: hover:scale-110 hover:text-red-600"
          @click="nav(6)"
        >
          书单
        </p>
      </div>
      <div class="fo-1">
        <p
          class="text-gray-700 transition duration-500 ease-in-out transform text-xm hover: hover:scale-110 hover:text-red-600"
          @click="nav(7)"
        >
          后台
        </p>
      </div>

      <div class="fo-2">
        <a class="text-xs fo-2-p1"> http://oykperson.xyz</a>
      </div>
      <div class="fo-3">
        <p class="text-xs fo-2-p2">
          SN © 2019. All Rights Reserved. 粤ICP备19130826号 2017 - 2020 Junior
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
export default {
  name: "Sidebarsn",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
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
          router.push("./Indexs");
          break;
        default:
          router.push("./Indexs");
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

  .fo {
    position: relative;

    @include w-h(21%, 100%);
    position: fixed;
    @include excursion(0, null, 0, null);
    background-color: #ffffff;
    @apply shadow;

    .fos {
      height: 80%;
      overflow: auto;

      .bgys {
        position: absolute;
        top: 0;
        @include w-h(100%, 100%);
      }

      .fo-img1 {
        img {
          @include w-h(100%, 140px);
        }

        margin: 20% 0 40px 0;
      }

      .fo-1 {
        /*background-color: #55a532;*/
        @include w-h(40%, 30px);
        margin: 10px auto auto auto;
        @apply text-center antialiased cursor-pointer;
        p {
          @apply py-1 px-4 text-lg font-light;
        }
      }
      .fo-2 {
        position: absolute;
        bottom: 18%;
        margin-left: 25%;
      }

      .fo-3 {
        position: absolute;
        bottom: 12%;

        .fo-2-p2 {
          text-align: center;
          color: #95999c;
        }
      }
    }
    .fos::-webkit-scrollbar {
      display: none;
    }
  }
</style>