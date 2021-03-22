<template>
  <div class="social-networks">
    <a :icon="icon" :key="index" v-for="(icon, index) in icons" :href="icon.href">
      <img :src="require(`/src/assets/icons/${icon.src}`)" :alt="icon.alt" class="social-networks__icon">
    </a>
  </div>
</template>

<script>
  export default {
    name: "SocialNetwokrs",
    props: {
      icons: Array
    }
  }
</script>

<style lang="scss" scoped>
  .social-networks {
    display: flex;
    align-self: center;

    &__icon {
      width: 33px;
      height: 33px;
      padding: 0 5px;
    }
  }
</style>
