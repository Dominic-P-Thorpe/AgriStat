<script setup>
import { RouterView } from 'vue-router'
import MainMenu from './components/MainMenu.vue';
</script>

<template>
  <div class="row h-100">
    <div class="col-4 h-100">
      <MainMenu />
    </div>

    <div class="col-8">
      <RouterView />
    </div>
  </div>
</template>
