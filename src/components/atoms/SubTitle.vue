<template>
  <div>
    <p :class="{'subTitle--uppercase': subTitle.uppercase}" class="subTitle">{{subTitle.innerText}}</p>
  </div>
</template>

<script>
  export default {
    name: "SubTitle",
    props: {
      subTitle: Object
    }
  }
</script>

<style lang="scss">
  .subTitle {
    color: $crimson;
    margin: 0 0 30px;
    font-size: 22px;
    letter-spacing: 2px;
    font-family: $montserrat;
    cursor: default;

    &--uppercase {
      text-transform: uppercase;
      padding: 10px 0 10px;
      margin: 0;
      font-size: rem(11px);
      letter-spacing: 1px;
    }
  }
</style>