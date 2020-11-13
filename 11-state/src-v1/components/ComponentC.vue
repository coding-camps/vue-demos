<script setup>
import { ref, inject } from "vue"

// const { count, increment } = inject("count")
// const countStore = inject("count")
// import { countStore } from "../store/count"

// 使用Pinia
// 引入store钩子
import { useCountStore } from "@/store/countStore"
// 获取store实例
const countStore = useCountStore()


</script>
<template>
    <!-- <h4>
        ComponentC --  {{ count }} --
        <button @click="increment">按钮</button>
    </h4> -->
    <h4>
        ComponentC --  {{ countStore.count }} --
        <button @click="countStore.increment">按钮</button>
    </h4>

</template>
