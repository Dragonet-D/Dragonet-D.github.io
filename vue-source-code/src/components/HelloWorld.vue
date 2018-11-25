<template>
  <div style="display:inline-block;width:50%;">
    <div class="show-content" id="show-content"></div>
  </div>
</template>
<script>
import {testData} from './test'
import showdown from 'showdown'

export default {

  data () {
    return {
      'content': testData,
      'converter': null
    }
  },
  watch: {
    // 'content':'contentChanged'
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.converter = new showdown.Converter()
      document.getElementById('show-content').innerHTML = this.converter.makeHtml(this.content)
    },
    contentChanged () {
      document.getElementById('show-content').innerHTML = this.converter.makeHtml(this.content)
    }
  }
}
</script>
<style lang="scss" scoped>
  $background: "red";
  .show-content {
    background-color: $background;
  }
</style>
