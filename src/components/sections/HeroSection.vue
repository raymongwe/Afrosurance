<template>
  <v-img
    src="national-cancer-institute-VJVsEnR_vNE-unsplash (1).webp"
    cover
    eager
    class="hero-section d-flex align-center"
  >
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
  </v-img>
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
  /* Keeps the full-screen height you like */
  height: 100dvh; 
  width: 100%;
  position: relative;
  /* Keeps the image in memory for zero-lag scrolling */
  will-change: transform;
  transform: translateZ(0);
}

/* THE CENTERING FIX: center 40% cuts a bit of the top and a bit of the bottom */
:deep(.v-img__img) {
  object-position: center 40% !important;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    to bottom, 
    rgba(45, 45, 47, 0.8) 20%, 
    rgba(45, 45, 47, 0.4) 100%
  );
}

@media (min-width: 960px) {
  .hero-section {
    height: 85vh !important;
  }
  .hero-overlay {
    background: linear-gradient(
      to right, 
      rgba(45, 45, 47, 0.7) 20%, 
      rgba(45, 45, 47, 0.4) 100%
    );
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
  line-height: 1.2 !important;
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