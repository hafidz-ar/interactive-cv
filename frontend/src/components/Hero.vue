<template>
  <section id="profil" class="bg-gray-50 min-h-[90vh] flex items-center py-12 md:py-20 px-6 font-sans overflow-hidden">
    <div class="container mx-auto max-w-7xl">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <div class="flex flex-col items-start space-y-6 md:space-y-8 z-10">

          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-full border border-indigo-100">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span class="text-xs font-bold text-indigo-700 uppercase tracking-wider">Open for Research</span>
          </div>

          <h1 class="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.95]">
            Hi, I’m an <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">AI</span> <br>
            Engineer<sup class="text-lg md:text-2xl text-gray-400 font-normal align-top ml-2">©</sup>
          </h1>

          <p class="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed">
            Mahasiswa Teknik Informatika yang fokus membangun sistem cerdas. Spesialisasi dalam <span class="text-gray-900 font-medium">Machine Learning</span> & <span class="text-gray-900 font-medium">NLP</span>.
          </p>

          <button class="w-full md:w-auto px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl active:scale-95">
            Let's Collaborate
          </button>
        </div>

      <div class="grid grid-cols-2 gap-3 md:gap-4 w-full">

        <div class="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden group h-full min-h-[320px]">

            <div class="relative z-20 mb-4">
              <h3 class="text-xl font-bold text-gray-900 leading-tight">Hafidz Ar Rofi</h3>
              <p class="text-gray-400 text-sm mt-1">Indonesia, ID</p>
            </div>

            <div class="absolute inset-0 top-16 z-0 pointer-events-none">

              <div class="absolute -right-4 top-0 w-48 h-64 bg-slate-800 rounded-xl shadow-2xl transform rotate-6 opacity-90 border border-slate-700 p-3 overflow-hidden transition-transform duration-700 group-hover:rotate-12 group-hover:translate-x-2">
                <div class="flex gap-1 mb-2">
                  <div class="w-2 h-2 rounded-full bg-red-500"></div>
                  <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div class="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div class="space-y-2 opacity-60">
                  <div class="h-2 w-3/4 bg-slate-600 rounded"></div>
                  <div class="h-2 w-1/2 bg-blue-500 rounded ml-4"></div>
                  <div class="h-2 w-2/3 bg-slate-600 rounded ml-4"></div>
                  <div class="h-2 w-full bg-slate-600 rounded"></div>
                  <div class="h-2 w-1/3 bg-purple-500 rounded ml-2"></div>
                </div>
              </div>

              <div class="absolute right-12 top-10 w-40 h-56 bg-white rounded-xl shadow-xl transform -rotate-6 border border-gray-200 p-3 transition-transform duration-700 group-hover:-rotate-12 group-hover:-translate-x-2">
                 <div class="h-2 w-1/3 bg-gray-200 rounded mb-4"></div>
                 <div class="flex items-end justify-between h-20 gap-1 px-2">
                    <div class="w-full bg-indigo-100 rounded-t h-3/4"></div>
                    <div class="w-full bg-indigo-200 rounded-t h-1/2"></div>
                    <div class="w-full bg-indigo-500 rounded-t h-full"></div>
                    <div class="w-full bg-indigo-300 rounded-t h-2/3"></div>
                 </div>
              </div>

              <div class="absolute right-4 bottom-[-10px] md:right-6 md:bottom-4 transition-transform duration-500 group-hover:scale-110">
                <div class="w-24 h-24 md:w-28 md:h-28 bg-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center p-4 backdrop-blur-sm border border-white/50">
                  <img src="/foto/PyCharmIcon.png" alt="PyCharm" class="w-full h-full object-contain drop-shadow-lg" />
                </div>
              </div>

            </div>

        <div class="absolute bottom-6 left-6 z-20 flex gap-3">


              <div class="bg-gray-900 text-white px-4 py-2.5 rounded-2xl shadow-xl flex flex-col items-center justify-center min-w-[70px] group/stat hover:scale-105 transition-transform">
                <svg class="w-4 h-4 text-indigo-400 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span class="text-lg font-bold leading-none">15+</span>
                <span class="text-[10px] text-gray-400">Projects</span>
              </div>

            </div>

          </div>

          <div class="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-sm aspect-square ">
            <img
              src="https://i.pinimg.com/736x/bc/da/23/bcda23391ea99220b7fabd714cac5681.jpg"
              alt="Profile">
            <div class="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-300"></div>
          </div>

          <div class="col-span-2 bg-gray-900 text-white rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 flex flex-row items-center justify-between relative overflow-hidden group">

             <div class="relative z-10">
               <p class="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mb-1 font-semibold">Core Stack</p>
               <h3 class="text-base md:text-lg font-bold leading-tight">Python &<br>Generative AI</h3>
             </div>

             <div class="flex gap-3 md:gap-4 z-10">
                <div class="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-2.5 shadow-lg group-hover:scale-105 transition-transform">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-full h-full" />
                </div>

                <div class="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br bg-white/10 rounded-2xl flex items-center justify-center p-2.5 shadow-lg border border-white/10 group-hover:scale-105 transition-transform">
                  <svg class="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
             </div>

             <div class="absolute right-0 top-0 w-32 h-32 bg-indigo-600 blur-[60px] opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
             <div class="absolute -left-10 -bottom-10 w-24 h-24 bg-purple-600 blur-[50px] opacity-30"></div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
