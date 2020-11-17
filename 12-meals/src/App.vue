<script setup>
// import { useMealsStore } from "./store/meals"

// const meals = useMealsStore()
import MealList from "@/components/meals/MealList.vue";
import MealListFilter from "@/components/filter/MealListFilter.vue";
</script>

<template>
    <MealListFilter></MealListFilter>
    <MealList></MealList>
</template>

<style scoped>
</style>
