<template>
  <Headers></Headers>

  <router-view class="home-router"></router-view>
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
</style>
