<script setup>
const arr = ["box1", "box2", "box3"]
const arr2 = [{ box1: true }, { box2: false }, { box3: true }]
const style = {
    color: "red",
    backgroundColor: "#bfa"
}
</script>
<template>
    <h1 class="header">我爱Vue</h1>
    <div :class="arr1">我是div 1</div>
    <div :class="arr2">我是div 2</div>
    <div style="background-color: linghtblue;">我是div 3: 使用内联样式</div>
    <div :style="style">我是div 4: 使用内联样式， 动态</div>
</template>
<style scoped>
.header {
    background-color: orange;
}
</style>
