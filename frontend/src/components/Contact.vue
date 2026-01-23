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
  <footer id="kontak" class="bg-neutral-950 text-white border-t border-white/10">
    <div class="container mx-auto px-6 py-16">

      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Interested in collaboration?
          </h2>
          <p class="text-neutral-400 text-lg leading-relaxed">
            I'm always open to discussing new AI research, freelance opportunities, or innovative ideas.
          </p>
        </div>

        <a href="mailto:hafidzar93@gmail.com"
           class="inline-flex items-center justify-center h-12 px-8 font-medium text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950 whitespace-nowrap">
           Get in Touch
           <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
           </svg>
        </a>
      </div>

      <div class="w-full h-px bg-white/10 mb-8"></div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-neutral-500 text-sm font-medium">
          &copy; {{ new Date().getFullYear() }} Hafidz Ar Rofi.
          <span class="hidden sm:inline"> | </span>
          <span class="block sm:inline mt-1 sm:mt-0">AI Engineer based in Yogyakarta.</span>
        </div>

        <div class="flex items-center space-x-6">
          <a v-for="link in socialLinks"
             :key="link.name"
             :href="link.href"
             target="_blank"
             rel="noopener noreferrer"
             :aria-label="link.name"
             class="text-neutral-400 hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" v-html="link.iconPath"></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
