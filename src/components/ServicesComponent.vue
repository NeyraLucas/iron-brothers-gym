<template>
  <section class="py-20 px-4 md:px-10">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-white text-4xl font-bold leading-tight tracking-tight text-center mb-12 md:text-5xl">Classes &amp;
        Services</h2>
      <div class="border-b border-[#222222] mb-8">
        <div class="flex justify-center gap-8">
          <a class="flex flex-col items-center justify-center border-b-2 border-[#ea2a33] text-white pb-3 pt-2 px-2"
            href="#">
            <p class="text-sm font-bold tracking-wide">Schedule</p>
          </a>
          <a class="flex flex-col items-center justify-center border-b-2 border-transparent text-gray-400 hover:text-white hover:border-white pb-3 pt-2 px-2 transition-colors"
            href="#">
            <p class="text-sm font-bold tracking-wide">Trainers</p>
          </a>
          <a class="flex flex-col items-center justify-center border-b-2 border-transparent text-gray-400 hover:text-white hover:border-white pb-3 pt-2 px-2 transition-colors"
            href="#">
            <p class="text-sm font-bold tracking-wide">Services</p>
          </a>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead class="bg-[#1a1a1a]">
            <tr>
              <th class="p-4 text-white text-sm font-medium">Time</th>
              <th class="p-4 text-white text-sm font-medium">Class</th>
              <th class="p-4 text-white text-sm font-medium">Trainer</th>
              <th class="p-4 text-white text-sm font-medium">Location</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#222222]">
            <tr class="hover:bg-[#1a1a1a] transition-colors">
              <td class="p-4 text-gray-400 text-sm">6:00 AM</td>
              <td class="p-4 text-white text-sm font-medium">Morning Yoga</td>
              <td class="p-4 text-gray-400 text-sm">Emily Carter</td>
              <td class="p-4 text-gray-400 text-sm">Studio 1</td>
            </tr>
            <tr class="hover:bg-[#1a1a1a] transition-colors">
              <td class="p-4 text-gray-400 text-sm">7:30 AM</td>
              <td class="p-4 text-white text-sm font-medium">Strength Training</td>
              <td class="p-4 text-gray-400 text-sm">David Lee</td>
              <td class="p-4 text-gray-400 text-sm">Main Gym</td>
            </tr>
            <tr class="hover:bg-[#1a1a1a] transition-colors">
              <td class="p-4 text-gray-400 text-sm">9:00 AM</td>
              <td class="p-4 text-white text-sm font-medium">Cardio Blast</td>
              <td class="p-4 text-gray-400 text-sm">Jessica Brown</td>
              <td class="p-4 text-gray-400 text-sm">Studio 2</td>
            </tr>
            <tr class="hover:bg-[#1a1a1a] transition-colors">
              <td class="p-4 text-gray-400 text-sm">5:00 PM</td>
              <td class="p-4 text-white text-sm font-medium">Evening Yoga</td>
              <td class="p-4 text-gray-400 text-sm">Emily Carter</td>
              <td class="p-4 text-gray-400 text-sm">Studio 1</td>
            </tr>
            <tr class="hover:bg-[#1a1a1a] transition-colors">
              <td class="p-4 text-gray-400 text-sm">6:30 PM</td>
              <td class="p-4 text-white text-sm font-medium">CrossFit</td>
              <td class="p-4 text-gray-400 text-sm">David Lee</td>
              <td class="p-4 text-gray-400 text-sm">Main Gym</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServicesComponent',
})
</script>
