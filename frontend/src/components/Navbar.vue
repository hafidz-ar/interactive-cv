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
  // Mencegah scroll saat menu terbuka
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = 'auto';
};
</script>

<template>
  <header class="bg-white/90 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center relative z-50">
      <a href="#" class="text-xl font-black tracking-tight text-gray-900 z-50 relative">
        Hafidz<span class="text-indigo-600">.AI</span>
      </a>

      <ul class="hidden md:flex space-x-8 items-center">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href" class="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors tracking-wide">
            {{ link.name }}
          </a>
        </li>
      </ul>

      <button @click="toggleMenu" class="md:hidden text-gray-900 focus:outline-none z-50 relative p-2">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span :class="{'rotate-45 translate-y-2': isMenuOpen}" class="w-full h-0.5 bg-current transition-transform duration-300 transform origin-center"></span>
          <span :class="{'opacity-0': isMenuOpen}" class="w-full h-0.5 bg-current transition-opacity duration-300"></span>
          <span :class="{'-rotate-45 -translate-y-2': isMenuOpen}" class="w-full h-0.5 bg-current transition-transform duration-300 transform origin-center"></span>
        </div>
      </button>
    </nav>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden pt-16">
        <ul class="space-y-6 text-center">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              @click="closeMenu"
              class="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <div class="mt-12 text-sm text-gray-400">
          Based in Yogyakarta
        </div>
      </div>
    </transition>
  </header>
</template>
