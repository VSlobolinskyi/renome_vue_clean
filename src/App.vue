<template>
  <div id="app">
    <Navigation :navigation="structure.navigation" :cartMenu="structure.cartMenu" :mainMenu="structure.cartMenu"/>
    <Carousel :carousel="structure.carousel"/>
    <Building :images="structure.building.images"/>
    <About :about="structure.about"/>
    <Gallery :gallery="structure.gallery"/>
    <Footer :footer="structure.footer"/>
  </div>
</template>

<script>
  import Building from "./components/molecules/Building.vue"
  import About from "./components/molecules/About.vue"
  import Gallery from "./components/organisms/Gallery.vue"
  import Footer from "./components/organisms/Footer.vue"
  import Navigation from "./components/organisms/Navigation.vue"
  import Carousel from "./components/organisms/Carousel.vue"
  import localStructure from "/data/structure.json"
  export default {
    name: "App",
    components: {
      Building,
      About,
      Gallery,
      Footer,
      Navigation,
      Carousel
    },
    data() {
      return {
        structure: {},
        isFetch: false
      }
    },
    created() {
      this.isFetch ? fetch("https://raw.githubusercontent.com/Hetachi/FrontEndTraining/master/structure.json")
      .then(response => response.json())
      .then(data => {
        this.structure = data;
      })
      .catch(error => console.log(error)) : this.structure = localStructure;
    }
  }	
</script>

<style lang="scss">
  @import "./styles/globalStyles.scss";
</style>