<template>
  <div class="icons">
    <Cart :cart="icons.cart" @click="toggleCartMenu"/>
    <div class="icons__divider"></div>
    <MenuIcon :menuIcon="icons.menuIcon" @open="open" @close="close"/>
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
    props: {
      icons: Object,
      submenuOrderProp: Array
    },
    data() {
      return {
        submenuOrder: this.submenuOrderProp
      }
    },
    methods: {
      toggleCartMenu: function() {
        let cartMenu = document.getElementById("cartMenu");
        cartMenu.classList.remove("cart-menu--hidden");
        cartMenu.classList.toggle("cart-menu--fade");
        setTimeout(this.cartMenuUndisplay, 400);
      },
      cartMenuUndisplay: function() {
        if (!cartMenu.classList.contains("cart-menu--fade")) {
          cartMenu.classList.add("cart-menu--hidden");
        }
      },
      close: function() {
        this.$emit('close');
      },
      open: function() {
        this.$emit('open');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icons {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 0 0 0;
    

    &__divider {
      display: inline;
      background-color: $black;
      margin: 0 3px;
      width: 1px;
      height: 15px;
    }
  }
</style>
