<template>
  <div class="home">
    <img
      class="logos"
      id="logo"
      alt="MANA logo"
      src="../assets/MANA_logo_transparent.png"
    />
    <h1 class="mana display-5 p-3">Welcome to MANA's backoffice!</h1>
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld,
  },
};
</script>

<style scoped lang="scss">
.home {
  position: fixed;
  height: 100vh;
  right: 0;
  width: 80vw;
}
#logo {
  max-height: 70vh;
  max-width: 50vw;
}
</style>
