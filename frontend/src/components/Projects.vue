<script setup>
import { ref } from 'vue';
import SectionTitle from './SectionTitle.vue';

// Data Projects (AI Context)
const projects = ref([
  {
    id: 1,
    title: 'NLP Sentiment Engine',
    category: 'Natural Language Processing',
    description: 'Analisis sentimen pelanggan otomatis menggunakan BERT transformer dan Python.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder AI Image
    tech: ['Python', 'PyTorch', 'Hugging Face'],
    link: '#'
  },
  {
    id: 2,
    title: 'Smart Traffic Vision',
    category: 'Computer Vision',
    description: 'Sistem deteksi kepadatan lalu lintas real-time menggunakan YOLOv8.',
    image: 'https://images.unsplash.com/photo-1527685609591-44b0aef2400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder AI Image
    tech: ['OpenCV', 'YOLO', 'FastAPI'],
    link: '#'
  }
]);
</script>

<template>
  <section id="projects" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">

      <SectionTitle
        title="Featured Research"
        subtitle="Selected projects in Artificial Intelligence and Machine Learning."
      />

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-500 hover:-translate-y-2 flex flex-col"
        >
          <div class="relative h-64 md:h-80 rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-indigo-900 shadow-sm uppercase tracking-wider">
              {{ project.category }}
            </div>

            <a :href="project.link" class="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
               </svg>
            </a>
          </div>

          <div class="px-4 pb-4 flex-grow flex flex-col">
            <div class="mb-4">
               <h3 class="text-2xl font-black text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                 {{ project.title }}
               </h3>
               <p class="text-gray-500 text-sm leading-relaxed line-clamp-2">
                 {{ project.description }}
               </p>
            </div>

            <div class="mt-auto flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              <span v-for="tech in project.tech" :key="tech" class="text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 group-hover:border-indigo-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
