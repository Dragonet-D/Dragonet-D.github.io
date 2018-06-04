<template>
  <div id="app">
    <header-nav/>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderNav from 'components/HeaderNav/HeaderNav'

export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
