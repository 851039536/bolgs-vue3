<!--
 * @Author: your name
 * @Date: 2021-08-30 15:22:12
 * @LastEditTime: 2021-09-17 14:41:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\SidebarModule\BlogIco.vue
-->
<template>
  <div class="index_si_contact">
    <div class="index-si-ioc">
      <div class="index-si-ioc-2">
        <a
          href="tencent://message/?uin=851039536&Site=http://77ya.com/&Menu=yes"
        >
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
            <use
              xlink:href="#icon-liulan
"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    onMounted(async () => {
      console.log('ico')
    })
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
