<template>
  <section id="services" class="py-20 px-4 md:px-10">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-white text-4xl font-bold leading-tight tracking-tight text-center mb-12 md:text-5xl">Servicios
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[800px]">
        <div class="md:col-span-8 relative overflow-hidden group">
          <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-alt="Group of intense people performing synchonized heavy medicine ball slams in a dimly lit studio"
            src="../assets/imgs/iron-brothers-gym.jpeg" />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div class="absolute bottom-12 left-2 md:left-6 lg:left-12">
            <h3 class="font-headline font-black text-white text-5xl uppercase italic tracking-tighter">Entrenamiento con
              Pesas</h3>
            <p class="max-w-md text-white/80 mt-4 font-body uppercase tracking-widest text-sm">Hipertrofia y fuerza.
              Acceso total a nuestra zona de Powerlifting y culturismo con asesoría en sala.</p>
          </div>
        </div>
        <div class="md:col-span-4 grid grid-rows-2 gap-4">
          <div class="relative overflow-hidden group">
            <img class="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
              data-alt="Woman in yoga pose on a black mat with dramatic silhouette lighting against a dark background"
              src="../assets/imgs/personal-training-gym.jpg" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div class="absolute bottom-12 left-2">
              <h3 class="font-headline font-bold text-4xl uppercase tracking-tighter text-white">Entrenamiento Personal
              </h3>
              <p class="max-w-md text-white/80 mt-4 font-body uppercase tracking-widest text-sm">Coaching 1 a 1 adaptado
                a tus objetivos, nivel actual y patologías. Optimiza cada repetición.</p>
            </div>
          </div>
          <div class="relative overflow-hidden group">
            <img class="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
              data-alt="Close up of high performance indoor cycling bike wheel in motion with neon red lighting reflections"
              src="../assets/imgs/personal-training.jpeg" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div class="absolute bottom-12 left-2">
              <h3 class="font-headline font-bold text-4xl uppercase tracking-tighter text-white">Preparación para
                Competencias</h3>
              <p class="max-w-md text-white/80 mt-4 font-body uppercase tracking-widest text-sm">Asesoría integral para
                atletas de alto rendimiento. Puesta a punto, nutrición y poses para tarima.</p>
            </div>
          </div>
        </div>
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
