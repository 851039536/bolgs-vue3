<template>
  <div>
    <!--侧边栏-->
    <Sidebarsn></Sidebarsn>
    <div class="talk animate__animated animate__fadeIn">
      <!--文章内容-->
      <div class="talk-text">
        <div class="talk-text-1">
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow" style="left: 10px; zindex: 1">
                <left-circle-outlined />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
              </div>
            </template>
            <div>
              <img src="../../assets/img/ab.jpg" alt="" />
            </div>
            <div>
              <img src="../../assets/img/bg.jpg" alt="" />
            </div>
            <div>
              <img src="../../assets/img/ab.jpg" alt="" />
            </div>
            <div>
              <img src="../../assets/img/bg.jpg" alt="" />
            </div>
          </a-carousel>

          <div class="talk-text-1-1">
            <h4>Junior</h4>
          </div>

          <div class="talk-text-1-2">
            <p>评论:22</p>
            <p>文章:162</p>
            <p>动态:11</p>
          </div>
        </div>

        <div class="talk-text-2">
          <div class="flex talk-text-2-1">
            <div class="talk-text-2-1-1">
              <!--                        <img src="@/assets/img/w.jpg" alt="">-->
              <img src="../../assets/img/ab.jpg" alt="" />
            </div>

            <div class="talk-text-2-1-2">
              <div class="flex talk-text-2-1-2-1">
                <div><a>烬落</a></div>
                <div>2010-10-10</div>
                <div><a>《我觉得好用就行啦。》</a></div>
              </div>
              <div class="talk-text-2-1-2-2">
                2个美德乐的储奶瓶，如果大一点的时候辅食餐具加上的话，就要考虑重新置换一个容量大的啦～
                个美德乐的储奶瓶个美德乐的储奶瓶个美德乐的储奶瓶个美德乐的储奶瓶
              </div>

              <div class="flex talk-text-2-1-2-3">
                <div>赞:100</div>
                <div>阅读:1000</div>
                <div>评论:1</div>
                <div>分类:haha</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TalkSidebar></TalkSidebar>
    </div>
  </div>
</template>

<script>
// import Sidebarsn from "../common/Sidebarsn";
import TalkSidebar from "./TalkSidebar";
export default {
  name: "Talk",
  components: { TalkSidebar },
  // created () {

  // },
  // methods: {

  // }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";

  .talk {
    /*background-color: #dddddd;*/
    width: 50%;
    height: 100%;
    margin-top: 60px;
    margin-left: 23%;
    //@include boxshow;
    .talk-text {
      .talk-text-1 {
        /* For demo */
        .ant-carousel ::v-deep(.slick-slide) {
          text-align: center;
          height: 180px;
          line-height: 160px;
          background: #364d79;
          overflow: hidden;
        }

        .ant-carousel ::v-deep(.slick-arrow.custom-slick-arrow) {
          width: 25px;
          height: 25px;
          font-size: 25px;
          color: #fff;
          background-color: rgba(31, 45, 61, 0.11);
          opacity: 0.3;
        }
        .ant-carousel ::v-deep(.custom-slick-arrow:before) {
          display: none;
        }
        .ant-carousel ::v-deep(.custom-slick-arrow:hover) {
          opacity: 0.5;
        }

        .ant-carousel ::v-deep(.slick-slide h3) {
          color: #fff;
        }

        div {
          img {
            width: 100%;
            height: 100%;
          }
        }
        /*父元素*/
        position: relative;
        // height: 175px;
        // background: no-repeat center/100% url("../../assets/img/bg.jpg");
        // border-radius: 3px;
        @apply shadow rounded-sm;

        .talk-text-1-1 {
          /*绝对定位*/
          position: absolute;
          width: 100px;
          left: 7%;
          top: 40%;

          h4 {
            color: #ffffff;
          }
        }

        .talk-text-1-2 {
          position: absolute;
          left: 75%;
          top: 40%;

          p {
            color: #ffffff;
            display: inline-block;
            padding-right: 0.5rem;
          }
        }
      }

      .talk-text-2 {
        @apply mt-3;
        /*background-color: #6990f6;*/

        .talk-text-2-1 {
          background-color: #ffffff;
          @include w-h(98%, 122px);
          margin: auto;
          @apply mt-4;
          /*border-bottom: 1px dashed #f1f1f1;*/
          @apply shadow rounded;

          // 左边图片
          .talk-text-2-1-1 {
            /*background-color: #95999c;*/
            @include w-h(25%, 100%);
            @apply shadow-sm;
            img {
              @include w-h(100%, 100%);
            }
          }

          // 右边内容
          .talk-text-2-1-2 {
            // background-color: #55a532;
            @include w-h(75%, 100%);
            @apply text-justify;

            // 标题 作者 日期
            .talk-text-2-1-2-1 {
              /*background-color: #0086b3;*/
              height: 30%;

              div {
                /*background-color: #dddddd;*/
                @apply p-1 px-2 text-sm cursor-pointer;
              }
            }
            // 内容
            .talk-text-2-1-2-2 {
              height: 40%;
              // background-color: #d1bda4;
              @apply p-1 px-2 text-sm;
              @include line-number;
            }

            .talk-text-2-1-2-3 {
              height: 30%;
              @apply px-1 pt-3 text-xs cursor-pointer;
              // background-color: #9a6e3a;

              div {
                @include w-h(null, 100%);
                // background-color: #d1bda4;
                @apply p-1;
              }
            }
          }
        }
      }

      .asas {
        @apply bg-red-400;
      }
    }
  }
</style>