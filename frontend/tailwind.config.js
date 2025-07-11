// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Menambahkan warna kustom sesuai desain
        'brand-dark': '#212121', // Warna latar belakang utama yang gelap
        'brand-light': '#f5f5f5', // Warna untuk section terang
        'brand-yellow': '#ffc107', // Warna aksen kuning
      },
      // Anda bisa tetap menggunakan keyframes animasi dari PDF
      keyframes: {
        'slide-in-left': { '0%': { transform: 'translateX(-100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' }, },
        'slide-in-right': { '0%': { transform: 'translateX(100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' }, },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' }, },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
