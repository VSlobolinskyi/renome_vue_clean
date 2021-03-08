<template>
  <p class="navigation-logo">{{logoText}}</p>
</template>

<script>
  export default {
    name: "NavigationLogo",
    props: {
      logoText: String
    }
  }
</script>

<style lang="scss" scoped>
  .navigation-logo {
    font-size: 25px;
    letter-spacing: 3px;
    padding: 0 0 0 10px;
    margin: 0;
    color: $black;
    font-family: $pacifico;
    cursor: default;
  }
</style>