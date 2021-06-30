<template>
  <img v-on:click="change" :alt="currentIcon.alt" :src="require(`/src/assets/icons/${currentIcon.src}`)" class="menu-icon">
</template>

<script>
  export default {
    name: "HamburgerButton",
    data(){
      return {
        currentIcon: this.menuIcon.hamburgerButton,
        menuClosed: true
      }
    },
    props: {
      menuIcon: Object
    },
    methods: {
      change: function() {
        if(this.menuClosed){
          this.currentIcon = this.menuIcon.cross 
          this.menuClosed = false
        }
        else {
          this.currentIcon = this.menuIcon.hamburgerButton
          this.menuClosed = true
        }
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
    -webkit-user-drag: none;
    user-select: none;

    &--hidden {
      display: none
    }
  }
</style>