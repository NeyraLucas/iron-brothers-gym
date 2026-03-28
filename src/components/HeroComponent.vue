<template>
  <section class="relative h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
    style='background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpwJ2IMIhZn3co6fUyyDIK1BRkE85tHsG0O_WdtERGp5JbuPTG5qhlL4jEfcaZ1NrX5NmdYZyVQByYDsjx2hhyQz_nu2Dy521C3JfCbWDAkueO83BnuzecLqI6wOrQJiijSCf-UhRgcGWvjeFS8a-o1QvYW6IhAnb8dN0xXGTijoN-ScVZi8-rISBkX-7A-wJ8-lawUv5aOoKyV4tlRpQLdOkaClgeMeRyFyAcDPJzc-dxFEDFxwBjWI5GR4nBBWpK_Wk84-ca6xrx");'>
    <div class="z-10 flex flex-col gap-6 p-4 max-w-4xl">
      <h1 class="text-5xl font-black leading-tight tracking-[-0.033em] md:text-7xl">Unleash Your Inner Strength</h1>
      <p class="text-lg font-normal leading-normal md:text-xl max-w-2xl mx-auto">Transform your body and mind with our
        expert trainers and state-of-the-art facilities. Join our community and achieve your fitness goals.</p>
      <button
        class="flex self-center min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#ea2a33] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#c02128] transition-colors">
        <span class="truncate">Start Your Journey</span>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroComponent',
})
</script>
