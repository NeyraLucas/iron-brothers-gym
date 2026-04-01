<template>
    <section class="py-20 px-4 md:px-10 bg-[#1a1a1a]">
        <div class="max-w-6xl mx-auto">
            <!-- Título -->
            <h2 class="text-white text-4xl font-bold leading-tight tracking-tight text-center mb-4 md:text-5xl">
                Historias de Éxito
            </h2>
            <p class="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
                Resultados reales de personas reales. Esto es lo que logran nuestros miembros.
            </p>

            <!-- Carousel -->
            <div class="carousel-wrapper">
                <!-- Arrow izquierda -->
                <button
                    class="carousel-arrow carousel-arrow--left"
                    @click="prev"
                    :disabled="currentIndex === 0"
                    aria-label="Anterior"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"/>
                    </svg>
                </button>

                <!-- Grid de 4 imágenes -->
                <div
                    class="carousel-track"
                    ref="trackRef"
                    @touchstart.passive="onTouchStart"
                    @touchmove="onTouchMove"
                    @touchend="onTouchEnd"
                >
                    <div
                        class="carousel-grid"
                        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
                    >
                        <template v-for="(page, pageIdx) in pages" :key="pageIdx">
                            <div class="carousel-page">
                                <div
                                    v-for="(img, imgIdx) in page"
                                    :key="imgIdx"
                                    class="carousel-item"
                                    @click="openLightbox(img)"
                                >
                                    <img :src="img" :alt="`Success story ${pageIdx * 4 + imgIdx + 1}`" />
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Arrow derecha -->
                <button
                    class="carousel-arrow carousel-arrow--right"
                    @click="next"
                    :disabled="currentIndex === pages.length - 1"
                    aria-label="Siguiente"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </button>
            </div>

            <!-- Dots -->
            <div class="carousel-dots">
                <button
                    v-for="(_, idx) in pages"
                    :key="idx"
                    class="carousel-dot"
                    :class="{ active: idx === currentIndex }"
                    @click="currentIndex = idx"
                    :aria-label="`Página ${idx + 1}`"
                />
            </div>
        </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
        <Transition name="lightbox">
            <div
                v-if="selectedImage"
                class="lightbox-overlay"
                @click.self="closeLightbox"
            >
                <!-- Botón cerrar -->
                <button class="lightbox-close" @click="closeLightbox" aria-label="Cerrar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>

                <!-- Imagen -->
                <div class="lightbox-img-wrapper">
                    <img :src="selectedImage" alt="Preview" class="lightbox-img" />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue'

// Import dinámico de las imágenes locales con Vite
const imageModules = import.meta.glob('@/assets/imgs/successStories/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' })
const images: string[] = Object.values(imageModules) as string[]

const ITEMS_PER_PAGE = 4

export default defineComponent({
    name: 'SuccessStories',
    setup() {
        const currentIndex = ref(0)
        const trackRef = ref<HTMLElement | null>(null)

        const pages = computed<string[][]>(() => {
            const result: string[][] = []
            for (let i = 0; i < images.length; i += ITEMS_PER_PAGE) {
                result.push(images.slice(i, i + ITEMS_PER_PAGE))
            }
            return result
        })

        function prev() {
            if (currentIndex.value > 0) currentIndex.value--
        }

        function next() {
            if (currentIndex.value < pages.value.length - 1) currentIndex.value++
        }

        // --- Touch / Swipe ---
        let touchStartX = 0
        let touchStartY = 0
        let isHorizontalSwipe: boolean | null = null

        function onTouchStart(e: TouchEvent) {
            const touch = e.touches[0]
            if (!touch) return
            touchStartX = touch.clientX
            touchStartY = touch.clientY
            isHorizontalSwipe = null
        }

        function onTouchMove(e: TouchEvent) {
            const touch = e.touches[0]
            if (!touch) return
            const dx = touch.clientX - touchStartX
            const dy = touch.clientY - touchStartY

            // Determinar dirección dominante solo la primera vez
            if (isHorizontalSwipe === null) {
                isHorizontalSwipe = Math.abs(dx) > Math.abs(dy)
            }

            // Solo prevenir scroll vertical si el gesto es horizontal
            if (isHorizontalSwipe) {
                e.preventDefault()
            }
        }

        function onTouchEnd(e: TouchEvent) {
            if (!isHorizontalSwipe) return
            const touch = e.changedTouches[0]
            if (!touch) return
            const dx = touch.clientX - touchStartX
            const THRESHOLD = 50
            if (dx < -THRESHOLD) next()
            else if (dx > THRESHOLD) prev()
        }

        // --- Lightbox ---
        const selectedImage = ref<string | null>(null)

        function openLightbox(img: string) {
            selectedImage.value = img
            document.body.style.overflow = 'hidden'
        }

        function closeLightbox() {
            selectedImage.value = null
            document.body.style.overflow = ''
        }

        function onKeydown(e: KeyboardEvent) {
            if (e.key === 'Escape') closeLightbox()
        }

        onMounted(() => window.addEventListener('keydown', onKeydown))
        onUnmounted(() => {
            window.removeEventListener('keydown', onKeydown)
            document.body.style.overflow = ''
        })

        return { currentIndex, pages, trackRef, prev, next, onTouchStart, onTouchMove, onTouchEnd, selectedImage, openLightbox, closeLightbox }
    }
})
</script>

<style scoped>
.carousel-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
}

/* Track visible */
.carousel-track {
    flex: 1;
    overflow: hidden;
    border-radius: 16px;
}

/* Strip horizontal con todas las páginas */
.carousel-grid {
    display: flex;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
}

/* Cada "página" ocupa el 100% del track */
.carousel-page {
    min-width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

/* Cada imagen */
.carousel-item {
    aspect-ratio: 3 / 4;
    overflow: hidden;
    border-radius: 12px;
    background: #2a2a2a;
}

.carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease, filter 0.4s ease;
    filter: brightness(0.9);
}

.carousel-item {
    cursor: pointer;
}

.carousel-item img:hover {
    transform: scale(1.05);
    filter: brightness(1);
}

/* Flechas */
.carousel-arrow {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.25s ease, border-color 0.25s ease, opacity 0.25s ease;
    backdrop-filter: blur(6px);
}

.carousel-arrow svg {
    width: 20px;
    height: 20px;
}

.carousel-arrow:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
}

.carousel-arrow:disabled {
    opacity: 0.25;
    cursor: default;
}

/* Dots */
.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
}

.carousel-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    padding: 0;
}

.carousel-dot.active {
    background: #e5e5e5;
    transform: scale(1.3);
}

/* Responsive: 2 columnas en mobile */
@media (max-width: 640px) {
    .carousel-page {
        grid-template-columns: repeat(2, 1fr);
    }
}
/* ===== Lightbox ===== */
.lightbox-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.lightbox-img-wrapper {
    max-width: min(90vw, 700px);
    max-height: 90vh;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7);
}

.lightbox-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    max-height: 90vh;
}

.lightbox-close {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
    backdrop-filter: blur(6px);
    z-index: 10000;
}

.lightbox-close svg {
    width: 18px;
    height: 18px;
}

.lightbox-close:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.5);
}

/* Transición de entrada/salida */
.lightbox-enter-active,
.lightbox-leave-active {
    transition: opacity 0.3s ease;
}

.lightbox-enter-active .lightbox-img-wrapper,
.lightbox-leave-active .lightbox-img-wrapper {
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
    opacity: 0;
}

.lightbox-enter-from .lightbox-img-wrapper,
.lightbox-leave-to .lightbox-img-wrapper {
    transform: scale(0.85);
    opacity: 0;
}
</style>