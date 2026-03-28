<template>
  <section class="py-20 px-4 md:px-10">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-white text-4xl font-bold text-center mb-12 md:text-5xl">Pricing Plans</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div
          class="flex flex-col gap-6 rounded-lg border border-[#222222] bg-[#1a1a1a] p-8 transition-all duration-300 hover:scale-105">
          <div class="text-center">
            <h3 class="text-white text-2xl font-bold">Basic</h3>
            <p class="flex items-baseline justify-center gap-1 text-white mt-2">
              <span class="text-5xl font-black tracking-tighter">$49</span>
              <span class="text-gray-400">/month</span>
            </p>
          </div>
          <ul class="flex flex-col gap-4 text-sm">
            <li class="flex items-center gap-3 text-gray-300"><span
                class="material-symbols-outlined text-[#ea2a33]">check_circle</span>Gym Access</li>
            <li class="flex items-center gap-3 text-gray-300"><span
                class="material-symbols-outlined text-[#ea2a33]">check_circle</span>Group Classes</li>
            <li class="flex items-center gap-3 text-gray-500"><span
                class="material-symbols-outlined">cancel</span>Personal Training</li>
            <li class="flex items-center gap-3 text-gray-500"><span
                class="material-symbols-outlined">cancel</span>Exclusive Events</li>
          </ul>
          <button
            class="w-full mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-gray-700 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-600 transition-colors">
            <span class="truncate">Choose Plan</span>
          </button>
        </div>
        <div
          class="flex flex-col gap-6 rounded-lg border-2 border-[#ea2a33] bg-[#1a1a1a] p-8 relative scale-105 shadow-2xl shadow-[#ea2a33]/20">
          <div
            class="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#ea2a33] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
            Most Popular</div>
          <div class="text-center">
            <h3 class="text-white text-2xl font-bold">Premium</h3>
            <p class="flex items-baseline justify-center gap-1 text-white mt-2">
              <span class="text-5xl font-black tracking-tighter">$79</span>
              <span class="text-gray-400">/month</span>
            </p>
          </div>
          <ul class="flex flex-col gap-4 text-sm">
            <li class="flex items-center gap-3 text-gray-300"><span
                class="material-symbols-outlined text-[#ea2a33]">check_circle</span>Gym Access</li>
            <li class="flex items-center gap-3 text-gray-300"><span
                class="material-symbols-outlined text-[#ea2a33]">check_circle</span>Group Classes</li>
            <li class="flex items-center gap-3 text-gray-300"><span
                class="material-symbols-outlined text-[#ea2a33]">check_circle</span>Personal Training (1/mo)</li>
            <li class="flex items-center gap-3 text-gray-500"><span
                class="material-symbols-outlined">cancel</span>Exclusive Events</li>
          </ul>
          <button
            class="w-full mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#ea2a33] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#c02128] transition-colors">
            <span class="truncate">Choose Plan</span>
          </button>
        </div>
        <div
          class="flex flex-col gap-6 rounded-lg border border-[#222222] bg-[#1a1a1a] p-8 transition-all duration-300 hover:scale-105">
          <div class="text-center">
            <h3 class="text-white text-2xl font-bold">Elite</h3>
            <p class="flex items-baseline justify-center gap-1 text-white mt-2">
              <span class="text-5xl font-black tracking-tighter">$99</span>
              <span class="text-gray-400">/month</span>
            </p>
          </div>
          <ul class="flex flex-col gap-4 text-sm">
            <li class="flex items-center gap-3 text-gray-300"><span
                class="material-symbols-outlined text-[#ea2a33]">check_circle</span>Gym Access</li>
            <li class="flex items-center gap-3 text-gray-300"><span
                class="material-symbols-outlined text-[#ea2a33]">check_circle</span>Group Classes</li>
            <li class="flex items-center gap-3 text-gray-300"><span
                class="material-symbols-outlined text-[#ea2a33]">check_circle</span>Personal Training (2/mo)</li>
            <li class="flex items-center gap-3 text-gray-300"><span
                class="material-symbols-outlined text-[#ea2a33]">check_circle</span>Exclusive Events</li>
          </ul>
          <button
            class="w-full mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-gray-700 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-600 transition-colors">
            <span class="truncate">Choose Plan</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PricesComponent',
})
</script>
