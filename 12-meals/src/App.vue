<script setup>
import { useMealsStore } from "./store/meals"

const meals = useMealsStore()
</script>

<template>
  <h1><i class="ri-terminal-box-line"></i>汉堡数据</h1>
  <ol>
    <li v-for="meal in meals.data">
      <ol>
        <li><img :src="meal.img" /></li>
        <li>id: {{ meal.id }}</li>
        <li>title: {{ meal.title }}</li>
        <li>desc: {{ meal.desc }}</li>
        <li>price: {{ meal.price }}</li>
      </ol>
    </li>
  </ol>
</template>

<style scoped>
</style>
