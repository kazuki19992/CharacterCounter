<template>
  <TextImport/>
  <!-- <TextOverview/> -->
</template>

<script>
import TextImport from './components/TextImport'
// import TextOverview from './components/TextOverview'

export default {
  name: 'App',
  components: {
    TextImport,
    // TextOverview
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
