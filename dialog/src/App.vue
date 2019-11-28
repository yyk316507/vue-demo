<template>
  <div id="app">
    <button @click="showDialog">点击一下</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    showDialog () {
      this.$createDialogComponent({
        $props: {
          seller: 'seller'
        }
      }).show()
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
