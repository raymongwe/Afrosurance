<template>
  <v-img
    src="national-cancer-institute-VJVsEnR_vNE-unsplash (1).webp"
    cover
    class="hero-section d-flex align-center"
    color="background"
  >
    <div 
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
             background: linear-gradient(to right, rgba(45, 45, 47, 0.95) 20%, rgba(45, 45, 47, 0.4) 100%);"
    ></div>

    <v-container style="position: relative; z-index: 2;">
      <v-row>
        <v-col cols="12" md="7" lg="6" class="text-center text-md-left">
          <v-chip
            color="primary"
            variant="outlined"
            size="small"
            class="mb-4 px-4 text-secondary"
            style="background-color: rgba(var(--v-theme-secondary), 0.1) !important;"
          >
            Afrosurance Brokers
          </v-chip>

          <h1 class="text-h3 mb-3 font-weight-bold text-white">
            Insurance for <span class="text-secondary">every</span> African.
          </h1>
          
          <p class="text-body-1 mb-8 text-grey-lighten-2 mx-auto mx-md-0" style="max-width: 500px; line-height: 1.6;">
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
              elevation="2"
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
    const offset = 90; // Matches your navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
</script>

<style scoped>
.hero-section {
  /* This ensures it fills the screen on mobile */
  height: 100dvh;
  min-height: 600px; /* Prevents squashing on very short landscape phones */
}

@media (min-width: 960px) {
  .hero-section {
    /* Optional: keep it slightly shorter on large desktops if preferred, 
       or keep it 100dvh for a full-screen cinematic look */
    height: 85vh; 
  }
}

h1 {
  font-family: 'Playfair Display', serif !important;
  letter-spacing: -0.5px !important;
  line-height: 1.2 !important;
}

/* Fixes button width on tiny mobile screens */
@media (max-width: 600px) {
  .v-btn {
    width: 100%;
  }
}
</style>