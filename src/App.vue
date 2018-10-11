<template>
  <div id="app">
    <header-component/>
    <router-view/>
    <footer-component/>
    <loading />
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/HeaderComponent"
import FooterComponent from "@/components/layout/FooterComponent"
import Loading from "@/components/loading/index"
export default {
  name: 'App',
  components:{
    HeaderComponent,
    FooterComponent,
    Loading,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
