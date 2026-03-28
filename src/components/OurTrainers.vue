<template>
    <section class="py-20 px-4 md:px-10 bg-[#1a1a1a]">
        <div class="max-w-5xl mx-auto">
            <h2 class="text-white text-4xl font-bold text-center mb-12 md:text-5xl">Our Trainers</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div class="text-center group">
                    <div class="relative inline-block">
                        <img alt="Emily Carter"
                            class="w-40 h-40 rounded-full object-cover mx-auto transition-all duration-300 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0WGEGvX2uv6xp2UAxsfUfwskZaJr2wZff86sbxyjoRNbPhAxgl7XCr1jcUqJY0dMdGzBrGCPAAq2eSHnJwzM24nTfc2aD4dNuVbs8weh0ZZTa7gnOSjafuzPe4o81hD7zJ1JImhsUKkYRsJeWsNyXFVeV64UKJ9OGzWbuSfquJA-0lGE99a8MOaWcUXPqCf5_hyTbgH1eBbvF9_EKTq7wMkwJPPWZaHpHsIhHUVj7cdfpkgcm9ZyHigPP7rTCfuqtCOB8petl_oZ-" />
                        <div
                            class="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        </div>
                    </div>
                    <h3 class="text-white text-xl font-bold mt-4">Emily Carter</h3>
                    <p class="text-[#ea2a33] text-sm font-medium">Yoga Instructor</p>
                </div>
                <div class="text-center group">
                    <div class="relative inline-block">
                        <img alt="David Lee"
                            class="w-40 h-40 rounded-full object-cover mx-auto transition-all duration-300 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3udGnahQxmLyXqB9xz3vPmAnfWxgEACzYapf0zRmNTf5jtrbajXpa4E5M5LTngVZBMPzb1JT1IP9jIP5oYLPmm1H5aREDfPhIrki5UVkmdpgKqDYT3OkmtZFxKo-XOMPMUvKTF73vzrt-k_vLrP2kmqmxKkaAIpME0HKNVP53kgZ3cM-qQIsxz6L5E3eL9MYwAL7iuOUoh6aBS4Hf4VzaKoI4YneKrtf_mGq-NbPv49C8WQp_JRaJoWmUafuaBTGD9orq-iB9ncOn" />
                        <div
                            class="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        </div>
                    </div>
                    <h3 class="text-white text-xl font-bold mt-4">David Lee</h3>
                    <p class="text-[#ea2a33] text-sm font-medium">Strength &amp; Conditioning</p>
                </div>
                <div class="text-center group">
                    <div class="relative inline-block">
                        <img alt="Jessica Brown"
                            class="w-40 h-40 rounded-full object-cover mx-auto transition-all duration-300 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXGnuNQfaZc4OoQcZCUeUqa_szdbYuv-8t4OBudbO52Y-KP7YXEe67Sym8NLxV9mPAutS43sAJKQ1yqYbGSG2qCL35ZCEhpCf0tltuzgYxbs85Cxif0il_fITFA7KfDUc6DngdtOGPHQiDHOPSlj2RMUFK9_n_ODDyHcfTFlTnRDs07es0lszzAL5Wj5ra3HOMKYxUf3mh95Bj5yH_0qDEZxhH-uQ91cJN6izA6j2uuUyVuflzAKl3B4Xti2IeCEKOAb6m22XFOYm1" />
                        <div
                            class="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        </div>
                    </div>
                    <h3 class="text-white text-xl font-bold mt-4">Jessica Brown</h3>
                    <p class="text-[#ea2a33] text-sm font-medium">Group Fitness Instructor</p>
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