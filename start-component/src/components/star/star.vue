<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass, index) in itemClasses"
    :key="index"
    :class="itemClass"
    class="star-item"></span>
  </div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'
export default {
  name: 'star',
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType () {
      return `star-${this.size}`
    },
    itemClasses () {
      let result = []
      const score = Math.floor(this.score * 2) / 2
      const hasDecimal = score % 1 !== 0
      const integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }
      if (hasDecimal) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style scoped lang="less">
.star {
  display: flex;
  align-items: center;
  justify-content: center;
}
.star-item {
  background-repeat: no-repeat;
}
.star-48 {
  .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
    &:last-child {
      margin-right: 0;
    }
    &.on {
      .bg-image('star48_on')
    }
    &.half {
      .bg-image('star48_half')
    }
    &.off {
      .bg-image('star48_off')
    }
  }
}
</style>
