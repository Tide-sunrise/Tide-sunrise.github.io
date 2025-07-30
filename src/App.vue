<template>
<!--  <HelloWorld msg="欢迎，这是张栩嘉的主页"/>-->
  <Homepage/>.
</template>

<script>
import Homepage from "@/views/Homepage.vue";

export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
</style>
