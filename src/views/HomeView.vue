<template>
  <main class="relative flex size-full min-h-screen flex-col bg-[#111111] group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <NavbarComponent />
      <HeroComponent />
      <WhyChoose />
      <SuccessStories />
      <ServicesComponent />
      <OurTrainers />
      <PricesComponent />
      <LocationComponent />
      <FooterComponent />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import PricesComponent from '@/components/PricesComponent.vue'
import LocationComponent from '@/components/LocationComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import WhyChoose from '@/components/WhyChoose.vue'
import SuccessStories from '@/components/SuccessStories.vue'
import OurTrainers from '@/components/OurTrainers.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    NavbarComponent,
    HeroComponent,
    WhyChoose,
    SuccessStories,
    ServicesComponent,
    OurTrainers,
    PricesComponent,
    LocationComponent,
    FooterComponent,
  },
})
</script>
