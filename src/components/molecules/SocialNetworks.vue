<template>
  <div class="social-networks">
    <SocialNetworkIcon :icon="icon" :key="index" v-for="(icon, index) in icons" />
  </div>
</template>

<script>
  import SocialNetworkIcon from "../atoms/SocialNetworkIcon.vue"
  export default {
    name: "SocialNetwokrs",
    components: {
      SocialNetworkIcon
    },
    props: ["icons"],
    props: {
      icons: Array
    }
  }
</script>

<style lang="scss" scoped>
  .social-networks {
    display: flex;
    align-self: center;
  }
</style>
