<template>
  <section id="reviews" class="reviews-section">
    <div class="reviews-container">

      <!-- Header -->
      <div class="reviews-header">
        <span class="reviews-label">Testimonios</span>
        <h2 class="reviews-title">Lo que dicen nuestros <span class="accent">miembros</span></h2>
        <p class="reviews-subtitle">Resultados reales de personas reales que cambiaron su vida en Iron Brothers Gym.</p>
      </div>

      <!-- Grid de reviews -->
      <div class="reviews-grid">
        <article
          v-for="review in activeReviews"
          :key="review.id"
          class="review-card"
        >
          <div class="review-quote">"</div>
          <p class="review-comment">{{ review.comment }}</p>
          <div class="review-footer">
            <div class="review-avatar">{{ getInitials(review.name) }}</div>
            <div class="review-info">
              <span class="review-name">{{ review.name }}</span>
              <div class="review-stars">
                <span v-for="star in 5" :key="star" class="star">★</span>
              </div>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useReviews } from '@/composables/useReviews'

export default defineComponent({
  name: 'ReviewsComponent',
  setup() {
    const { activeReviews } = useReviews()

    function getInitials(name: string): string {
      return name
        .split(' ')
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join('')
    }

    return { activeReviews, getInitials }
  },
})
</script>

<style scoped>
.reviews-section {
  padding: 6rem 1.5rem;
  background: #111111;
  position: relative;
  overflow: hidden;
}

.reviews-section::before {
  content: '';
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(234, 42, 51, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.reviews-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ── Header ── */
.reviews-header {
  text-align: center;
  margin-bottom: 4rem;
}

.reviews-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ea2a33;
  margin-bottom: 0.75rem;
}

.reviews-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 1rem;
}

.reviews-title .accent {
  color: #ea2a33;
}

.reviews-subtitle {
  font-size: 1rem;
  color: #9ca3af;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ── Grid ── */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

/* ── Card ── */
.review-card {
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(8px);
}

.review-card:hover {
  transform: translateY(-6px);
  border-color: rgba(234, 42, 51, 0.35);
  box-shadow: 0 16px 40px rgba(234, 42, 51, 0.12);
}

/* Comilla decorativa */
.review-quote {
  font-size: 5rem;
  line-height: 1;
  color: #ea2a33;
  font-family: Georgia, serif;
  opacity: 0.6;
  position: absolute;
  top: 0.75rem;
  right: 1.5rem;
  pointer-events: none;
  user-select: none;
}

.review-comment {
  font-size: 0.95rem;
  color: #d1d5db;
  line-height: 1.75;
  flex: 1;
  margin: 0;
}

/* ── Footer de la card ── */
.review-footer {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.review-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ea2a33, #c02128);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: 0.05em;
}

.review-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.review-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
}

.review-stars {
  display: flex;
  gap: 1px;
}

.star {
  color: #f59e0b;
  font-size: 0.8rem;
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .reviews-section {
    padding: 4rem 1rem;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }
}
</style>