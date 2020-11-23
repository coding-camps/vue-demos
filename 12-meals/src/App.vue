<script setup>
import {useMealsStore} from "@/store/meals"
import MealList from "@/components/meals/MealList.vue";
import MealListFilter from "@/components/filter/MealListFilter.vue";
import CartBar from "@/components/cart/CartBar.vue";

const meals = useMealsStore()
</script>

<template>
    <MealListFilter></MealListFilter>
    <MealList :desc="true" :meals="meals.filterMeals"></MealList>
    <CartBar></CartBar>
</template>

<style scoped>
</style>
