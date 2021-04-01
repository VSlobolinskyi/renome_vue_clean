<template>
  <div>
    <p class="subTitle">{{subTitle}}</p>
  </div>
</template>

<script>
  export default {
    name: "SubTitle",
    props: {
      subTitle: String
    }
  }
</script>

<style lang="scss">
  .subTitle {
    color: $crimson;
    text-transform: uppercase;
    padding: 10px 0 10px;
    margin: 0;
    font-size: rem(11px);
    font-family: $montserrat;
    letter-spacing: 1px;
    cursor: default;
  }
</style>