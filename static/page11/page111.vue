<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page11 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page11.png" alt="">
          <div class="page11_start_wrapper">
            <div class="empty">
              <div class="voice_btns">
                <div class="voice"></div>
                <div class="close"></div>
              </div>
              <div class="target_box">
                <div
                  class="box_content"
                  ref="targetbox"
                ></div>
              </div>
            </div>
            <div class="btn_wrapper">
              <div class="btns_content">
                <div class="choose_btns">
                  <div
                    class="choose_btn"
                    v-for="(item, index) in dataList"
                    :class="item.className"
                    @mousedown="chooseAnswer($event, index)"
                    @mousemove="onMoseMove"
                  ></div>
                </div>
                <div
                  class="start_btn needclick"
                  @click="goNext(13)"
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
  import {goToNext} from 'common/js/mixins'

  export default {
    mixins: [goToNext],
    data() {
      return {
        dataList: [
          {
            className: 'choose_a',
            url: './page11-4.png'
          },
          {
            className: 'choose_b',
            url: './page11-3.png'
          },
          {
            className: 'choose_c',
            url: './page11-2.png'
          },
          {
            className: 'choose_d',
            url: './page11-1.png'
          }
        ]
      }
    },
    created() {
      let allAnswers = document.querySelectorAll('.choose_btns .choose_btn')
      console.log(allAnswers)
    },
    methods: {
      chooseAnswer: function (event, index) {
        console.log(index)
        console.log(event)
      },
      onMoseMove() {
        console.log(111)
      }
    },
    components: {
      Page13
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/common.scss";

  .page11_start_wrapper {
    @extend %page_start_wrapper;
    .empty {
      flex: 405;
      .voice_btns {
        width: 100%;
        height: percent(105, 405);
        display: flex;
        justify-content: flex-end;
        .voice {
          cursor: pointer;
          height: percent(90, 105);
          width: percent(80);
          margin-right: percent(20);
          margin-top: percent(15);
          border-radius: 50%;
        }
        .close {
          @extend .voice;
        }
      }
      .target_box {
        height: percent(300, 405);
        display: flex;
        justify-content: flex-end;
        .box_content {
          width: percent(170);
          height: percent(190, 300);
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid red;
          border-radius: percent(22, 170);
          margin-right: percent(15);
          margin-top: percent(90);
        }
      }
    }
    .btn_wrapper {
      flex: 315;
      .btns_content {
        height: percent(190, 315);
        margin-top: percent(60);
        display: flex;
        align-items: center;
        .choose_btns {
          width: percent(1140);
          height: 100%;
          position: relative;
          .choose_btn {
            width: percent(170, 1140);
            height: 100%;
            background-color: aliceblue;
            position: absolute;
            border-radius: percent(22, 170);
            overflow: hidden;
            cursor: pointer;
            border: 1px solid red;
          }
          .choose_a {
            left: percent(15, 1140);
            background: url("./page11-4.png") no-repeat;
            background-size: cover;
          }
          .choose_b {
            left: percent(245, 1140);
            background: url("./page11-3.png") no-repeat;
            background-size: cover;
          }
          .choose_c {
            left: percent(475, 1140);
            background: url("./page11-2.png") no-repeat;
            background-size: cover;
          }
          .choose_d {
            left: percent(705, 1140);
            background: url("./page11-1.png") no-repeat;
            background-size: cover;
          }
        }
        .start_btn {
          width: percent(120);
          height: percent(130, 190);
          border-radius: 50%;
        }
      }

    }
  }
</style>
