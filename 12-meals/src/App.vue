<script setup>
// import { useMealsStore } from "./store/meals"

// const meals = useMealsStore()
import MealList from "@/components/meals/MealList.vue";
import MealListFilter from "@/components/filter/MealListFilter.vue";
import CartBar from "@/components/cart/CartBar.vue";
</script>

<template>
    <MealListFilter></MealListFilter>
    <MealList></MealList>
    <CartBar></CartBar>
</template>

<style scoped>
</style>
