<script setup>
import { ref } from 'vue';

const socialLinks = ref([
  {
    name: 'GitHub',
    href: 'https://github.com/hafidz-ar',
    iconPath: '<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" />'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hafidz-ar-rofi-4b18a3285/',
    iconPath: '<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />'
  }
]);
</script>

<template>
  <footer id="kontak" class="bg-gray-900 py-16 sm:py-20 text-white">
    <div class="container mx-auto px-6 text-center">

      <h2 class="text-3xl sm:text-4xl font-bold mb-3">Hubungi Saya</h2>
      <p class="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 mb-8">
        Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar menyapa. Jangan ragu untuk terhubung!
      </p>

      <a href="mailto:hafidzar93@gmail.com" class="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 mb-10 sm:mb-12">
        Kirim Email
      </a>

      <div class="flex justify-center space-x-5 sm:space-x-6 mb-8">
        <a v-for="link in socialLinks"
           :key="link.name"
           :href="link.href"
           target="_blank"
           rel="noopener noreferrer"
           :aria-label="`Kunjungi profil ${link.name} saya`"
           class="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">

          <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" v-html="link.iconPath"></svg>
        </a>
      </div>

      <p class="text-gray-500 text-xs sm:text-sm">
        &copy; {{ new Date().getFullYear() }} Hafidz Ar Rofi. Dibuat dengan ❤️ di Yogyakarta.
      </p>
    </div>
  </footer>
</template>
