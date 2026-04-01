<template>
    <section id="trainers" class="py-20 px-4 md:px-10 bg-[#1a1a1a]">
        <div class="max-w-5xl mx-auto">
            <h2 class="text-white text-4xl font-bold text-center mb-12 md:text-5xl">Entrenadores</h2>
            <div class="grid grid-cols-1 gap-8">
                <div class="text-center group">
                    <div class="relative inline-block">
                        <img alt="Emily Carter"
                            class="w-40 h-40 rounded-full object-cover mx-auto transition-all duration-300 group-hover:scale-105"
                            src="../assets/imgs/entrenador-angel.jpeg" />
                        <div
                            class="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        </div>
                    </div>
                    <h3 class="text-white text-xl font-bold mt-4">Angel Alpizar Loya</h3>
                    <p class="text-[#ea2a33] text-sm font-medium">Entrenador</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'OurTrainers',
})
</script>