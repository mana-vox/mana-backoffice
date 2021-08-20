<template>
  <div class="sources table-responsive">
    <h1 class="text-primary mana" id="pagetitle">SOURCES</h1>

    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('unqualified')"
          :class="{ active: isActive('unqualified') }"
          href="#unqualified"
        >
          Unqualified
          <span class="badge bg-primary rounded-pill">3</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('qualified')"
          :class="{ active: isActive('qualified') }"
          href="#qualified"
        >
          Qualified
          <span class="badge bg-primary rounded-pill">22</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('allsources')"
          :class="{ active: isActive('allsources') }"
          href="#allsources"
        >
          All sources
        </a>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('unqualified') }"
        id="unqualified"
      >
        <table
          class="table table-hover table-sm align-middle"
          cellspacing="0"
          width="100%"
        >
          <thead class="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Source</th>
              <th scope="col">Twitter</th>
              <th scope="col" class="text-truncate">Web</th>
              <th scope="col">Location</th>
              <th scope="col">Ecoregion</th>
              <th scope="col" class="text-truncate">Added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mongabay</td>
              <td>@mongabay</td>
              <td></td>
              <td>Indonesia</td>
              <td>Sumatra</td>
              <td>Manually</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>WWF</td>
              <td>@wwf</td>
              <td>pandas.org</td>
              <td>USA</td>
              <td></td>
              <td>Manually if I write a long text what happens</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>algore</td>
              <td>@algore</td>
              <td></td>
              <td>Brazil</td>
              <td>Amazon</td>
              <td>Algo</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('qualified') }"
        id="qualified"
      >
        qualified content
      </div>
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('allsources') }"
        id="allsources"
      >
        allsources content
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sources",
  data: function () {
    return {
      activeItem: "unqualified",
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>

<style scoped lang="scss">
.sources {
  position: fixed;
  max-height: 100vh;
  right: 0;
  width: 80vw;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.table {
  margin: 20px 5px;
}
.nav-link {
  display: flex;
  flex-direction: row;
  align-items: space-between;
}
.badge {
  margin: 1px 0 1px 10px;
}

#pagetitle {
  margin: 20px 40px;
}
</style>
