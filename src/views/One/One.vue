<template>
  <div class="EverydayOnes">
    <Sidebarsn></Sidebarsn>
    <div class="EverydayOne animate__animated animate__fadeIn">
      <!--        每日最新  电脑端-->
      <div class="EverydayOne-1">
        <div class="EverydayOne-1-1">
          <img src="../../assets/img/ab.jpg" alt="" />
        </div>
        <div class="EverydayOne-1-2">
          <div class="EverydayOne-1-2-1">
            <a class="text-lg">{{ dataOne.oneTitle }}</a>
          </div>
          <div
            class="px-4 py-4 m-2 font-thin leading-loose tracking-wide text-center shadow-2xl EverydayOne-1-2-2"
          >
            {{ dataOne.oneText }}
          </div>

          <div class="flex flex-row-reverse EverydayOne-1-2-3">
            <div class="px-2 py-2 m-1 text-center text-gray-700">转载</div>
            <div class="px-2 py-2 m-1 text-center text-gray-700">点赞(100)</div>
          </div>
        </div>
      </div>

      <!-- 手机端
      <div class="max-w-sm overflow-hidden rounded shadow-lg EverydayOne-1s">
        <img
          class="w-full"
          src="https://s1.ax1x.com/2020/11/10/BqCQC6.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="mb-2 text-xs text-center">文|张拉登</div>
          <p class="text-xs font-thin text-gray-700">
            计师。我们后会有期（微信表情搜索“种子君”，发现会动的我～）
          </p>
        </div>
      </div>

      <div class="max-w-sm overflow-hidden rounded shadow-lg EverydayOne-2s">
        <div class="text-center EverydayOne-2s-1">- 阅读 -</div>

        <div class="EverydayOne-2s-2">好久不见,嘿嘿</div>
        <div class="mb-2 EverydayOne-2s-3">文 / 张拉登</div>
        <div class="px-2 py-2 EverydayOne-2s-4">
          <p class="font-thin text-gray-700">计师。我们后会有期.</p>
        </div>
        <img
          class="w-full"
          src="https://s1.ax1x.com/2020/11/10/BqCK4x.jpg"
          alt="Sunset in the mountains"
        />

        <div class="px-2 py-2 mb-2 font-hairline"><span>今天</span></div>
      </div> -->

      <div class="EverydayOne-2">
        <div class="text-lg EverydayOne-2-1">往期推荐</div>
        <div class="text-lg EverydayOne-2-2">更多推荐</div>
      </div>

      <div
        class="inline-grid col-gap-4 EverydayOne-33"
        v-for="data in dataTest"
        :key="data.oneId"
      >
        <div class="EverydayOne-3">
          <div class="EverydayOne-3-1">
            <p class="EverydayOne-3-p1">
              <a>{{ data.oneTitle }}</a>
            </p>
            <p class="EverydayOne-3-p2">xxx</p>
            <p class="px-2 text-sm EverydayOne-3-p3">
              {{ data.oneText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";

export default {
  name: "EverydayOne",
  components: {},
  setup() {
    const { proxy }: any = getCurrentInstance();
    const state: any = reactive({
      dataTest: [],
      dataOne: [],
    });
    const getOne = () => {
      // proxy
      //   .$api({
      //     url: "/api/SnOne/GetPagingOne?pageIndex=1&pageSize=2&isDesc=true",
      //   })
      //   .then((res: any) => {
      //     state.dataOne = res.data[0];
      //   })
      //   .catch((e: never) => {
      //     console.log(e + "获取数据失败");
      //   });

      proxy.$api
        .all([
          // 读取一条内容
          proxy.$api.get(
            "/api/SnOne/GetPagingOne?pageIndex=1&pageSize=1&isDesc=true"
          ),
          //查询最新发布前十内容
          proxy.$api.get(
            "/api/SnOne/GetPagingOne?pageIndex=1&pageSize=8&isDesc=true"
          ),
        ])
        .then(
          proxy.$api.spread((res1: any, res2: any) => {
            state.dataOne = res1.data[0];
            state.dataTest = res2.data;
          })
        )
        .catch((err: never) => {
          console.log(err);
        });
    };

    onMounted(async () => {
      await getOne();
    });
    return { ...toRefs(state), getOne };
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  .EverydayOnes {
    position: fixed;
    @include w-h(100%, 100%);
    .EverydayOne {
      @include initialize(75%, 90%, 60px, null, 22%, null, #ffffff);
      @apply shadow-sm rounded-sm;
      overflow: auto;
      .EverydayOne-1 {
        @include w-h(100%, 55%);
        // background-color: #95999c;
        .EverydayOne-1-1 {
          // background-color: #4eb687;
          width: 50%;
          height: 100%;
          float: left;
          img {
            height: 100%;
            width: 100%;
          }
        }

        .EverydayOne-1-2 {
          // background-color: #007bff;
          width: 50%;
          height: 100%;
          float: right;

          .EverydayOne-1-2-1 {
            @apply text-center m-1 pt-2;
            height: 14%;
            // background-color: #ffffff;
          }
          .EverydayOne-1-2-2 {
            height: 60%;
            // background-color: #ffffff;
            @apply m-1;
          }
          .EverydayOne-1-2-3 {
            @apply m-1;
            height: 17%;
            // background-color: #55a532;
          }
        }
      }

      .EverydayOne-1s {
        margin: 4.6rem 10px auto 10px;
      }

      .EverydayOne-2s {
        margin: 0 10px auto 10px;

        .EverydayOne-2s-1 {
          margin: 0.8rem;
          padding: 0.1rem;
        }
        .EverydayOne-2s-2 {
          font-size: 1rem;
          font-weight: 700;
          padding: 0.2rem 0 0.5rem 0.4rem;
        }
        .EverydayOne-2s-3 {
          font-size: 14px;
          padding: 0 0 0 0.5rem;
        }
        .EverydayOne-2s-4 {
          font-size: 15px;
        }
      }
      .EverydayOne-2 {
        width: 100%;
        height: 30px;
        margin-top: 5px;
        @apply px-2 my-1 shadow bg-gray-100;
        .EverydayOne-2-1 {
          float: left;
        }

        .EverydayOne-2-2 {
          float: right;
        }
      }
      .EverydayOne-33 {
        @apply pl-1;
        .EverydayOne-3 {
          position: relative;
          @include initialize(220px, 131px, 10px, null, null, null, #ffffff);
          @apply shadow rounded-sm cursor-pointer ml-6;
          .EverydayOne-3-1 {
            width: 100%;
            height: 100%;

            .EverydayOne-3-p1 {
              height: 23%;
              // background-color: #55a532;
              @apply m-1 px-1 text-base font-semibold bg-gray-100;

              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .EverydayOne-3-p2 {
              height: 15%;
              /*background-color: #795da3;*/
              @apply px-3 text-xs;
            }

            .EverydayOne-3-p3 {
              // background-color: red;
              @apply m-1 p-1 text-sm font-thin;
              height: 51%;
              text-overflow: ellipsis;
              /*有些示例里需要定义该属性，实际可省略*/
              display: -webkit-box;
              -webkit-line-clamp: 3;
              /*规定超过两行的部分截断*/
              -webkit-box-orient: vertical;
              overflow: hidden;
              word-break: break-all;
              /*在任何地方换行*/
            }
          }
        }
      }
    }
  }
</style>