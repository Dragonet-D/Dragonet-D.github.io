<template>
  <transition name="page_wrapper">
    <div class="page_wrapper">
      <div class="page79 page" v-show="pageStatus">
        <div class="page_content">
          <img class="page_bg" src="./page79.png" alt="">
          <div class="content_inner">
            <div class="top_bar">
              <div class="progress_bar">
                <div class="progress_content"></div>
              </div>
              <div class="voice"></div>
            </div>
            <div class="drag_wrapper">
              <div class="drag drag_left">
                <div class="drag_left_content">
                  <div class="drag_drag drag_1">
                    <img src="./page79-1.png" alt="">
                  </div>
                  <div class="drag_drag drag_2">
                    <img src="./page79-2.png" alt="">
                  </div>
                  <div class="drag_drag drag_3">
                    <img src="./page79-3.png" alt="">
                  </div>
                  <div class="drag_drag drag_4">
                    <img src="./page79-4.png" alt="">
                  </div>
                </div>
              </div>
              <div class="drag drag_right">
                <div class="drag_left_content">
                  <div class="drag_drag drag_1">
                    <img src="./page79-1.png" alt="">
                  </div>
                  <div class="drag_drag drag_2">
                    <img src="./page79-2.png" alt="">
                  </div>
                  <div class="drag_drag drag_3">
                    <img src="./page79-3.png" alt="">
                  </div>
                  <div class="drag_drag drag_4">
                    <img src="./page79-4.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {goToNext} from 'common/js/mixins'
  import draggable from 'vuedraggable'

  export default {
    mixins: [goToNext],
    components: {
      draggable
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/pure.scss";

  .page_content {
    .content_inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .top_bar {
        height: percent(105, 720);
        display: flex;
        .progress_bar {
          flex: 1;
          height: 100%;
          position: relative;
          .progress_content {
            position: absolute;
            height: percent(30, 105);
            border-radius: 20px;
            background-color: #f15a29;
            top: percent(40, 105);
            left: percent(40, 1280);
            width: percent(925, 1080);
            // 85.64815%
          }
        }
        .voice {
          width: percent(90, 1280);
          height: percent(90, 105);
          margin-top: percent(5, 720);
          margin-right: percent(20, 1280);
          border-radius: 50%;
          overflow: hidden;
        }
      }
      .drag_wrapper {
        height: percent(615, 720);
        position: relative;
        .drag {
          position: absolute;
          width: percent(400, 1280);
          height: percent(400, 615);
          box-sizing: border-box;
          top: percent(120, 615);
        }
        .drag_left {
          left: percent(101, 1280);
          .drag_left_content {
            position: relative;
            width: 100%;
            height: 100%;
            .drag_drag {
              position: absolute;
              width: percent(199, 400);
              height: percent(199, 400);
            }
            .drag_1 {
              top: 0;
              left: 0;
            }
            .drag_2 {
              top: 0;
              right: 0;
            }
            .drag_3 {
              left: 0;
              bottom: 0;
            }
            .drag_4 {
              right: 0;
              bottom: 0;
            }
          }
        }
        .drag_right {
          @extend .drag_left;
          left: percent(640, 1280);
        }
      }
    }
  }
</style>
