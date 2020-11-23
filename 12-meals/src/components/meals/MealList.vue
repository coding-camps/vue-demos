<script setup>
import Meal from "@/components/meals/Meal.vue"
const props = defineProps(["meals"])
</script>

<template>
    <div class="meals">
        <Meal :desc="$attrs.desc" v-for="meal in props.meals" :meal="meal" :key="meal.id"></Meal>
        <div v-if="!props.meals || props.meals.length == 0" class="no-found">
            没有找到指定的商品
        </div>
    </div>
</template>

<style scoped>
.meals {
    height: calc(100vh - 120rem);
    padding-bottom: 150rem;
    overflow: auto;
}
.no-found {
    font-size: 40rem;
    color: darkgray;
    height: 280rem;
    text-align: center;
    padding: 100rem;
}
</style>
