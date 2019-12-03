<template>
  <div>
   <van-button type="primary">开始吧</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'contactlist',
  data () {
    return {
    }
  },
  components: {
    [Button.name]: Button
  },
  mounted () {
    this.login()
  },
  methods: {
    async login () {
      let userInfo = {
        'telephone': '1352035',
        'password': '352035'
      }
      let res = await
      this.$http.login(userInfo)
    }
  }
}
</script>

<style scoped lang='less'>

</style>
