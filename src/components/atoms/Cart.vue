<template>
  <div>
    <img :alt="cart.alt" :src="require(`../../assets/icons/${cart.src}`)" class="cart">
    <p class="cart-status">{{cart.cartStatus}}</p>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    props: {
      cart: Object
    }
  }
</script>

<style lang="scss" scoped>
  .cart {
    display: inline-block;
    position: relative;
    padding: 0 3px;
    margin:  0 0 -1.5px 0;
    width: 15px;
    height: 12px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .cart-status {
    display: inline-block;
    position: relative;
    padding: 0 3px;
    font-size: 12px;
    letter-spacing: 2px;
    font-family: "Montserrat";
    cursor: default;
  }
</style>