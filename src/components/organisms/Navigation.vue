<template>
  <div class="navigation">
    <Logo :logoText="navigation.logo"/>
    <NavigationIcons :icons="navigation.icons" :submenuOrderProp="submenuOrder" @open="openMenu" @close="closeMenu"/>
    <CartMenu :cartMenu="cartMenu"/>
    <MainMenu :mainMenu="mainMenu" :submenuOrder="submenuOrder" @updateOrder="updateOrder"/>
  </div>	
</template>

<script>
  import Logo from "../atoms/Logo.vue"
  import NavigationIcons from "../molecules/NavigationIcons.vue"
  import CartMenu from "../molecules/CartMenu.vue"
  import MainMenu from "../molecules/MainMenu.vue"
  export default {
    name: "Navigation",
    components: {
      Logo,
      NavigationIcons,
      CartMenu,
      MainMenu
    },
    props: {
      navigation: Object,
      cartMenu: Object,
      mainMenu: Object
    },
    data() {
      return {
        submenuOrder: ["root"]
      }
    },
    methods: {
      updateOrder: function(update) {
        this.submenuOrder = update;
      },
      openMenu: function() {
        let menu = document.getElementById("root");
        let body = document.getElementById("body");
        console.log(body);
        body.classList.add("body--disable-scroll");
        menu.classList.add("item-claster--visible");
        menu.classList.remove("menu--hidden");
        menu.classList.toggle("menu--fade");
      },
      closeMenu: function() {
        let menu = document.getElementById("root");
        let body = document.getElementById("body");
        menu.classList.toggle("menu--fade");
        body.classList.remove("body--disable-scroll");
        setTimeout(this.resetMenu, 400);
      },
      resetMenu: function() {
        let back = document.getElementById("back");
        let menu = document.getElementById("root");
        let clasterToHide = document.getElementById(this.submenuOrder[this.submenuOrder.length - 1]);
        
        clasterToHide.classList.add("item-claster--hidden");
        clasterToHide.classList.remove("item-claster--visible");
        this.submenuOrder.forEach( submenuId => {
          if(submenuId != "root") { 
            document.getElementById(submenuId).classList.add("item-claster--submenu");
          }
        });
        menu.classList.remove("item-claster--hidden");
        menu.classList.remove("item-claster--visible");
        back.classList.add("back--hidden");
        back.classList.remove("back--visibles");
        menu.classList.add("menu--hidden");
        this.submenuOrder = ["root"];
        
      },
    }
  }
</script>

<style lang="scss" scoped>
  .navigation {
    position: fixed;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 25px;
    width: 100%;
    height: 45px;
    top: 0;
    padding: 0 10px 10px;
    background-color: $white;
    z-index: 2;
  }
</style>
