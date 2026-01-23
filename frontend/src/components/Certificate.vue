<script setup>
import { ref } from 'vue';
import SectionTitle from './SectionTitle.vue';

// Data Sertifikat (Diperbarui sesuai PDF yang diupload)
const certificates = ref([
  {
    id: 1,
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    date: 'Berlaku hingga 04 Nov 2028',
    image: '/foto/certificatePython.jpg',
    credentialId: 'N9ZO2NJ86PG5', // ID dari PDF Fundamental Backend
    link: 'https://www.dicoding.com/certificates/N9ZO2NJ86PG5'
  },
  {
    id: 2,
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    date: 'Berlaku hingga 03 Okt 2028',
    image: '/foto/certificateAI.jpg',
    credentialId: '81P25V9YNPOY', // ID dari PDF Backend Pemula
    link: 'https://www.dicoding.com/certificates/81P25V9YNPOY'
  }
]);
</script>

<template>
  <section id="certificates" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">

      <div class="max-w-3xl mx-auto mb-16 text-center">
        <SectionTitle title="Lisensi & Sertifikasi" subtitle="Validasi kompetensi profesional dari platform terpercaya." />
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div
          v-for="cert in certificates"
          :key="cert.id"
          class="group bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 flex items-start gap-6"
        >
          <div class="w-20 h-20 flex-shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-indigo-50 transition-colors">
            <img :src="cert.image" alt="Sertifikat Logo" class="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>

          <div class="flex-grow">
            <h3 class="text-lg font-bold text-slate-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
              {{ cert.title }}
            </h3>

            <div class="text-sm mb-4">
              <p class="font-semibold text-slate-600">{{ cert.issuer }}</p>
              <p class="text-xs text-slate-400 mt-1">{{ cert.date }}</p>
            </div>

            <div class="inline-flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 group-hover:border-orange-100 transition-colors">
              <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">Credential:</span>
              <a
                :href="cert.link"
                target="_blank"
                class="text-xs font-bold text-slate-700 hover:text-orange-600 hover:underline decoration-orange-400 underline-offset-2 transition-all"
              >
                {{ cert.credentialId }} ↗
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
