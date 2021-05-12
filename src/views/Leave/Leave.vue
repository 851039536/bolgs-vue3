<template>
  <div class="SnLeaves">
    <div class="SnLeave" data-title="气泡背景墙">
      <ul class="bubble-bgwall">
        <li v-for="result1 in result" :key="result1.id">{{ result1.title }}</li>
      </ul>

      <div class="bruce-2 animate__animated animate__fadeInUpBig">
        <form class="w-full max-w-sm">
          <div class="md:flex md:items-center">
            <div class="md:w-2/3">
              <input
                class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value="666666666666！"
              />
            </div>
            <button
              class="px-3 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
              type="button"
            >Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { leave } from "../../api/leave";
  import { reactive, toRefs, onMounted } from "vue";
  export default {
    name: "SnLeave",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const state = reactive({
        result: [],
        //当前默认页
      });

      const GetAllAsync = async () => {
        leave.GetAllAsync().then((result) => {
          state.result = result.data;
        })
      };

      onMounted(async () => {
        await GetAllAsync();
      });

      return {
        ...toRefs(state),
        GetAllAsync,
      };
    },

  }
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  .SnLeaves {
    position: fixed;
    @include w-h(100%, 100%);
    .SnLeave {
      position: relative;
      height: 100%;
      background-image: linear-gradient(270deg, #e96dc4, #6990f6);
      .bruce-2 {
        position: absolute;
        top: 40%;
        left: 42%;
        width: 20%;
        border-radius: 5px;
      }
    }
  }
  .bubble-bgwall {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    li {
      display: flex;
      position: absolute;
      bottom: -200px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      width: 50px;
      height: 50px;
      background-color: rgba(#fff, 0.15);
      color: #ccc;
      animation: bubble 15s infinite;
      &:nth-child(1) {
        left: 3%;
      }
      &:nth-child(2) {
        left: 6%;
        animation-duration: 7s;
        animation-delay: 2s;
      }
      &:nth-child(3) {
        left: 9%;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 12%;
        background-color: rgba(#fff, 0.3);
        animation-duration: 8s;
      }
      &:nth-child(5) {
        left: 15%;
      }
      &:nth-child(6) {
        left: 18%;
        background-color: rgba(#fff, 0.2);
        animation-delay: 3s;
      }
      &:nth-child(7) {
        left: 21%;
        animation-delay: 2s;
      }
      &:nth-child(8) {
        left: 24%;
        font-size: 12px;
        animation-duration: 15s;
        animation-delay: 4s;
      }
      &:nth-child(9) {
        left: 27%;
        background-color: rgba(#fff, 0.3);
        font-size: 12px;
        animation-duration: 12s;
        animation-delay: 2s;
      }
      &:nth-child(10) {
        left: 30%;
        animation-delay: 3s;
      }

      &:nth-child(11) {
        left: 33%;
        animation-delay: 9s;
      }

      &:nth-child(12) {
        left: 36%;
        animation-delay: 4s;
      }

      &:nth-child(13) {
        left: 39%;
        animation-delay: 7s;
      }

      &:nth-child(14) {
        left: 42%;
        animation-delay: 5s;
      }
      &:nth-child(15) {
        left: 45%;
        animation-delay: 3s;
      }
      &:nth-child(16) {
        left: 48%;
        animation-delay: 2s;
      }
      &:nth-child(17) {
        left: 51%;
        animation-delay: 5s;
      }
      &:nth-child(18) {
        left: 54%;
        animation-delay: 4s;
      }
      &:nth-child(19) {
        left: 57%;
        animation-delay: 3s;
      }
      &:nth-child(20) {
        left: 60%;
        animation-delay: 4s;
      }
      &:nth-child(21) {
        left: 62%;
        animation-delay: 5s;
      }
      &:nth-child(22) {
        left: 65%;
        animation-delay: 6.5s;
      }
      &:nth-child(23) {
        left: 68%;
        animation-delay: 2.5s;
      }
      &:nth-child(24) {
        left: 71%;
        animation-delay: 7.5s;
      }
      &:nth-child(25) {
        left: 74%;
        animation-delay: 5s;
      }
      &:nth-child(26) {
        left: 76%;
        animation-delay: 2.5s;
      }
      &:nth-child(27) {
        left: 80%;
        animation-delay: 2.5s;
      }
      &:nth-child(28) {
        left: 83%;
        animation-delay: 3.5s;
      }
      &:nth-child(29) {
        left: 85%;
        animation-delay: 8.5s;
      }
      &:nth-child(30) {
        left: 88%;
        animation-delay: 1.8s;
      }
      &:nth-child(31) {
        left: 90%;
        animation-delay: 5.4s;
      }
      &:nth-child(32) {
        left: 93%;
        animation-delay: 2.9s;
      }
      &:nth-child(33) {
        left: 97%;
        animation-delay: 2.8s;
      }
      &:nth-child(34) {
        left: 95%;
        animation-delay: 3.5s;
      }
      &:nth-child(35) {
        left: 99%;
        animation-delay: 5.1s;
      }
    }
  }
  @keyframes bubble {
    0% {
      opacity: 0.5;
      transform: translateY(0) rotate(1deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-400px) rotate(5deg);
    }
    50% {
      opacity: 1;
      transform: translateY(-600px) rotate(10deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-1000px) rotate(160deg);
    }
  }
</style>