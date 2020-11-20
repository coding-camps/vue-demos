<script setup>
import {ref} from "vue";
import {useMealsStore} from "@/store/meals";

const props = defineProps(["meal"])

const meals = useMealsStore()

</script>

<template>
    <div class="counter">
        <template v-if="props.meal.count>0">
            <button class="sub" @click="meals.subMealFromCart(props.meal)"><i class="ri-subtract-line"></i></button>
            <span>{{ props.meal.count }}</span>
        </template>
        <button class="add" @click="meals.addMealToCart(props.meal)"><i class="ri-add-line"></i></button>
    </div>
</template>

<style scoped>
.counter {
    display: flex;
}

.counter span {
    font-size: 30rem;
    margin: 0 10rem;
}

.sub, .add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34rem;
    height: 36rem;
    background-color: rgb(234, 178, 0);
    border: none;
    border-radius: 50%;
    font-size: 36rem;
}

.sub {
    background-color: white;
    border: 1px solid black;
}

</style>
