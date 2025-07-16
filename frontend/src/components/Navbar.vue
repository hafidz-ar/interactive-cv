<script setup>
import { ref } from 'vue';

// State untuk mengontrol visibilitas menu mobile
const isMenuOpen = ref(false);

// Data untuk link navigasi (lebih mudah dikelola)
const navLinks = ref([
  { name: 'HOME', href: '#profil' },
  { name: 'EDUCATION', href: '#pendidikan' },
  { name: 'SKILL', href: '#skill' },
  { name: 'PROJECT', href: '#proyek' },
  { name: 'CONTACT', href: '#kontak' }
]);

// Fungsi untuk membuka/menutup menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fungsi untuk menutup menu (dipanggil saat link di klik)
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Transisi untuk menu mobile */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}
</style>

<template>
  <header class="bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" class="text-xl sm:text-2xl font-bold text-white">Hafidz Ar Rofi</a>

      <ul class="hidden md:flex space-x-6 items-center">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href" class="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
            {{ link.name }}
          </a>
        </li>
      </ul>

      <div class="md:hidden">
        <button @click="toggleMenu" aria-label="Buka menu">
          <svg v-if="!isMenuOpen" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg v-else class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </nav>

    <transition name="slide-down">
      <div v-if="isMenuOpen" class="md:hidden bg-gray-900 absolute w-full top-full left-0 shadow-lg">
        <ul class="flex flex-col items-center py-4">
          <li v-for="link in navLinks" :key="link.name" class="w-full text-center">
            <a :href="link.href" @click="closeMenu" class="block py-3 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-300">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>
