<template>
    <div class="cart-bar">
        <div class="cart-bag">
            <img :src="cartBag" alt="" />
            <span class="total-count">12</span>
        </div>
        <div class="total-amount">
            <!-- <div class="no-goods">
                未选购商品
            </div> -->
            <div class="has-goods">
                20
            </div>
        </div>
        <button class="checkout">去结算</button>
    </div>
</template>

<script setup>
import cartBag from "../../assets/bag.png"
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
}

.cart-bag {
    position: absolute;
    width: 100rem;
    bottom: -10rem;
}
.total-count {
    background-color: red;
    border-radius: 50%;
    position: absolute;
    right: -20rem;
    top: 10rem;
    padding: 6rem;
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
}
.checkout {
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
