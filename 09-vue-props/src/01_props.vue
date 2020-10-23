<script setup>
import MyBox from "./components/MyBox.vue"
import { ref } from "vue"

const count = ref(0)
const obj = ref({
    count: 0
})
</script>
<template>
    <h1>我是App根组件</h1>
    <MyBox :count="count" :obj="obj" maxLength="123456"></MyBox>
    <button @click="count++">按钮 count++</button>
    <button @click="obj.count++">按钮obj.count++</button>
</template>
