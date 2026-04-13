<template>
  <div class="hero-section d-flex align-center">
    <div class="hero-bg"></div>
    
    <div class="hero-overlay"></div>

    <v-container style="position: relative; z-index: 2;">
      <v-row>
        <v-col cols="12" md="7" lg="6" class="text-center text-md-left">
          <v-chip
            variant="outlined"
            size="small"
            class="mb-4 px-4 text-secondary custom-chip"
          >
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
            <v-btn 
              size="large" 
              color="primary" 
              class="rounded-lg px-8 text-capitalize font-weight-bold" 
              href="https://wa.me/27000000000"
              target="_blank"
              prepend-icon="mdi-whatsapp"
            >
              Get Started on WhatsApp
            </v-btn>

            <v-btn 
              size="large" 
              variant="outlined" 
              color="white" 
              class="rounded-lg px-8 text-capitalize" 
              @click="scrollToHow"
            >
              Learn More
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const scrollToHow = () => {
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
.hero-section {
  /* Locked height to prevent mobile "transforming" */
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #2d2d2f; /* Fallback while loading */
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/national-cancer-institute-VJVsEnR_vNE-unsplash (1).webp');
  background-size: cover;
  background-position: center 20%;
  background-repeat: no-repeat;
  
  /* GPU Acceleration to fix lag */
  will-change: transform;
  transform: translateZ(0);
  
  /* Pinned effect */
  background-attachment: fixed;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* Lighter dark hue as requested */
  background: linear-gradient(
    to bottom, 
    rgba(45, 45, 47, 0.5) 0%, 
    rgba(45, 45, 47, 0.2) 50%,
    rgba(45, 45, 47, 0.8) 100%
  );
}

@media (min-width: 960px) {
  .hero-section {
    height: 85vh;
  }
  .hero-overlay {
    background: linear-gradient(
      to right, 
      rgba(45, 45, 47, 0.7) 30%, 
      rgba(45, 45, 47, 0.2) 100%
    );
  }
}

/* Fix for mobile performance/lag */
@media (max-width: 1024px) {
  .hero-bg {
    /* Some mobile browsers struggle with fixed + high res. 
       If it still feels heavy, change 'fixed' to 'initial' below */
    background-attachment: fixed; 
  }
}

.custom-chip {
  background-color: rgba(var(--v-theme-secondary), 0.1) !important;
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
  h1 {
    font-size: 2.1rem !important;
  }
  .v-btn {
    width: 100%;
  }
}
</style>