<template>
  <div class="hero-wrapper d-flex align-center">
    
    <div class="hero-gpu-layer">
      <v-img
        src="national-cancer-institute-VJVsEnR_vNE-unsplash (1).webp"
        cover
        eager
        class="hero-img"
      ></v-img>
      <div class="hero-overlay"></div>
    </div>

    <v-container class="hero-content">
      <v-row>
        <v-col cols="12" md="7" lg="6" class="text-center text-md-left">
          <v-chip variant="outlined" size="small" class="mb-4 px-4 text-secondary custom-chip">
            Afrosurance Brokers
          </v-chip>

          <h1 class="text-h3 mb-3 font-weight-bold text-white">
            Insurance for <span class="text-secondary">every</span> African.
          </h1>
          
          <p class="text-body-1 mb-8 text-grey-lighten-2 mx-auto mx-md-0 hero-desc">
            Simple, affordable coverage designed for the African informal economy. 
            Protect your family and your assets directly through WhatsApp.
          </p>
          
          <div class="d-flex ga-3 flex-column flex-sm-row justify-center justify-md-start">
            <v-btn size="large" color="primary" class="rounded-lg px-8 text-capitalize font-weight-bold" 
                   href="https://wa.me/27000000000" target="_blank" prepend-icon="mdi-whatsapp">
              Get Started on WhatsApp
            </v-btn>

            <v-btn size="large" variant="outlined" color="white" class="rounded-lg px-8 text-capitalize" @click="scrollToHow">
              Learn More
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
// Defining the function clearly inside script setup
const scrollToHow = (): void => {
  const el = document.querySelector('#how-it-works');
  if (el) {
    const navbarOffset = 90;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    
    window.scrollTo({
      top: elementPosition - navbarOffset,
      behavior: 'smooth'
    });
  }
};
</script>

<style scoped>
.hero-wrapper {
  height: 100dvh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #2d2d2f; /* Solid fallback */
}

.hero-gpu-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Force GPU rendering to prevent lag and memory purging */
  transform: translate3d(0, 0, 0); 
  will-change: transform;
  z-index: 0;
}

.hero-img {
  height: 100%;
  width: 100%;
}

:deep(.v-img__img) {
  /* Centered and cropped perfectly */
  object-position: center 40% !important;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Original Dark Colors */
  background: linear-gradient(
    to bottom, 
    rgba(45, 45, 47, 0.6) 20%, 
    rgba(45, 45, 47, 0.4) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
}

@media (min-width: 960px) {
  .hero-wrapper { height: 85vh; }
  .hero-overlay {
    background: linear-gradient(to right, rgba(45, 45, 47, 0.7) 20%, rgba(45, 45, 47, 0.4) 100%);
  }
}

.custom-chip {
  background-color: rgba(var(--v-theme-secondary), 0.1) !important;
  color: rgb(var(--v-theme-secondary)) !important;
}

.hero-desc {
  max-width: 500px;
  line-height: 1.6;
}

h1 {
  font-family: 'Playfair Display', serif !important;
  letter-spacing: -0.5px !important;
}

@media (max-width: 600px) {
  h1 { font-size: 2.1rem !important; }
  .v-btn { width: 100%; }
}
</style>