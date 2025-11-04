<script setup lang="ts">
import Footer from "./components/global/Footer.vue";
import Navbar from "./components/nav/Navbar.vue";
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
