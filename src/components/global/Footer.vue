<template>
  <div class="px-4 lg:px-20 bg-dark text-gray-300">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b-2 border-gray-400 py-12">
      <div class="space-y-3">
        <img src="../../assets/icons/logo2x.png" alt="nikasemo-logo" width="120" />
        <div>
          <p class="text-sm">
            We are building the core infrastructure for education that will power basic schools as
            they use EdTech tools to grow and achieve maximum learning outcomes for learners.
          </p>
        </div>
      </div>
      <!-- Quick links -->
      <div class="links">
        <div class="border-b-2 border-gray-400 pb-2">
          <span class="text-xl">Quick Links</span>
        </div>
        <div class="space-y-2 pt-2 text-sm">
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/chevron-right.svg" alt="chevron-right" width="25" />
            <p><router-link>About Us</router-link></p>
          </div>
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/chevron-right.svg" alt="chevron-right" width="25" />
            <p><router-link>Our Solutions</router-link></p>
          </div>
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/chevron-right.svg" alt="chevron-right" width="25" />
            <p><router-link>Our Impact</router-link></p>
          </div>
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/chevron-right.svg" alt="chevron-right" width="25" />
            <p><router-link>Contact Us</router-link></p>
          </div>
        </div>
      </div>
      <!-- Information -->
      <div class="links">
        <div class="border-b-2 border-gray-400 pb-2">
          <span class="text-xl">Information</span>
        </div>
        <div class="space-y-2 pt-2 text-sm">
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/chevron-right.svg" alt="chevron-right" width="25" />
            <p><router-link>About Us</router-link></p>
          </div>
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/chevron-right.svg" alt="chevron-right" width="25" />
            <p><router-link>Edlege</router-link></p>
          </div>
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/chevron-right.svg" alt="chevron-right" width="25" />
            <p><router-link>Content Library</router-link></p>
          </div>
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/chevron-right.svg" alt="chevron-right" width="25" />
            <p><router-link>Content API</router-link></p>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div>
        <div class="border-b-2 border-gray-400 pb-2">
          <p class="text-xl">Get In Touch</p>
        </div>
        <div class="space-y-2 pt-2 text-sm">
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/location-pin.svg" alt="location" width="25" />
            <p>Weija, GA west Municipality</p>
          </div>
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/phone-round.svg" alt="phone" width="25" />
            <p>+233244932895 / +233546559713</p>
          </div>
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/mail-outline.svg" alt="mail" width="25" />
            <p>hello@nikasemo.com</p>
          </div>
          <div class="flex items-center gap-4">
            <img src="../../assets/icons/whatsapp-outline.svg" alt="whatsapp" width="22" />
            <p>+233 244 932 895</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 md:flex-row justify-between py-4 text-sm">
      <p class="text-center md:text-left">Lorem ipsum | Lorem & ipsum</p>
      <p class="text-center md:text-left">
        Copyright &copy; Nikasemo Technologies, 2025.
        <span class="hidden md:inline">All Rights Reserved.</span>
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.links p {
  @apply hover:text-secondary transition-all duration-300;
}
</style>
