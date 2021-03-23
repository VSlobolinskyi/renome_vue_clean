<template>
  <div>
    <p class="article">{{text}}</p>
  </div>
</template>

<script>
  export default {
    name: "Aricle",
    props: {
      text: String
    }
  }
</script>

<style lang="scss">
  .article {
    margin: 0;
    padding: 0;
    font-size: rem(12px);
    letter-spacing: rem(2px);
    line-height: rem(30px);
    color: $darkBlue;
    font-family: $montserrat;
    cursor: default;
  }
</style>