<script setup>
import { ref } from 'vue';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([
  {
    id: 1,
    period: '2023 - Present',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'Bachelor of Informatics',
    desc: 'Focusing on Artificial Intelligence & Data Science.'
  },
  {
    id: 2,
    period: '2019 - 2022',
    institution: 'SMA Negeri 1 Babelan',
    major: ' Mathematics and Natural Sciences',
  },
]);
</script>

<template>
  <section id="education" class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-6">

      <SectionTitle
        title="Education"
        subtitle="My academic journey and foundation in Computer Science."
      />

      <div class="max-w-4xl mx-auto relative mt-12">

        <div class="absolute left-[19px] top-4 bottom-0 w-[2px] bg-indigo-100"></div>

        <div
          v-for="(item, index) in educationHistory"
          :key="item.id"
          class="relative pl-16 py-6 group first:pt-0 last:pb-0"
        >
          <div class="absolute left-0 top-8 w-10 h-10 bg-white border-2 border-indigo-100 rounded-full flex items-center justify-center z-10 group-hover:border-indigo-500 transition-colors duration-300">
             <div class="w-3 h-3 bg-indigo-300 rounded-full group-hover:bg-indigo-600 group-hover:scale-125 transition-all duration-300"></div>
          </div>

          <div class="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all duration-300">
            <span class="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wide mb-4">
              {{ item.period }}
            </span>

            <h3 class="text-2xl font-bold text-gray-900 mb-1">
              {{ item.institution }}
            </h3>

            <p class="text-indigo-600 font-semibold text-lg mb-2">
              {{ item.major }}
            </p>

            <p class="text-gray-500 text-sm">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
