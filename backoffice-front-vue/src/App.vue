<template>
  <div id="nav">
    <div class="">
      <sidebar class="custom-shadow"> v-if="sidebarIsVisible" </sidebar>
    </div>
  </div>
  <router-view />
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      sidebarIsVisible: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarIsVisible = !this.sidebarIsVisible;
    },
    closeSidebar() {
      this.sidebarIsVisible = false;
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "FuturaBook";
  src: local("FuturaBook"),
    url(./assets/fonts/futurastd-book.otf) format("truetype");
}

@font-face {
  font-family: "Futura";
  src: local("Futura"),
    url(./assets/fonts/futurastd-medium.otf) format("truetype");
}

@font-face {
  font-family: "NeutraTitling";
  src: local("NeutraTitling"),
    url(./assets/fonts/neutra-display-titling.otf) format("truetype");
}

#app {
  font-family: "Futura", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #f15a24;
    }
  }
}

.custom-shadow {
  box-shadow: 0 0.25em 1em rgba(0, 0, 0, 0.1), 0 0.1em 0.5em rgba(0, 0, 0, 0.15);
}

.mana {
  font-family: "NeutraTitling", "Futura", Avenir, Helvetica, Arial, sans-serif;
}
</style>
