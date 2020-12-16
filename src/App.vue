<template>
  <Headers></Headers>
  <!-- vue3.0配置 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>
<script>
export default {
  mounted () {
    document.querySelector('body').setAttribute('style', 'background-color:#f7f7f7')
  }


}
</script>
<style lang="scss">
  @import "assets/sass/com";
  .home-router {
    transition: all 1.8s linear;
  }
  @include scroll;
</style>
