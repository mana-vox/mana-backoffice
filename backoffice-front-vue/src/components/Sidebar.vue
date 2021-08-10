<template>
  <div class="sidebar">
    <img
      class="logos"
      id="logo"
      alt="MANA logo"
      src="../assets/MANA_logo_transparent.png"
    />
    <nav>
      <ul class="list-group list-group-flush" @click="handleClick($event)">
        <li class="list-group-item active bg-secondary">
          <router-link to="/" class="category">
            <i class="bi bi-house mx-1"></i>
            Home
          </router-link>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-start
          "
        >
          <router-link to="/sources" class="category">
            <i class="bi bi-people mx-1"></i>
            Sources
          </router-link>
          <span class="badge bg-primary rounded-pill">1</span>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-start
          "
        >
          <router-link to="/data" class="category">
            <i class="bi bi-card-text mx-1"></i>
            Data
          </router-link>
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item">
          <router-link to="/companies" class="category">
            <i class="bi bi-building mx-1"></i>
            Companies
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/saved" class="category">
            <i class="bi bi-star mx-1"></i>
            Saved
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/settings" class="category">
            <i class="bi bi-gear mx-1"></i>
            Settings
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/about" class="category">
            <i class="bi bi-info-circle mx-1"></i>
            About
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  emits: ["link-clicked"],

  methods: {
    handleClick(e) {
      if (e.target.localName !== "a") return;
      var items = document.getElementsByClassName("list-group-item");
      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
        items[i].classList.remove("bg-secondary");
      }
      e.target.parentElement.classList.toggle("active");
      e.target.parentElement.classList.add("bg-secondary");
      this.$emit("link-clicked");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgb(218, 218, 218);
  height: 100vh;
  width: 20vw;
}
.sidebar ul {
  list-style: none;
}
.sidebar li {
  background-color: inherit;
  border-radius: 3px;
  text-align: left;
  margin: 0px 1px;
}
.sidebar a {
  text-decoration: none;
}
.sidebar-icon {
  vertical-align: middle;
}
.router-link-exact-active {
  cursor: pointer;
}

#logo {
  position: relative;
  height: 15vh;
  margin: 0 100% 0 0;
  padding: 0;
}
</style>
