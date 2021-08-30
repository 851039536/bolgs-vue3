<!--
 * @Author: your name
 * @Date: 2021-08-30 15:38:59
 * @LastEditTime: 2021-08-30 16:13:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\SidebarModule\BlogTag.vue
-->
<template>
  <div class="index-si-tag-div">
    <div
      class="transition duration-500 ease-in-out transform index-si-tag-text hover: hover:scale-110 hover:text-red-600"
    >
      <a>{{ title }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title'],
  }
</script>

<style lang="scss" scoped>
  .index-si-tag-div {
    @apply inline-flex;

    .index-si-tag-text {
      @apply flex-1 p-1;
      @apply text-gray-700 text-sm text-center m-1 bg-gray-100 rounded-sm;
    }
  }
</style>
