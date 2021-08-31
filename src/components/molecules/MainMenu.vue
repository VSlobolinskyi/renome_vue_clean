<template>
  <ul class="menu menu--hidden item-claster" id="root" v-on:click="submenuSwitch">
    <li class="menu__back-item back--hidden" id="back" v-on:click="closeSubmenu">
      <p class="back-item__text">back</p>
      <div class="menu__left-arrow-outline">
        <img :src="require(`../../assets/icons/arrow_left_black.svg`)" class="menu__arrow" alt="Black arrow left">
      </div>
    </li>
    <li class="menu__search-item">
      <input type="text" placeholder="Search..." maxlength="20" class="search__input" id="search" @focus="inputActive" @blur="inputInactive">
      <img :src="require(`../../assets/icons/search_icon.svg`)" class="search__icon search__icon--visible" id="searchIcon" alt="Search icon">
    </li>
    <li>
      <a class="menu__text" href="#">home</a>
    </li>
    <li>
      <a class="menu__text" href="#">about</a>
    </li>
    <li>
      <a class="menu__text" href="#">menu</a>
    </li>
    <li>
      <a class="menu__text" href="#">reservations</a>
    </li>
    <li>
      <a class="menu__text" href="#">blog</a>
    </li>
    <li>
      <div id="features" class="menu__expandable-item">
        <a class="menu__text" href="#">features</a>
        <div class="menu__right-arrow-outline">
          <img :src="require(`../../assets/icons/arrow_right_black.svg`)" class="menu__arrow" alt="Black arrow right">
        </div>
      </div>
      <ul class="item-claster item-claster--submenu item-claster--hidden" id="featuresSubmenu">
        <li class="menu__submenu-item">
          <a class="menu__submenu-text" href="#">One page</a>
        </li>
        <li class="menu__submenu-item">
          <a class="menu__submenu-text"  href="#">Portfolio</a>
        </li>
        <li class="menu__submenu-item">
          <a class="menu__submenu-text"  href="#">Shortcodes</a>
        </li>
      </ul>
    </li>
    <li>
      <a class="menu__text" href="#">shop</a>
    </li>
    <li>
      <a class="menu__text" href="#">contact</a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "MainMenu",
    props: {
      mainMenu: Object,
      submenuOrder: Array
    },
    data() {
      return {
        active: 0
      }
    },
    methods: {
      inputActive: function() {
        searchIcon.classList.toggle("search__icon--hidden");
      },
      inputInactive: function() {
        searchIcon.classList.toggle("search__icon--hidden");
      },
      openSubmenu: function(itemId) {
        let update = this.submenuOrder
        update.push(itemId+"Submenu");
        console.log(update);
        this.$emit('updateOrder', update);
        let clasterToShow = document.getElementById(this.submenuOrder[this.submenuOrder.length - 1]);
        let clasterToHide = document.getElementById(this.submenuOrder[this.submenuOrder.length - 2]);
        clasterToHide.classList.add("item-claster--hidden");
        clasterToHide.classList.remove("item-claster--visible");
        clasterToHide.classList.remove("item-claster--submenu");
        clasterToShow.classList.add("item-claster--visible");
        clasterToShow.classList.remove("item-claster--hidden");
        clasterToShow.classList.add("item-claster--submenu");
        back.classList.remove("back--hidden");
        back.classList.add("back--visible");
      },
      submenuSwitch: function() {
        if(event.target.parentElement.id == "features") {
          this.openSubmenu("features");
        }
      },
      closeSubmenu: function() {  
        console.log(this.submenuOrder);
        let update = this.submenuOrder
        let clasterToHide = document.getElementById(this.submenuOrder[this.submenuOrder.length - 1]);
        let clasterToShow = document.getElementById(this.submenuOrder[this.submenuOrder.length - 2]);
        clasterToHide.classList.add("item-claster--hidden");
        clasterToHide.classList.remove("item-claster--visible");
        clasterToShow.classList.remove("item-claster--submenu");
        clasterToShow.classList.add("item-claster--visible");
        clasterToShow.classList.remove("item-claster--hidden");
        clasterToShow.classList.add("item-claster--submenu");
        if (this.submenuOrder[this.submenuOrder.length - 2] == "root") {
          back.classList.add("back--hidden");
          back.classList.remove("back--visible");
          clasterToShow.classList.remove("item-claster--submenu");
        }
        update.pop();
        this.$emit('updateOrder', update);
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }

  .menu {
    list-style-type: none;
    opacity: 0;
    position: fixed;
    width: 100%;
    padding: 0;
    margin-left:-10px;
    top: 20px;
    background-color: $white;
    z-index: 2;
    transition: opacity 0.4s, top 0.4s;
  }

  .menu--fade {
    opacity: 1;
    top: 30px;
    width: 100%;
  }

  .menu--hidden {
    pointer-events: none;
    width: 100%;
  }

  .menu_search-item {
    position: relative;
    display: flex;
  }

  .search__input {
    border: none;
    display: inline-block;
    padding-left: 10px;
    width: 100%;
    font-size: 12px;
    line-height: 65px;
    font-family: "Montserrat";
  }

  .search__input:focus {
    outline: none;
  }

  .search__input::placeholder {
    color: $inputGray;
    letter-spacing: 2px;
  }

  .search__icon {
    display: inline-block;
    position: absolute;
    right: 10px;
    width: 18px;
    height: auto;
    top: 18px;
  }

  .search__icon--hidden {
    display: none;
  }

  .menu__text {
    display: block;
    border-top: 2px solid $menuGray;
    padding: 0 0 0 10px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 65px;
    color: #000000;
    font-family: "Montserrat";
    -webkit-tap-highlight-color: transparent;
  }

  .menu__text:hover {
    color: $crimson;
  }

  .menu__back-item {
    position: relative;
  }

  .back--hidden {
    display: none;
  }

  .back--visible {
    visibility: visible;
    pointer-events: auto;
    background-color: $white;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .back-item__text {
    text-align: right;
    text-transform: uppercase;
    margin: 0;
    padding: 0 10px 0 0;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 65px;
    color: $black;
    font-family: "Montserrat";
  }

  .back-item__text:hover {
    color: $crimson;
  }

  .item-claster {
    background-color: $white;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
  }

  .item-claster--hidden {
    height: 0;
    visibility: hidden;
    pointer-events: none;
    list-style-type: none;
    padding: 0;
  }

  .item-claster--visible {
    visibility: visible;
    pointer-events: initial;
    max-height: 70vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .item-claster--submenu {
    position: absolute;
    top: 64px;
  }

  .menu__arrow {
    display: inline-block;
    width: 14px;
    height: 24px;
    align-self: center;
  }

  .menu__right-arrow-outline {
    display: flex;
    justify-content: space-around;
    position: absolute;
    right: 10px;
    top: 10px;
    border: 2px solid $menuGray;
    width: 43px;
    height: 43px;
  }

  .menu__left-arrow-outline {
    display: flex;
    justify-content: space-around;
    position: absolute;
    left: 10px;
    top: 10px;
    border: 2px solid $menuGray;
    width: 43px;
    height: 43px;
  }

  .menu__submenu-arrow-outline {
    right: 30px;
  }

  .menu__expandable-item {
    position: relative;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .menu__submenu-text {
    display: block;
    border-top: 2px solid $menuGray;
    width: 100vw;
    margin: 0;
    padding: 0 0 0 10px;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 65px;
    color: $black;
    font-family: "Montserrat";
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .menu__submenu-text:hover {
    color: $crimson;
  }
</style>
