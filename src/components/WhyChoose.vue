<template>
    <section class="py-20 px-4 md:px-10 bg-[#1a1a1a]">
        <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-white text-4xl font-bold leading-tight tracking-tight md:text-5xl">Por qué elegirnos?
                </h2>
                <p class="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">Ofrecemos un enfoque integral del fitness,
                    combinando
                    orientación experta, equipos de última generación y una comunidad de apoyo para ayudarle a lograr
                    resultados duraderos.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div
                    class="flex flex-col items-center gap-4 p-6 bg-[#111111] rounded-lg border border-[#222222] transition-all duration-300 hover:border-[#ea2a33] hover:shadow-lg hover:shadow-[#ea2a33]/10">
                    <div class="p-4 bg-[#ea2a33] rounded-full">
                        <span class="material-symbols-outlined text-white text-3xl"> fitness_center </span>
                    </div>
                    <h3 class="text-white text-xl font-bold">Entrenadores expertos</h3>
                    <p class="text-gray-400 text-sm">Nuestros entrenadores certificados brindan orientación y apoyo
                        personalizados para ayudarle a alcanzar sus objetivos de fitness.</p>
                </div>
                <div
                    class="flex flex-col items-center gap-4 p-6 bg-[#111111] rounded-lg border border-[#222222] transition-all duration-300 hover:border-[#ea2a33] hover:shadow-lg hover:shadow-[#ea2a33]/10">
                    <div class="p-4 bg-[#ea2a33] rounded-full">
                        <span class="material-symbols-outlined text-white text-3xl"> favorite </span>
                    </div>
                    <h3 class="text-white text-xl font-bold">Programas personalizados</h3>
                    <p class="text-gray-400 text-sm">Creamos planes de entrenamiento personalizados adaptados a sus
                        necesidades y nivel de fitness individuales.</p>
                </div>
                <div
                    class="flex flex-col items-center gap-4 p-6 bg-[#111111] rounded-lg border border-[#222222] transition-all duration-300 hover:border-[#ea2a33] hover:shadow-lg hover:shadow-[#ea2a33]/10">
                    <div class="p-4 bg-[#ea2a33] rounded-full">
                        <span class="material-symbols-outlined text-white text-3xl"> groups </span>
                    </div>
                    <h3 class="text-white text-xl font-bold">Comunidad de apoyo</h3>
                    <p class="text-gray-400 text-sm">Únase a una vibrante comunidad de personas con ideas afines que lo
                        motivarán e inspirarán.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'WhyChoose',
})
</script>
