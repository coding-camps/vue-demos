<template>

    <Checkout
        @close="showCheckout=false"
        :is-show="showCheckout"
    ></Checkout>

    <CartDetails :is-show="showDetails" @hide="showDetails = false"></CartDetails>

    <div class="cart-bar">
        <div class="cart-bag">
            <img :src="cartBag" alt="" />
            <span v-show="meals.totalCount > 0" class="total-count"> {{ meals.totalCount }}</span>
        </div>
        <div class="total-amount">
            <div v-show="meals.totalCount <= 0" class="no-goods">
                未选购商品
            </div>
            <div v-show="meals.totalCount > 0" @click="showDetails = true" class="has-goods">
                {{ meals.amount }}
            </div>
        </div>
        <button @click="showCheckout = meals.totalCount > 0" class="checkout-btn">去结算</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import cartBag from "../../assets/bag.png"
import {useMealsStore} from "@/store/meals";
import CartDetails from "@/components/cart/CartDetails.vue";
import Checkout from "../checkout/Checkout.vue";

const meals = useMealsStore()

const showDetails = ref(false)
const showCheckout = ref(false)
</script>

<style scoped>
.cart-bar {
    background-color: rgb(58, 58, 58);
    font-size: 36rem;
    height: 100rem;
    width: 710rem;
    position: fixed;
    bottom: 30rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 60rem;
    z-index: 9999;
}

.cart-bag {
    position: absolute;
    width: 100rem;
    bottom: -10rem;
}
.total-count {
    min-width: 40rem;
    height: 40rem;
    text-align: center;
    line-height: 40rem;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    right: -20rem;
    top: 10rem;
    color: white;
    font-weight: bold;
}
.total-amount {
    margin-left: 140rem;
    color: rgb(158, 158, 158);
    line-height: 100rem;
}
.no-goods, .has-goods {
    color: rgb(158, 158, 158);
    font-size: 36rem;
    font-weight: bold;
}
.has-goods {
    color: white;
}
.has-goods::before {
    content: "¥";
    font-size: 28rem;
    margin-right: 10rem;
}
.checkout-btn {
    background-color: rgb(248, 188, 0);
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 200rem;
    border-radius: 60rem;
    border: none;
    font-size: 36rem;
}
</style>
