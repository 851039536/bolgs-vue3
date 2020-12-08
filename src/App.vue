<template>
  <div id="nav">
    <Headers></Headers>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>
<script>
export default {
  mounted () {
    document.querySelector('body').setAttribute('style', 'background-color:#f7f7f7')
  },

}
</script>
<style lang="scss">
#nav {
}
</style>
