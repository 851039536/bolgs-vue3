<template>
  <div>
    <nav class="flex flex-wrap header-sn">
      <div class="flex items-center flex-shrink-0 mr-6 text-black header-sn-1">
        <span class="text-xl tracking-tight">Junior</span>
      </div>

      <div
        class="flex-grow block w-full header-sn-2 sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-base sm:flex-grow">
          <a
            @click="onk(1)"
            class="hidden block mt-4 mr-4 sm:inline-block sm:mt-0 text-black-200 hover:text-red-400"
          >
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-icon-"></use>
            </svg>
            主页
          </a>
          <a
            @click="onk(2)"
            class="hidden block mt-4 mr-4 sm:inline-block sm:mt-0 text-black-200 hover:text-red-400"
          >
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-biaoqian"></use>
            </svg>
            标签
          </a>
          <!--                    <a @click="onk(3)"-->
          <!--                       class="hidden block mt-4 mr-4 sm:inline-block sm:mt-0 text-black-200 hover:text-red-400">-->
          <!--                        <svg class="inline-block icon" aria-hidden="true">-->
          <!--                            <use xlink:href="#icon-computer"></use>-->
          <!--                        </svg>-->
          <!--                        分享-->
          <!--                    </a>-->
          <!--                    <a @click="onk(4)"-->
          <!--                       class="hidden block mt-4 mr-4 sm:inline-block sm:mt-0 text-black-200 hover:text-red-400">-->
          <!--                        <svg class="inline-block icon" aria-hidden="true">-->
          <!--                            <use xlink:href="#icon-exploit"></use>-->
          <!--                        </svg>-->
          <!--                        分类-->
          <!--                    </a>-->
          <a
            @click="onk(5)"
            class="hidden block mt-4 mr-4 sm:inline-block sm:mt-0 text-black-200 hover:text-red-400"
          >
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-dianzan

            "
              ></use>
            </svg>
            时间线
          </a>
          <a
            @click="onk(6)"
            class="hidden block mt-4 mr-4 sm:inline-block sm:mt-0 text-black-200 hover:text-red-400"
          >
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-tupian"></use>
            </svg>
            图册
          </a>
          <a
            @click="onk(7)"
            class="hidden block mt-4 mr-4 sm:inline-block sm:mt-0 text-black-200 hover:text-red-400"
          >
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-daohang1"></use>
            </svg>
            导航站
          </a>
          <a
            @click="onk(8)"
            class="hidden block mt-4 mr-4 sm:inline-block sm:mt-0 text-black-200 hover:text-red-400"
          >
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-guanyuwomen
"
              ></use>
            </svg>
            关于
          </a>
          <el-tooltip
            class="item"
            effect="dark"
            content="零零碎碎"
            placement="bottom"
          >
            <a
              @click="onk(9)"
              class="hidden block mt-4 mr-4 sm:inline-block sm:mt-0 text-black-200 hover:text-red-400"
            >
              <svg class="inline-block icon" aria-hidden="true">
                <use xlink:href="#icon-24"></use>
              </svg>
              日志
            </a>
          </el-tooltip>
          <!--                    <a @click="onk(10)"-->
          <!--                       class="hidden block mt-4 mr-4 sm:inline-block sm:mt-0 text-black-200 hover:text-red-400">-->
          <!--                        <svg class="inline-block icon" aria-hidden="true">-->
          <!--                            <use xlink:href="#icon-changyongziyuan-->
          <!--"></use>-->
          <!--                        </svg>-->
          <!--                        书籍-->
          <!--                    </a>-->
          <a
            @click="onk(12)"
            class="hidden block mt-4 mr-4 heaa sm:inline-block sm:mt-0 text-black-200 hover:text-red-400"
          >
            <!--                        <svg class="inline-block icon" aria-hidden="true">-->
            <!--                            <use xlink:href="#icon-comments"></use>-->
            <!--                        </svg>-->
            留言
          </a>
          <a
            @click="onk(13)"
            class="hidden block mt-4 mr-4 heaa sm:inline-block sm:mt-0 text-black-200 hover:text-red-400"
          >
            <!--                        <svg class="inline-block icon" aria-hidden="true">-->
            <!--                            <use xlink:href="#icon-bokeyuan-->
            <!--"></use>-->
            <!--                        </svg>-->
            博客园
          </a>
          <a
            @click="onk(14)"
            class="hidden block mt-4 mr-4 heaa sm:inline-block sm:mt-0 text-black-200 hover:text-red-400"
          >
            <!--                    <svg class="inline-block icon" aria-hidden="true">-->
            <!--                        <use xlink:href="#icon-gitee-fill-round"></use>-->
            <!--                    </svg>-->
            Gitee
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Headers',
  data () {
    return {
      num: ''
    }
  },
  methods: {
    onk (num) {
      switch (num) {
        case 1:
          this.$router.push('/Indexs')
          break;
        case 2:
          this.$router.push('/TagText')
          break;
        case 3:
          this.$router.push('./Resource')
          break;
        case 4:
          this.$router.push('./Classify')
          break;
        case 5:
          this.$router.push('./Timeline')
          break;
        case 6:
          this.$router.push('./Photo')
          break;
        case 7:
          this.$router.push('./Navigation')
          break;
        case 8:
          this.$router.push('./About')
          break;
        case 9:
          this.$router.push('./Talk')
          break;
        case 10:
          this.$router.push('./Books')
          break;
        case 11:
          this.$router.push('./PersonalNavigation')
          break;
        case 12:
          this.$router.push('./SnLeave')
          break;
        case 13:
          window.open("https://www.cnblogs.com/ouyangkai/")
          break;
        case 14:
          window.open("https://gitee.com/kaiouyang-sn")
          break; case 15:
          this.$router.push('./SnVideo')
          break;
        default:
          this.$router.push('./Index')
          break;
      }

    },
    afterform () {
      this.$router.push('/Afterform')
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";

  .header-sn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    // background-color: #795da3;
    @apply p-2 bg-white;
    height: 55px;
    @include boxshow2;

    .heaa {
      float: right;
      /*background-color: #1b1e21;*/
    }
  }

  .box {
    width: 400px;
    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>