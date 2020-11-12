<script setup>
import { ref, inject } from "vue"

// const { count, increment } = inject("count")
// const countStore = inject("count")
import { countStore } from "../store/count"


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
