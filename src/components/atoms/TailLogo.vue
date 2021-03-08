<template>
  <p class="tail-logo">{{logoText}}</p>
</template>

<script>
  export default {
    name: "TailLogo",
    props: {
      logoText: String
    }
  }
</script>

<style lang="scss" scoped>
  .tail-logo {
    align-self: center;
    font-size: 20px;
    letter-spacing: 2px;
    font-family: $pacifico;
    cursor: default;
  }
</style>