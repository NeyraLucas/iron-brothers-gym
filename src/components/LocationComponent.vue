<template>
  <section id="contact" class="py-20 px-4 md:px-10 bg-[#1a1a1a]">
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col">
        <h2 class="text-white text-4xl font-bold mb-8 md:text-5xl">Visítanos</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249.2933174446719!2d-98.97488394338936!3d19.350655111533005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e3003dbff6cf%3A0x301c3be14eec6aad!2sIron%20Brother%E2%80%99s%20gym!5e0!3m2!1ses!2smx!4v1775023617129!5m2!1ses!2smx"
          width="600" height="450" style="border:0;" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="mt-8 text-white">
          <p class="font-bold text-lg">Iron Brothers Gym</p>
          <p class="text-gray-400 mt-2">San Felipe & Xaltenco, 56490 Emiliano Zapata, Méx.</p>
          <p class="text-gray-400 mt-1">Telefono: 56 1356 8367</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LocationComponent',
})
</script>
