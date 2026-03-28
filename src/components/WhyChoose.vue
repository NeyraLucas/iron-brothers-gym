<template>
    <section class="py-20 px-4 md:px-10">
        <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-white text-4xl font-bold leading-tight tracking-tight md:text-5xl">Why Choose
                    FitnessPro?</h2>
                <p class="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">We offer a comprehensive approach to fitness,
                    combining expert guidance, cutting-edge equipment, and a supportive community to help you achieve
                    lasting results.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div
                    class="flex flex-col items-center gap-4 p-6 bg-[#1a1a1a] rounded-lg border border-[#222222] transition-all duration-300 hover:border-[#ea2a33] hover:shadow-lg hover:shadow-[#ea2a33]/10">
                    <div class="p-4 bg-[#ea2a33] rounded-full">
                        <span class="material-symbols-outlined text-white text-3xl"> fitness_center </span>
                    </div>
                    <h3 class="text-white text-xl font-bold">Expert Trainers</h3>
                    <p class="text-gray-400 text-sm">Our certified trainers provide personalized guidance and support to
                        help you reach your fitness goals.</p>
                </div>
                <div
                    class="flex flex-col items-center gap-4 p-6 bg-[#1a1a1a] rounded-lg border border-[#222222] transition-all duration-300 hover:border-[#ea2a33] hover:shadow-lg hover:shadow-[#ea2a33]/10">
                    <div class="p-4 bg-[#ea2a33] rounded-full">
                        <span class="material-symbols-outlined text-white text-3xl"> favorite </span>
                    </div>
                    <h3 class="text-white text-xl font-bold">Personalized Programs</h3>
                    <p class="text-gray-400 text-sm">We create customized workout plans tailored to your individual
                        needs and fitness level.</p>
                </div>
                <div
                    class="flex flex-col items-center gap-4 p-6 bg-[#1a1a1a] rounded-lg border border-[#222222] transition-all duration-300 hover:border-[#ea2a33] hover:shadow-lg hover:shadow-[#ea2a33]/10">
                    <div class="p-4 bg-[#ea2a33] rounded-full">
                        <span class="material-symbols-outlined text-white text-3xl"> groups </span>
                    </div>
                    <h3 class="text-white text-xl font-bold">Community Support</h3>
                    <p class="text-gray-400 text-sm">Join a vibrant community of like-minded individuals who will
                        motivate and inspire you.</p>
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
