<template>
  <div>
    <h2 class="title">{{title}}</h2>
  </div> 
</template>

<script>
  export default {
    name: "Title",
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  .title {
    margin: 0;
    padding: 0;
    font-size: 38px;
    letter-spacing: 8px;
    color: $darkBlue;
    font-family: $axis;
    cursor: default;
  }
</style>