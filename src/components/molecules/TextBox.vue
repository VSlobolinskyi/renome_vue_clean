<template>
  <div class="text-box">
    <h2 class="text-box__title">{{title}}</h2>
    <p class="text-box__subTitle">{{subTitle}}</p>
  </div>
</template>

<script>
  export default {
    name: "HomeTextBox",
    props: {
      title: String,
      subTitle: String
    }
  }
</script>

<style lang="scss" scoped>
  .text-box {
    position: absolute;
    width: 100%;
    left: 20px;
    bottom: 120px;
    cursor: default;
    z-index: 1;

    &__subTitle {
      color: $crimson;
      margin: 0 0 30px;
      font-size: 22px;
      letter-spacing: 2px;
      font-family: $montserrat;
      cursor: default;
    }

    &__title {
      color: $white;
      margin: 0 0 5px;
      padding: 0;
      font-size: 28px;
      letter-spacing: 3px;
      font-family: $axis;
      cursor: default;
    }
  }

</style>