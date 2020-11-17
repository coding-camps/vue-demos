<template>
    <div class="filter">
        <div class="filter-inner">
            <input class="filter-input" type="text" placeholder="请输入关键字" />
            <i class="ri-search-line"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "MealListFilter.vue"
}
</script>

<style scoped>
.filter {
    padding: 20rem 40rem;
    border-bottom: 1px solid gray;
}

.filter-inner {
    height: 80rem;
    display: flex;
    align-items: center;
    position: relative;
}

.filter-inner i {
    font-size: 30rem;
    color: rgb(184, 184, 184);
    position: absolute;
    left: 30rem;
}

.filter-input {
    background-color: rgb(242, 242, 242);
    border:none;
    width: 100%;
    height: 100%;
    border-radius: 40rem;
    outline: none;
    padding: 0 40rem 0 80rem;
}
</style>
