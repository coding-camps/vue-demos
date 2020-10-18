<script setup>
import { ref, reactive } from "vue"

import TabItem from "./components/TabItem.vue"


// 创建一个变量来记录选项卡的状态
const current = ref(0) // 0 表示球员， 1 表示球队

const player = reactive({
    name: "梅西",
    img: "/images/messi.png",
    rate: 1,
    hot: 433760
})

const team = reactive({
    name: "法国队",
    img: "/images/法国.jpg",
    rate: 1,
    hot: 333760
})

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
        <TabItem :item="player"/>
        
      </div>

      <div class="tab-list" v-show="current === 1">

        <!-- 球队 -->
        <TabItem :item="team"/>
        

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

</style>
