<template>
  <div class="min-h-screen main">
    <!-- Main banner -->
    <div
      class="relative  grid grid-cols-1 lg:grid-cols-2 h-screen items-center lg:px-20 px-4 pt-24 lg:pt-0 gap-10 ">
      <!-- Left Content -->
      <div class="space-y-6 flex flex-col justify-center">
        <p class="uppercase text-sm tracking-wider text-yellow-600 font-semibold">
          Holistic Edtech Solutions
        </p>

        <h1 class="text-4xl lg:text-5xl font-bold text-primary leading-tight capitalize">
          Digital tools that
          <span class="text-yellow-500">empower basic schools</span>
        </h1>

        <p class="lg:w-2/3 text-gray-600 text-sm leading-relaxed">
          Nikasemo Technologies helps schools integrate Edtech seamlessly by providing the right
          software, hardware, and learning content — all in one ecosystem.
        </p>

        <div>
          <button
            class="flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:bg-black hover:scale-105">
            <img src="../assets/icons/play.png" alt="play-icon" width="20" height="20" />
            <span>Watch Impact Video</span>
          </button>
        </div>
      </div>

      <!-- Right Content -->
      <div class="w-full h-full flex justify-center items-center animate-float">
        <img
          src="../assets/images/map.png"
          alt="map of Ghana"
          width="450"
          class="max-w-[80%] lg:max-w-[450px]" />
      </div>
    </div>

    <!-- Mission vision section -->
    <div class="py-20 bg-light px-6 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 shadow-xl rounded-xl overflow-hidden">
          <div
            class="p-8 lg:p-12 bg-ashgray col-span-1 md:col-span-2 flex flex-col justify-center items-center space-y-6">
            <div class="w-16 h-1 bg-primary rounded-full"></div>
            <h2 class="text-3xl lg:text-4xl tracking-wide font-bold text-gray-800">Our Mission</h2>
            <p class="max-w-2xl text-base text-gray-600 leading-relaxed text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam explicabo dicta sit
              quasi, minus aspernatur eum eveniet culpa odit in ut. Temporibus fugit molestias
              exercitationem amet obcaecati architecto voluptatibus eius!
            </p>
            <RouterLink
              class="text-sm font-semibold text-primary hover:text-yellow transition-colors duration-300 flex items-center gap-2 group">
              Read more
              <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </RouterLink>
          </div>

          <div class="relative text-center yellow-background min-h-[300px] lg:min-h-0">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60"></div>
            <div
              class="relative h-full flex flex-col justify-center items-center p-8 lg:p-10 space-y-8">
              <div class="space-y-4 place-items-center">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <img src="../assets/icons/users.svg" width="30" />
                </div>
                <h3
                  class="text-2xl lg:text-3xl max-w-xs mx-auto tracking-wide font-bold text-white leading-tight">
                  Become a Partner School!
                </h3>
              </div>
              <button
                class="button-class bg-white text-dark hover:bg-yellow hover:scale-105 transform transition-all duration-300 shadow-lg">
                Join Us Today
              </button>
            </div>
          </div>

          <div
            class="p-8 lg:p-12 bg-primary col-span-1 md:col-span-2 flex flex-col justify-center items-center space-y-6">
            <div class="w-16 h-1 bg-yellow rounded-full"></div>
            <h2 class="text-3xl lg:text-4xl tracking-wide font-bold text-white">Our Vision</h2>
            <p class="max-w-2xl text-base text-white/90 leading-relaxed text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam explicabo dicta sit
              quasi, minus aspernatur eum eveniet culpa odit in ut. Temporibus fugit molestias
              exercitationem amet obcaecati architecto voluptatibus eius!
            </p>
            <RouterLink
              class="text-sm font-semibold text-yellow hover:text-white transition-colors duration-300 flex items-center gap-2 group">
              Read more
              <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </RouterLink>
          </div>

          <div class="p-4 bg-dark min-h-[100px] lg:min-h-0 flex items-center justify-center">
            <div class="w-12 h-12 border-2 border-yellow/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our partners section -->
    <div class="py-20 bg-light px-6 lg:px-20 h-screen"></div>
  </div>
</template>

<script setup>
import Footer from "@/components/global/Footer.vue";
import Navbar from "@/components/nav/Navbar.vue";
</script>

<style scoped>
.main {
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.main::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("../assets/images/mainbg.jpg") center / cover repeat-y;
  opacity: 0.03;
  z-index: -1;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.yellow-background {
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.yellow-background::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("../assets/images/slide1.jpeg") center / cover repeat-y;
  opacity: 1;
  z-index: -1;
}
</style>
