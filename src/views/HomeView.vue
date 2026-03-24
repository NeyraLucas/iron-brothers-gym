<template>
  <main>
    <NavbarComponent />
    <HeroComponent />
    <ServicesComponent />
    <PricesComponent />
    <LocationComponent />
    <FooterComponent />
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

export default defineComponent({
  name: 'HomeView',
  components: {
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    PricesComponent,
    LocationComponent,
    FooterComponent,
  },
})
</script>
