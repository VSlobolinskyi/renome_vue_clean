<template>
  <img v-on:click="change" :alt="currentIcon.alt" :src="require(`/src/assets/icons/${currentIcon.src}`)" class="menu-icon">
</template>

<script>
  export default {
    name: "HamburgerButton",
    data(){
      return {
        currentIcon: this.menuIcon.hamburgerButton
      }
    },
    props: {
      menuIcon: Object
    },
    methods: {
      change: function() {
        console.log("works");
        this.currentIcon = this.menuIcon.cross
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-icon {
    display: inline-block;
    position: relative;
    padding: 0 0 0 3px;
    width: 18px;
    height: 15px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &--hidden {
      display: none
    }
  }
</style>