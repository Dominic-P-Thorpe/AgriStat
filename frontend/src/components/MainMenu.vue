<template>
  <div class="h-100" id="menu">
    <h2 class="text-light text-center py-4">Menu</h2>

    <ul class="text-light list-unstyled fs-4 text-center">
      <li><router-link to="/" class="text-light">Farm Overview</router-link></li>
      <li><router-link to="/soil" class="text-light">Soil Health</router-link></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "MainMenu"
}
</script>


<style>
#menu {
  background-color: #192a56;
}
</style>
