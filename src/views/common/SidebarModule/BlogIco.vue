<!--
 * @Author: your name
 * @Date: 2021-08-30 15:22:12
 * @LastEditTime: 2021-08-30 15:32:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\SidebarModule\BlogIco.vue
-->
<template>
  <div class="index_si_contact">
    <div class="index-si-ioc">
      <div class="index-si-ioc-2">
        <a href="tencent://message/?uin=851039536&Site=http://77ya.com/&Menu=yes">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ11" />
          </svg>
        </a>
      </div>
      <div class="index-si-ioc-2">
        <a target="_blank" href="https://gitee.com/kaiouyang-sn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gitee-fill-round" />
          </svg>
        </a>
      </div>
      <div class="index-si-ioc-2">
        <a>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin3" />
          </svg>
        </a>
      </div>
      <div class="index-si-ioc-2">
        <a>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liulan
" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/sass/com";
  @import "../../../assets/sass/uitl.scss";
  .index_si_contact {
    @include w-h(97%, 80px);
    @apply mb-2 mt-1 m-auto shadow rounded;
    @apply bg-gray-50;

    .index-si-ioc {
      @include w-h(60%, 100%);
      @apply flex pl-3 rounded m-auto;
      @apply bg-white items-center;

      .index-si-ioc-2 {
        @apply flex-1 py-1 m-1;
        @apply text-center;
      }
    }
  }
</style>