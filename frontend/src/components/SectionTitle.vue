<script setup>
defineProps({
  title: String,
  subtitle: String
});
</script>

<template>
  <div class="mb-16 text-center max-w-4xl mx-auto">

    <span class="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">
      Explore
    </span>

    <h2 class="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
      {{ title }}
    </h2>

    <p v-if="subtitle" class="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
      {{ subtitle }}
    </p>

  </div>
</template>
