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
  },

}
</script>
<style lang="scss">
  .home-router {
    transition: all 1.8s linear;
  }

  // 滚动条美化
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    width: 6px;
    background: rgba(#101f1c, 0.1);
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(#101f1c, 0.5);
    background-clip: padding-box;
    min-height: 28px;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(#101f1c, 1);
  }
</style>
