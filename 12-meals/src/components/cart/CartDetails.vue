<script setup>
import {ref} from "vue"
import {useMealsStore} from "@/store/meals"
import Mask from "@/components/ui/Mask.vue";
import MealList from "@/components/meals/MealList.vue";
import Dialog from "../ui/Dialog.vue";

const meals = useMealsStore()
const showDialog = ref(false)
const emits = defineEmits()

const okHandler = () => {
    // ① 把购物车清空
    meals.clearCart()

    // ② 关闭对话框 Dialog
    // 因为确认和取消都会关闭对话框，因此该功能改为自身
    // showDialog.value =false

    // ③ 关闭 CartDetails
    emits("hide")
}

</script>

<template>
    <Mask style="z-index: 999;">
        <Dialog
            @ok="okHandler"
            msg="请确认是否清空购物车"
            @hide="showDialog = false"
            :is-show="showDialog"
        ></Dialog>
        <div class="cart-details">
            <div class="header">
                <h2>餐品详情</h2>
                <a href="javascript:;" @click="showDialog=true">
                    <i class="ri-delete-bin-line"></i>
                    清空购物车
                </a>
            </div>
            <MealList :desc="false" :meals="meals.cartMeals"></MealList>
        </div>
    </Mask>
</template>

<style scoped>
.cart-details {
    font-size: 36rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: white;
    overflow: auto;
    border-top-left-radius:40rem;
    border-top-right-radius:40rem;
}

.meals {
    height: auto;
    max-height: calc( 280rem * 4);
}

.header {
    display: flex;
    justify-content: space-between;
    padding: 20rem 40rem;
    background-color: white;
    border-top-left-radius:40rem;
    border-top-right-radius:40rem;
}

.header h2 {
    font-size: 28rem;
}

.header a {
    color: #9f9f9f;
    font-size: 26rem;
    display: flex;
    align-items: center;
}

.header i {
    font-size: 26rem;
    margin-right: 6rem;
}
</style>
