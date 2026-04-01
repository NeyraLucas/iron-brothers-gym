<template>
  <header
    class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#222222] px-10 py-3 fixed top-0 left-0 right-0 bg-[#111111] z-50">
    <div class="flex items-center gap-4 text-white">
      <svg class="h-8 w-8 text-[#ea2a33]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd"
          d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
          fill="currentColor" fill-rule="evenodd"></path>
      </svg>
      <h2 class="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Iron Brothers Gym</h2>
    </div>
    <nav class="hidden md:flex flex-1 justify-center gap-8">
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors" href="#">Home</a>
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors"
        href="#stories">Historias</a>
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors"
        href="#services">Servicios</a>
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors"
        href="#trainers">Trainers</a>
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors"
        href="#prices">Precios</a>
      <a class="text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors"
        href="#contact">Contacto</a>
    </nav>
    <div class="flex items-center gap-4">
      <button
        class="hidden md:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-[#ea2a33] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#c02128] transition-colors">
        <a :href="whatsappUrl" target="_blank"
          class="flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
          WhatsApp
        </a>
      </button>
      <!-- Botón hamburguesa / cerrar -->
      <button class="md:hidden text-white focus:outline-none" @click="toggleMenu" aria-label="Toggle navigation menu"
        :aria-expanded="isMenuOpen">
        <span class="material-symbols-outlined transition-transform duration-300">
          {{ isMenuOpen ? 'close' : 'menu' }}
        </span>
      </button>
    </div>
  </header>

  <!-- Menú mobile (overlay) -->
  <Transition name="mobile-menu">
    <div v-if="isMenuOpen"
      class="md:hidden fixed top-[57px] left-0 right-0 bottom-0 bg-[#111111] z-40 flex flex-col items-center justify-center gap-8"
      @click.self="closeMenu">
      <a v-for="link in navLinks" :key="link.label" :href="link.href"
        class="text-white text-2xl font-semibold hover:text-[#ea2a33] transition-colors duration-200"
        @click="closeMenu">
        {{ link.label }}
      </a>
      <button
        class="mt-4 flex cursor-pointer items-center justify-center rounded-md h-12 px-8 bg-[#ea2a33] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#c02128] transition-colors">
        Join Now
      </button>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavbarComponent',
  setup() {
    const isMenuOpen = ref(false)

    const navLinks = [
      { label: 'Home', href: '#' },
      { label: 'Historias', href: '#stories' },
      { label: 'Servicios', href: '#services' },
      { label: 'Entrenadores', href: '#trainers' },
      { label: 'Precios', href: '#prices' },
      { label: 'Contacto', href: '#contact' },
    ]

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value
    }

    function closeMenu() {
      isMenuOpen.value = false
    }

    const phoneNumber = ref('525613568367');
    const message = ref('Hola, quiero cotizar');
    const whatsappUrl = `https://wa.me/${phoneNumber.value}?text=${encodeURIComponent(message.value)}`;


    return { isMenuOpen, navLinks, toggleMenu, closeMenu, whatsappUrl }
  },
})


</script>

<style scoped>
/* Animación de entrada/salida del menú mobile */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
