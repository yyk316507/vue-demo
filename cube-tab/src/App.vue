<template>
  <div id="app">
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
import Tab from './components/tab/tab'
import Goods from './components/goods/goods'
import Seller from './components/seller/seller'
import Rating from './components/rating/rating'
export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    Tab
  },
  computed: {
    tabs () {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评论',
          component: Rating,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  }
}
</script>

<style lang="less">
#app .tab-wrapper {
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
