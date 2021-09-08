<!--
 * @Author: 站点信息模块
 * @Date: 2021-08-17 11:54:18
 * @LastEditTime: 2021-09-08 10:58:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\SidebarModule\BlogInformation.vue
-->
<template>
  <div class="BlogInformation">
    <div class="index-si-count-title">站点信息</div>
    <div class="index-si-count-div">
      <div class="index-si-count-frame">
        <div class="index-si-count-frame-title">文章数量:</div>
        <div class="index-si-count-frame-text">{{ ArticleCount }} 篇</div>
      </div>
      <div class="index-si-count-frame">
        <div class="index-si-count-frame-title">总字段数:</div>
        <div class="index-si-count-frame-text">{{ TextCount }} 字</div>
      </div>
      <div class="index-si-count-frame">
        <div class="index-si-count-frame-title">总访问量:</div>
        <div class="index-si-count-frame-text">{{ ReadCount }} ℃</div>
      </div>
      <div class="index-si-count-frame">
        <div class="index-si-count-frame-title">最后更新:</div>
        <div class="index-si-count-frame-text">{{ Articledata }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ['ArticleCount', 'TextCount', 'ReadCount', 'Articledata'],
  setup() {

    return {
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>