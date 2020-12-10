<template>
  <div class="fo">
    <div class="fos">
      <!-- <vue-particles
        class="bgys"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles> -->

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
          class="text-xm text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
          @click="nav(2)"
        >
          视频
        </p>
      </div>
      <div class="fo-1">
        <p
          class="text-xm text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
          @click="nav(4)"
        >
          收藏
        </p>
      </div>
      <div class="fo-1">
        <p
          class="text-xm text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
          @click="nav(5)"
        >
          博客
        </p>
      </div>
      <div class="fo-1">
        <p
          class="text-xm text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
          @click="nav(6)"
        >
          书单
        </p>
      </div>
      <div class="fo-1">
        <p
          class="text-xm text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
          @click="nav(7)"
        >
          后台
        </p>
      </div>

      <div class="fo-2">
        <a class="fo-2-p1 text-xs"> http://oykperson.xyz</a>
      </div>
      <div class="fo-3">
        <p class="fo-2-p2 text-xs">
          SN © 2019. All Rights Reserved. 粤ICP备19130826号 2017 - 2020 Junior
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebarsn",
  methods: {
    nav (num) {
      switch (num) {
        case 1:
          this.$router.push('/EverydayOne')
          break;
        case 2:
          this.$router.push('/SnVideo')
          break;
        case 3:
          // this.$router.push('/AfterLogin')
          break;
        case 4:
          this.$router.push('./PersonalNavigation')
          break;
        case 5:
          this.$router.push('./BlogCircles')

          break;
        case 6:
          this.$router.push('./Books')

          break;
        default:
          this.$router.push('./Index')
          break;
      }

    },
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/com";

.fo {
  position: relative;
  height: 100%;
  width: 20%;

  position: fixed;
  top: 0%;
  left: 0;

  background-color: #ffffff;
  @include boxshow1;

  .fos {
    height: 80%;
    overflow: auto;

    .bgys {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .fo-img1 {
      img {
        height: 120px;
        width: 100%;
      }

      margin: 20% 0 40px 0;
    }

    .fo-1 {
      /*background-color: #55a532;*/
      width: 40%;
      margin: 10px auto auto auto;
      color: #aaaaaa;
      height: 30px;
      text-align: center;
      font-size: 15px;
      cursor: default;

      p {
        @apply py-1 px-4 font-sans  text-base;
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