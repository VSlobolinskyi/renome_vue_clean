<template>
  <div class="icons">
    <Cart :cart="icons.cart"/>
    <div class="icons__divider"></div>
    <MenuIcon :menuIcon="icons.menuIcon"/>
  </div>	
</template>

<script>
  import Cart from "../atoms/Cart.vue"
  import MenuIcon from "../atoms/MenuIcon.vue"
  export default {
    name: "NavigationIcons",
    components: {
      Cart,
      MenuIcon
    },
    props: ["icons"],
    props: {
      icons: Object
    }
  }
</script>

<style lang="scss" scoped>
  .icons {
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px 10px 0 0;

    &__divider {
      display: inline;
      background-color: $black;
      margin: 0 3px;
      width: 1px;
      height: 15px;
    }
  }
</style>
