<template>
  <header
    class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#222222] px-10 py-3 fixed top-0 left-0 right-0 bg-[#111111] z-50">
    <div class="flex items-center gap-4 text-white">
      <svg class="h-8 w-8 text-[#ea2a33]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd"
          d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
          fill="currentColor" fill-rule="evenodd"></path>
      </svg>
      <h2 class="text-white text-xl font-bold leading-tight tracking-[-0.015em]">FitnessPro</h2>
    </div>
    <nav class="hidden md:flex flex-1 justify-center gap-8">
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors" href="#">Home</a>
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors"
        href="#">Classes</a>
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors"
        href="#">Trainers</a>
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors"
        href="#">Pricing</a>
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors"
        href="#">Contact</a>
    </nav>
    <div class="flex items-center gap-4">
      <button
        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-[#ea2a33] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#c02128] transition-colors">
        <span class="truncate">Join Now</span>
      </button>
      <button class="md:hidden text-white">
        <span class="material-symbols-outlined"> menu </span>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavbarComponent',
})
</script>
