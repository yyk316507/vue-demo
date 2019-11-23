<template>
  <div id="app">
    <star :size="48" :score="seller.score"></star>
  </div>
</template>

<script>
import { getSeller } from 'api'
import Star from 'components/star/star'

export default {
  name: 'app',
  components: {
    Star
  },
  data () {
    return {
      seller: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  },
  created () {
    this._getSeller()
  },
  methods: {
    _getSeller () {
      getSeller().then((res) => {
        this.seller = res
      })
    }
  }
}
</script>

<style lang="less">
</style>
