<script setup>
import { ref } from 'vue';
import SectionTitle from './SectionTitle.vue';

const skillCategories = ref([
  {
    id: 1,
    title: 'Core AI & ML',
    description: 'Frameworks for building intelligent systems.',
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' }
    ]
  },
  {
    id: 2,
    title: 'Data Engineering',
    description: 'Processing and managing large datasets.',
    items: [
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Apache Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' }
    ]
  },
  {
    id: 3,
    title: 'Deployment & Tools',
    description: 'Model serving and development workflow.',
    items: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    ]
  }
]);
</script>

<template>
  <section id="skills" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-6">

      <SectionTitle
        title="Technical Expertise"
        subtitle="The tools I use to turn data into actionable insights."
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div
          v-for="category in skillCategories"
          :key="category.id"
          class="group bg-gray-50 rounded-[2rem] p-6 md:p-8 border border-gray-100 hover:bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col"
        >
          <div class="mb-6 md:mb-8 border-b border-gray-200 pb-6 group-hover:border-indigo-100 transition-colors">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {{ category.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ category.description }}
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-auto">
            <div
              v-for="item in category.items"
              :key="item.name"
              class="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border border-gray-100 shadow-sm group-hover:border-indigo-50 group-hover:shadow-md transition-all"
            >
              <img
                :src="item.icon"
                :alt="item.name"
                class="w-10 h-10 transition-transform duration-300 transform group-hover:scale-110"
              />
              <span class="text-xs font-bold text-gray-500 group-hover:text-gray-900 transition-colors">
                {{ item.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
