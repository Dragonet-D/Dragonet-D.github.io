<template>
  <div class="good_job">
    <div class="next_btn_wrapper">
      <img src="./goodjob.png" alt="">
      <div
        class="next_btn_content"
        @click="goNextPage"
      >
        <img src="./next-btn.png" alt="">
      </div>
    </div>
    <audio ref="audio" src="./static/MonkeyBusiness/13.mp3"></audio>
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        default: ''
      }
    },
    mounted() {
      if (this.$refs.audio) {
        this.$refs.audio.play()
      }
    },
    methods: {
      goNextPage() {
        this.$emit('goNextpage')
      }
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";
  .good_job {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    z-index: 100;
    background-color: rgba(177, 247, 247, .9);
    .next_btn_wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      .next_btn_content{
        position: absolute;
        width: percent(120, 1280);
        height: percent(120, 720);
        right: percent(15, 1280);
        bottom: percent(105, 720);
      }
    }
  }
</style>
