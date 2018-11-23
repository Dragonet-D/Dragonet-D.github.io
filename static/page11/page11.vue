<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page11 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page11.png" alt="">
          <goodjob
            @goNextpage="goNextpage"
            v-show="goToNextStatus === 1"
          ></goodjob>
          <div class="page_start_wrapper">
            <div class="empty">
              <div class="voice_btns">
                <div class="voice"></div>
                <div class="close"></div>
              </div>
              <div class="target_box">
                <draggable
                  class="target_box_content"
                  v-model="list2"
                  :options="dragOptions"
                  :move="onMove"
                >
                  <div
                    class="box_content"
                    v-for="item in list2"
                  >
                    <img :src="item.src" alt="">
                  </div>
                </draggable>
              </div>
            </div>
            <div class="btn_wrapper" @click="cancleAnswer">
              <div class="btns_content">
                <div
                  class="choose_btns"
                >
                  <draggable
                    v-model="list"
                    :options="dragOptions"
                    :move="onMove"
                    @start="isDragging=true"
                    @end="isDragging=false"
                    style="width: 100%;height: 100%"
                  >
                    <div
                      v-for="item in list"
                      class="choose_btn"
                      :class="item.className"
                      :key="item.id"
                      :data-id="item.id"
                      @click.stop
                    >
                      <img :src="item.src" alt="">
                    </div>
                  </draggable>
                </div>
                <div
                  class="start_btn needclick"
                  @click.stop="goNext(13, goToNextStatus)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Page13 v-if="!pageStatus"></Page13>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Page13 from 'components/page13/page13'
  import {goToNext, patterns} from 'common/js/mixins'

  let list = [
    {
      id: '4',
      className: 'choose_a',
      src: './src/components/page11/page11-4.png'
    },
    {
      id: '3',
      className: 'choose_b',
      src: './src/components/page11/page11-3.png'
    },
    {
      id: '2',
      className: 'choose_c',
      src: './src/components/page11/page11-2.png'
    },
    {
      id: '1',
      className: 'choose_d',
      src: './src/components/page11/page11-1.png'
    }
  ]

  export default {
    mixins: [goToNext, patterns],
    data() {
      return {
        list: list,
        list2: [],
        editable: true,
        isDragging: false,
        delayedDragging: false,
        goToNextStatus: false
      }
    },
    methods: {
      cancleAnswer() {
        this.list = list
        this.list2 = []
        this.editable = true
      },
      goNextpage() {
        this.goNext(13)
      }
    },
    components: {
      Page13
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";
</style>
