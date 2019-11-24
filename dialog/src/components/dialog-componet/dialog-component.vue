<template>
  <transition name="fade">
    <div class="dialog-detail" v-show="visible">
      <div class="dialog-wrapper clear-fix"></div>
      <div class="dialog-close" @click="hide">
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'dialog-component',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>

<style scoped lang='less'>
.dialog-detail {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: blur(10px);//背景毛玻璃效果
  opacity: 1;
  color: #fff;
  background-color: rgba(7, 17, 27, 0.8);
  &.fade-enter-active,.fade-leave-active {
    transition: all 0.5s;
  }
  &.fade-enter,.fade-leave-active {
    opacity: 0;
    background-color: rgba(7, 17, 27, 1);
  }
  .dialog-wrapper {
    display: inline-block;
    width: 100%;
    min-height: 100%;
  }
  .dialog-close {
    position: relative;
    width: 30px;
    height: 30px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size:30px;
  }
}
</style>
