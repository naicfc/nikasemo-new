<template>
  <header
    :class="[
      'fixed inset-x-0 flex justify-between items-center transition-all ease-in-out duration-300 z-10',
      changeNav
        ? 'bg-baby lg:bg-primary/90 top-5 w-[90%] lg:px-8 px-4 mx-auto lg:rounded-full shadow-md'
        : 'px-4 lg:px-20 py-4',
    ]">
    <div class="flex items-center justify-between w-full lg:w-auto">
      <img src="../../assets/icons/logo2x.png" alt="nikasemo-logo-png" width="150" />

      <button @click="menuOpen = !menuOpen" class="lg:hidden focus:outline-none">
        <img
          src="../../assets/icons/menu-blue.svg"
          alt=""
          v-if="!menuOpen && !changeNav"
          width="35" />
        <img
          src="../../assets/icons/menu-blue.svg"
          alt=""
          v-if="!menuOpen && changeNav"
          width="35" />
        <img
          v-else-if="menuOpen && !changeNav"
          src="../../assets/icons/close-blue.svg"
          width="35"
          alt="" />
        <img
          v-else-if="menuOpen && changeNav"
          src="../../assets/icons/close-blue.svg"
          width="35"
          alt="" />
      </button>
    </div>

    <nav
      class="hidden lg:flex gap-6 items-center font-medium"
      :class="changeNav ? 'text-white' : 'text-gray-700'">
      <router-link to="/">Home</router-link>
      <router-link to="/about-us">About Us</router-link>
      <router-link to="/our-vision">Our Vision</router-link>
      <router-link to="/our-solutions">Our Solutions</router-link>
      <router-link to="/our-impact">Our Impact</router-link>
    </nav>

    <div class="hidden lg:block">
      <button
        :class="[
          'button-class',
          changeNav
            ? 'bg-yellow text-[#002152] hover:bg-gold'
            : 'bg-primary text-white hover:bg-yellow hover:text-dark',
        ]">
        Contact Us
      </button>
    </div>

    <transition name="slide-fade">
      <div
        v-if="menuOpen"
        class="absolute top-full left-0 w-full bg-baby shadow-lg rounded-b-2xl lg:hidden flex flex-col gap-4 px-6 py-4 text-dark font-medium">
        <router-link to="/" @click="menuOpen = false">Home</router-link>
        <router-link to="/about-us" @click="menuOpen = false">About Us</router-link>
        <router-link to="/our-vision" @click="menuOpen = false">Our Vision</router-link>
        <router-link to="/our-solutions" @click="menuOpen = false">Our Solutions</router-link>
        <router-link to="/our-impact" @click="menuOpen = false">Our Impact</router-link>
        <button
          @click="menuOpen = false"
          class="bg-primary text-white rounded-full py-2 mt-2 hover:bg-yellow hover:text-dark transition">
          Contact Us
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const scrollY = ref(0);
const menuOpen = ref(false);

onMounted(() => {
  const handleScroll = () => {
    scrollY.value = window.scrollY;
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  onUnmounted(() => window.removeEventListener("scroll", handleScroll));
});

const changeNav = computed(() => scrollY.value > 90);
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
