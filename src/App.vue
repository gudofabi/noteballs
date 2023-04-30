<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/Layout/NavBar.vue'
</script>

<template>
  <NavBar />
  <div class="container mx-auto mt-4 mb-10">
    <RouterView />
  </div>
</template>
