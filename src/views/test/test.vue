<!--
 * @Author: your name
 * @Date: 2021-05-06 11:38:40
 * @LastEditTime: 2021-05-06 16:44:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\test\test.vue
-->
<template>
  <div>
    <div>
      <h1 class="color">121212</h1>
    </div>
    <div>
      <h1 class="${styles.color}">121212</h1>
    </div>
  </div>
</template>

<script lang="ts">
  import "../../assets/css/index.css";

  export default {

  }
</script>

<style lang="scss" scoped>
  .color {
    font-size: 12px;
    // color: $back_sidebar;
  }
</style>