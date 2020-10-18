<script setup>
import { reactive } from "vue"

const props = defineProps(["item"])

const item = props.item

</script>

<template>
    <div class="tab-item">
        <!-- 图片 -->
        <div class="photo">
            <img :src="item.img" :alt="item.name">
            <span>{{ item.rate }}</span>
        </div>
        <!-- 描述 -->
        <div class="desc">
            <div class="name">{{ item.name }}</div>
            <div class="hot-bar">
                <div class="inner">{{item.hot}}热度</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

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
