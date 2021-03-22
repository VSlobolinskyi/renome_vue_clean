<template>
  <footer class="footer">
    <p class="footer__follow-us">{{footer.followUs}}</p>
    <SocialNetworks :icons="footer.icons"/>
    <Logo :logoText="footer.logo"/>
    <p class="footer__copyright">{{footer.copyright}}</p>
  </footer>
</template>

<script>
  import Logo from "../atoms/Logo.vue"
  import SocialNetworks from "../molecules/SocialNetworks.vue"
  export default {
    name: "Footer",
    components: {
      Logo,
      SocialNetworks
    },
    props: {
      footer: Object
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    position: relative;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    text-align: center;
    background-color: $gray;
    padding: 20px 10px;
    width: 100vw;
    cursor: default;
    font-size: 20px;
    color: $darkBlue;

    &__follow-us {
      align-self: center;
      padding: 15px 0;
      margin: 0;
      line-height: 25px;
      font-size: 12px;
      font-family: $montserrat;
      text-align: right;
      text-transform: uppercase;
    }

    &__copyright {
      text-align: center;
      padding: 15px 0 5px 0;
      margin: 0;
      letter-spacing: 1px;
      font-size: 12px;
      font-family: $axis;
      text-transform: uppercase;
    }
  }
</style>