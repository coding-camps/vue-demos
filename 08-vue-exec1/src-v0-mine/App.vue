<script setup>
import { ref } from "vue"

// 创建一个变量来记录选项卡的状态
const current = ref(0) // 0 表示球员， 1 表示球队
</script>

<template>
  <!-- 选项卡的外部容器 -->
  <div class="tab-wrapper">
    <!-- 选项卡的头部 -->
    <div class="tab-head">
      <div class="tab-btn" :class="{ active: current === 0 }" @click="current = 0">热门球员</div>
      <div class="tab-btn" :class="{ active: current === 1 }" @click="current = 1">热门球队</div>
    </div>
    <!-- 选项卡的主体 -->
    <div class="main">
            <!-- 
                current === 0 显示球员
                current === 1 显示球队
                    v-show 指令，用来设置一个内容是否显示
                        v-show是通过display来设置一个元素是否显示的
            -->
      <div class="tab-list" v-show="current === 0">
        <!-- 球员 -->
        <div class="tab-item">
           <!-- 图片 -->
          <div class="photo">
            <img src="/images/messi.png" alt="梅西">
            <span>1</span>
          </div>
          <!-- 描述 -->
          <div class="desc">
            <div class="name">梅西</div>
            <div class="hot-bar">
              <div class="inner">33682123热度</div>
            </div>
          </div>
        </div>
        <div class="tab-item">
          <div class="photo">
            <img src="/images/neymar.png" alt="内马尔">
            <span>2</span>
          </div>
          <div class="desc">
            <div class="name">内马尔</div>
            <div class="hot-bar">
              <div class="inner">33682123热度</div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-list" v-show="current === 1">

        <!-- 球队 -->
        <div class="tab-item">
          <!-- 图片 -->
          <div class="photo">
            <img src="/images/巴西.jpg" alt="巴西">
            <span>1</span>
          </div>
          <!-- 描述 -->
          <div class="desc">
            <div class="name">巴西</div>
            <div class="hot-bar">
              <div class="inner">33682123热度</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-wrapper {
  width: 600px;
  background-color: blue;
  padding: 20px;
  box-sizing: border-box;
}

.tab-head {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
}

.tab-btn {
  background-color: #fff;
  flex: auto;
  padding: 20px;
  text-align: center;
  font-size: 1.8em;
  cursor: grab;
  transition-duration: 500ms;
}

.active {
  background-color: orangered;
  color: white;
}

.tab-btn:not(.active):hover {
  color: orangered;
}

.tab-list {
  width: 100%;
}

.tab-item {
  display: flex;
  margin-top: 20px;
}

.photo {
  width: 150px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.photo img {
  width: 100%;
  vertical-align: top;
}

.photo span {
  background-color: orange;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 10px;
  color: #fff;
}

.desc {
  display: flex;
  flex: auto;
  justify-content: space-evenly;
  flex-flow: column;
  font-size: 1.8em;
  color: #fff;
  margin-left: 30px;
}

.hot-bar {
  background-color: darkblue;
  border-radius: 0.9em;
  text-indent: 0.5em;
  overflow: hidden;
}

.inner {
  width: 30%;
  border-radius: 0.9em;
  white-space: nowrap;
  background-image: linear-gradient(90deg, orangered 10%, red 50%, darkred 90%);
}
</style>
