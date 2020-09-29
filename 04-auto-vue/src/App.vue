<script>
export default {
  data() {
    return {
      msg: "嗯！ 我喜欢Vue！ "
    }
  }
}
</script>

<template>
  <h1 class="msg">{{ msg }}</h1>
</template>

<style scoped>
  h1.msg {
    color: green;
  }
</style>
