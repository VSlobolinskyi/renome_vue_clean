<template>
  <ul class="cart-menu cart-menu--hidden" id="cartMenu">
    <li>
      <a class="cart-menu__text" href="#">{{cartMenu.cost}}</a>
    </li>
    <li>
      <a class="cart-menu__text" href="#">{{cartMenu.view}}</a>
    </li>
    <li>
      <a class="cart-menu__text" href="#">{{cartMenu.checkout}}</a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "CartMenu",
    props: {
      cartMenu: Object
    },
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
  
  .cart-menu {
    position: fixed;
    list-style-type: none;
    opacity: 0;
    top: 44px;
    background-color: $white;
    padding: 0;
    margin: 0;
    width: 115px;
    height: 138px;
    right: 35px;
    z-index: 3;
    transition: opacity 0.4s, top 0.4s;
  }

  .cart-menu--fade {
    opacity: 1;
    top: 54px;
  }

  .cart-menu--hidden {
    pointer-events: none;
  }

  .cart-menu__text {
    display: block;
    margin: 0;
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    letter-spacing: 1px;
    color: $darkBlue;
    font-family: "Montserrat";
    -webkit-tap-highlight-color: transparent;
  }

  .cart-menu__text:hover {
    color: $crimson;
  }
</style>
