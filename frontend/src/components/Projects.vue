<script setup>
// Script setup tetap sama persis dengan PDF
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const projects = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get('/api/projects');
    projects.value = response.data;
  } catch (error) { console.error(error); }
});
</script>

<template>
  <section id="proyek" class="py-20 bg-gray-800">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan"  />
      <div class="grid md:grid-cols-2 gap-12">
        <div v-for="project in projects" :key="project.title" class="bg-gray-900 rounded-lg shadow-lg overflow-hidden group">
          <img :src="/src/assets/foto/Topupin.webp" alt="Gambar Proyek" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span v-for="t in project.tech" :key="t" class="inline-block bg-yellow-400/20 text-yellow-300 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">{{ t }}</span>
            </div>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-brand-yellow font-semibold hover:underline">Lihat Detail &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
