<template>
  <div class="text-box">
    <Title :title="textBox.title"/>
    <SubTitle :subTitle="textBox.subTitle"/>
  </div>
</template>

<script>
  import Title from "../atoms/Title.vue"
  import SubTitle from "../atoms/SubTitle.vue"
  export default {
    name: "HomeTextBox",
    props: ["textBox"],
    props: {
      textBox: Object
    },
    components: {
      Title,
      SubTitle
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
  }
</style>