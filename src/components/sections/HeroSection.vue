<template>
  <v-img
    src="https://images.unsplash.com/photo-1577896849786-738ed6c78bd3?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    cover
    min-height="55vh"
    max-height="85vh"
    class="d-flex align-center"
  >
    <div 
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
             background: linear-gradient(to right, rgba(45, 45, 47, 0.95) 20%, rgba(45, 45, 47, 0.4) 100%);"
    ></div>

    <v-container style="position: relative; z-index: 2;">
      <v-row>
        <v-col cols="12" md="7" lg="6">
          <v-chip
            color="primary"
            variant="outlined"
            size="small"
            class="mb-4 px-4 text-primary"
            style="background-color: rgba(var(--v-theme-primary), 0.1) !important;"
          >
            Afrosurance Brokers
          </v-chip>

          <h1 class="text-h3 mb-3 font-weight-bold text-white">
            Insurance for <span class="text-secondary">every</span> African.
          </h1>
          <p class="text-body-1 mb-6 text-grey-lighten-2" style="max-width: 500px; line-height: 1.5;">
            Simple, affordable coverage designed for the African informal economy. 
            Protect your family and your assets directly through WhatsApp.
          </p>
          
          <div class="d-flex ga-3 flex-column flex-sm-row">
            <v-btn 
              size="large" 
              color="primary" 
              class="rounded-lg px-6 text-capitalize font-weight-bold" 
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
              class="rounded-lg px-6 text-capitalize" 
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
    const offset = 90; // Matches your "meaty" navbar height
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
h1 {
  font-family: 'Playfair Display', serif !important;
  letter-spacing: -0.5px !important;
}
</style>