<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-xl text-gray-400 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>

      <a href="mailto:hafidzar93@gmail.com" class="bg-brand-yellow text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300 inline-block mb-12">
        Kirim Email
      </a>

      <div class="flex justify-center space-x-6 mb-8">
        <a href="https://github.com/hafidz-ar" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
        <a href="https://www.linkedin.com/in/hafidz-ar-rofi-4b18a3285/" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
      </div>

      <p class="text-gray-500">&copy; {{ new Date().getFullYear() }} Hafidz. Dibuat dengan &lt;3</p>
    </div>
  </footer>
</template>
