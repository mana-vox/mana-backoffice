<template>
  <div class="sources table-responsive">
    <h1 class="text-primary mana fixed-top float-left my-3">SOURCES</h1>
    <table class="table table-hover table-sm align-middle">
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
</template>

<style scoped lang="scss">
.sources {
  position: fixed;
  max-height: 100vh;
  right: 0;
  width: 80vw;
}
.table {
  margin: 8px 5px;
}
</style>
