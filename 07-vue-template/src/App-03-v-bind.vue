<script setup>
import { ref } from "vue"

const imgPath = ref("/images/messi.png")
const imgMubappe = "/images/mbappe.jpg"

const changeImg = () => {
  imgPath.value = "/images/neymar.png"
}

const attrs = {
  id: "box1",
  class: "hello"
}

// const isDisabled = true
// const isDisabled = 0 // false
const isDisabled = "" //true
const isNotDisabled = undefined //false

const attrName = "title"
const attrValue = "这是一个title属性"

</script>

<template>
  <!-- 
    当我们需要为标签动态的设置属性时，需要使用v-bind指令,
      v-bind可以简写为 :
    当我们为一个布尔值设置属性时，
      如果值为true，则元素上有该属性（转换后为true，也算true）
      如果值为false，则元素没有该属性（转换后为false，也算false）
      特殊情况："" 空串，在这里会被当成真值
  -->

  <img src="/images/messi.png" alt="梅西"/>
  <img v-bind:src="imgMubappe" alt="姆巴佩"/>
  <img :[attrName]="attrValue" :src="imgPath" alt="内马尔"/>
  <button @click="changeImg">切换图片</button>

  <hr />

  <div :="attrs"
    style="width: 300px; height: 30px; background-color: lightgreen;margin: 5px;border-radius: 5px; text-align:center;">
    在浏览器查看其id和class属性
  </div>

  <input type="text" :disabled="isDisabled" value="禁用"/>
  /
  <input type="text" :disabled="isNotDisabled" value="没有禁用"/>
</template>

<style scoped>
img {
  width: 200px;
  border: solid 1px blue;
  margin: 5px;
  padding: 3px;
  border-radius: 8px;
}
</style>
