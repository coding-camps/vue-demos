<script setup>
import {useMealsStore} from "@/store/meals"
import Meal from "@/components/meals/Meal.vue"

const meals = useMealsStore()
</script>

<template>
    <div class="meals">
        <Meal v-for="meal in meals.data" :meal="meal"></Meal>
    </div>
</template>

<style scoped>
.meals {
    height: 100vh;
    padding: 120rem 0;
    overflow: auto;
}
</style>