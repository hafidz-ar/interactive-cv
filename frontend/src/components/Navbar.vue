<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const navLinks = ref([
  { name: 'HOME', href: '#profil' },
  { name: 'CERTIFICATE', href: '#certificates' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CONTACT', href: '#kontak' }
]);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative z-50">
      <!-- Logo -->
      <a href="#" class="text-2xl font-black tracking-tighter text-gray-900 flex items-center gap-1 hover:opacity-80 transition-opacity">
        Hafidz<span class="text-indigo-600">.AI</span>
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex items-center space-x-8">
        <li v-for="link in navLinks" :key="link.name">
          <a 
            :href="link.href" 
            class="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-all duration-300 tracking-wide relative group py-2"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <div class="flex items-center lg:hidden">
        <button 
          @click="toggleMenu" 
          class="text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
          aria-label="Toggle Menu"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span :class="{'rotate-45 translate-y-[9px]': isMenuOpen}" class="w-full h-0.5 bg-current transition-all duration-300 transform origin-center rounded-full"></span>
            <span :class="{'opacity-0': isMenuOpen}" class="w-full h-0.5 bg-current transition-opacity duration-300 rounded-full"></span>
            <span :class="{'-rotate-45 -translate-y-[9px]': isMenuOpen}" class="w-full h-0.5 bg-current transition-all duration-300 transform origin-center rounded-full"></span>
          </div>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Dropdown -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0 translate-y-[-10px]"
      enter-to-class="opacity-100 max-h-[500px] translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 max-h-[500px] translate-y-0"
      leave-to-class="opacity-0 max-h-0 translate-y-[-10px]"
    >
      <div v-if="isMenuOpen" class="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-lg overflow-hidden">
        <ul class="flex flex-col px-4 sm:px-6 py-4 space-y-2">
          <li v-for="(link, index) in navLinks" :key="link.name" 
              class="transform transition-all duration-300"
              :style="{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }">
            <a
              :href="link.href"
              @click="closeMenu"
              class="flex items-center w-full px-4 py-3 text-sm font-bold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-all duration-300 tracking-wide"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <div class="px-8 pb-6 pt-2 text-xs text-gray-500 font-medium text-center mt-2">
          Based in Yogyakarta
        </div>
      </div>
    </transition>
  </header>
</template>
