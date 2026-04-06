<template>
  <section id="contact" class="location-section">
    <div class="location-container">

      <!-- Header -->
      <div class="location-header">
        <span class="location-label">Ubicación</span>
        <h2 class="location-title">Visítanos</h2>
        <p class="location-subtitle">Estamos en Emiliano Zapata, Méx. — ven y conoce nuestras instalaciones.</p>
      </div>

      <!-- Contenido: mapa + info -->
      <div class="location-content">

        <!-- Mapa responsive -->
        <div class="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249.2933174446719!2d-98.97488394338936!3d19.350655111533005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e3003dbff6cf%3A0x301c3be14eec6aad!2sIron%20Brother%E2%80%99s%20gym!5e0!3m2!1ses!2smx!4v1775023617129!5m2!1ses!2smx"
            class="map-iframe" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación Iron Brothers Gym"></iframe>
        </div>

        <!-- Info cards -->
        <div class="info-panel">
          <div v-for="item in infoItems" :key="item.label" class="info-card">
            <span class="info-icon material-symbols-outlined">{{ item.icon }}</span>
            <div>
              <p class="info-label">{{ item.label }}</p>
              <p class="info-value">{{ item.value }}</p>
              <p class="info-value">{{ item.additional }}</p>
            </div>
          </div>

          <a :href="googleMapsUrl" target="_blank" class="directions-btn">
            <span class="material-symbols-outlined">near_me</span>
            Cómo llegar
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface InfoItem {
  icon: string
  label: string
  value: string
  additional?: string
}

export default defineComponent({
  name: 'LocationComponent',
  setup() {
    const infoItems: InfoItem[] = [
      {
        icon: 'location_on',
        label: 'Dirección',
        value: 'San Felipe & Xaltenco, 56490 Emiliano Zapata, Méx.',
      },
      {
        icon: 'call',
        label: 'Teléfono',
        value: '56 1356 8367',
      },
      {
        icon: 'schedule',
        label: 'Horario',
        value: 'Lun – Vie: 7:30 am – 10:00 pm',
        additional: 'Sáb: 8:00 am - 2:00 pm',
      },
    ]

    const googleMapsUrl =
      'https://www.google.com/maps/dir/?api=1&destination=Iron+Brother%27s+gym+Emiliano+Zapata'

    return { infoItems, googleMapsUrl }
  },
})
</script>

<style scoped>
/* ── Sección ── */
.location-section {
  padding: 6rem 1.5rem;
  background: #1a1a1a;
}

.location-container {
  max-width: 1100px;
  margin: 0 auto;
}

/* ── Header ── */
.location-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.location-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ea2a33;
  margin-bottom: 0.75rem;
}

.location-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.75rem;
}

.location-subtitle {
  font-size: 1rem;
  color: #9ca3af;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ── Layout: mapa + info ── */
.location-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

@media (max-width: 768px) {
  .location-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* ── Mapa ── */
.map-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

@media (max-width: 768px) {
  .map-wrapper {
    aspect-ratio: 16 / 9;
  }
}

.map-iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* ── Panel de info ── */
.info-panel {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.875rem;
  padding: 1.25rem 1.5rem;
  transition: border-color 0.3s ease;
}

.info-card:hover {
  border-color: rgba(234, 42, 51, 0.35);
}

.info-icon {
  font-size: 1.5rem;
  color: #ea2a33;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6b7280;
  margin: 0 0 0.25rem;
}

.info-value {
  font-size: 0.95rem;
  font-weight: 500;
  color: #e5e7eb;
  margin: 0;
  line-height: 1.5;
}

/* ── Botón Cómo llegar ── */
.directions-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: #ea2a33;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.2s ease;
}

.directions-btn:hover {
  background: #c02128;
  transform: translateY(-2px);
}

.directions-btn .material-symbols-outlined {
  font-size: 1.25rem;
}
</style>
