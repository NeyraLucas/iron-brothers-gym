<template>
  <section id="prices" class="py-20 px-4 md:px-10">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-white text-4xl font-bold text-center mb-12 md:text-5xl">Nuestros <span
          class="accent">Planes</span></h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div v-for="plan in plans" :key="plan.id" :class="[
          'flex flex-col gap-6 rounded-lg p-8 relative transition-all duration-300',
          plan.featured
            ? 'border-2 border-[#ea2a33] bg-[#1a1a1a] scale-105 shadow-2xl shadow-[#ea2a33]/20'
            : 'border border-[#222222] bg-[#1a1a1a] hover:scale-105',
        ]">
          <!-- Badge "Most Popular" -->
          <div v-if="plan.badge"
            class="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#ea2a33] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
            {{ plan.badge }}
          </div>

          <!-- Header: nombre y precio -->
          <div class="text-center">
            <h3 class="text-white text-2xl font-bold">{{ plan.name }}</h3>
            <p class="flex items-baseline justify-center gap-1 text-white mt-2">
              <span class="text-5xl font-black tracking-tighter">{{ plan.price }}</span>
              <span class="text-gray-400">{{ plan.period }}</span>
            </p>
          </div>

          <!-- Lista de beneficios -->
          <ul class="flex flex-col gap-4 text-sm flex-1">
            <li v-for="benefit in plan.benefits" :key="benefit.label" :class="[
              'flex items-center gap-3',
              benefit.included ? 'text-gray-300' : 'text-gray-500',
            ]">
              <span class="material-symbols-outlined" :class="benefit.included ? 'text-[#ea2a33]' : ''">
                {{ benefit.included ? 'check_circle' : 'cancel' }}
              </span>
              {{ benefit.label }}
            </li>
          </ul>

          <!-- CTA -->
          <a :href="plan.contact" target="_blank" :class="[
            'w-full mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors',
            plan.featured
              ? 'bg-[#ea2a33] hover:bg-[#c02128]'
              : 'bg-gray-700 hover:bg-gray-600',
          ]">
            <span class="truncate">{{ plan.cta }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const phoneNumber = ref('525613568367');
const message = ref('Hola, quiero cotizar');
const whatsappUrl = `https://wa.me/${phoneNumber.value}?text=${encodeURIComponent(message.value)}`;


// ─── Types ───────────────────────────────────────────────────────────────────

interface Benefit {
  label: string
  included: boolean
}

interface Plan {
  id: string
  name: string
  price: string
  period: string
  badge?: string
  featured: boolean
  cta: string
  contact: string
  benefits: Benefit[]
}

// ─── Data ────────────────────────────────────────────────────────────────────

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Entrenamiento con Pesas',
    price: '$350',
    period: '/mes',
    featured: false,
    cta: 'Elegir Plan',
    contact: whatsappUrl,
    benefits: [
      { label: 'Acceso al Gym', included: true },
      { label: 'Plan de entrenamiento', included: true },
      { label: 'Plan nutricional estructurado', included: false },
      { label: 'Guía de suplementación', included: false }
    ],
  },
  {
    id: 'premium',
    name: 'Asesoría Personalizada',
    price: '$500',
    period: '/mes',
    badge: 'Más Popular',
    featured: true,
    cta: 'Elegir Plan',
    contact: whatsappUrl,
    benefits: [
      { label: 'Acceso al Gym', included: true },
      { label: 'Plan de entrenamiento estructurado', included: true },
      { label: 'Plan nutricional estructurado', included: true },
      { label: 'Guía de suplementación', included: true },
      { label: 'Atención personalizada durante todo el proceso', included: true },
      { label: 'Metodología enfocada en resultados reales', included: true },
    ],
  },
  {
    id: 'elite',
    name: 'Preparación para Competencias',
    price: '$1000',
    period: '/mes',
    featured: false,
    cta: 'Elegir Plan',
    contact: whatsappUrl,
    benefits: [
      { label: 'Acceso al Gym', included: true },
      { label: 'Plan de entrenamiento enfocado en rendimiento y presentación física', included: true },
      { label: 'Plan nutricional específico, adaptado a la categoría de competencia', included: true },
      { label: 'Estrategia de suplementación', included: true },
      { label: 'Ajustes continuos según progreso', included: true },
      { label: 'Acompañamiento personalizado durante todo el proceso', included: true },
      { label: 'Preparación para tarima (si aplica)', included: true },
    ],
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default defineComponent({
  name: 'PricesComponent',
  setup() {
    return { plans }
  },
})
</script>

<style scoped>
.accent {
  color: #ea2a33;
}
</style>