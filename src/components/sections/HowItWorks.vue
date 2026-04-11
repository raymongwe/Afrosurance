<template>
  <v-container class="py-16 text-center">
    <div class="mb-12">
      <h2 class="text-h3 font-weight-bold mb-4">How It Works</h2>
      <p class="text-body-1 text-grey-lighten-1">
        Get insured in 3 simple steps. No complicated forms, no long waits.
      </p>
    </div>

    <v-row class="position-relative justify-center">
      <div class="step-connector d-none d-md-block"></div>

      <v-col cols="12" md="4" class="step-item">
        <div class="step-number bg-primary text-white mb-4">1</div>
        <v-icon size="48" color="primary" icon="mdi-whatsapp" class="mb-4"></v-icon>
        <h3 class="text-h5 font-weight-bold mb-2">Chat Us</h3>
        <p class="text-body-2 text-grey">
          Click the WhatsApp button and start a conversation. Our friendly team is ready to help.
        </p>
      </v-col>

      <v-col cols="12" md="4" class="step-item">
        <div class="step-number bg-primary text-white mb-4">2</div>
        <v-icon size="48" color="primary" icon="mdi-check-circle-outline" class="mb-4"></v-icon>
        <h3 class="text-h5 font-weight-bold mb-2">Choose a Plan</h3>
        <p class="text-body-2 text-grey">
          We'll recommend the best coverage for your needs and budget. Pick what works for you.
        </p>
      </v-col>

      <v-col cols="12" md="4" class="step-item">
        <div class="step-number bg-primary text-white mb-4">3</div>
        <v-icon size="48" color="primary" icon="mdi-shield-check-outline" class="mb-4"></v-icon>
        <h3 class="text-h5 font-weight-bold mb-2">Get Covered</h3>
        <p class="text-body-2 text-grey">
          Pay via mobile money and you're instantly covered. It's that simple.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2; 
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.step-connector {
  position: absolute;
  top: 20px; 
  left: 15%;
  right: 15%;
  height: 2px;
  background-color: rgba(var(--v-theme-primary), 0.2);
  z-index: 1;
}

h2, h3 {
  font-family: 'Playfair Display', serif !important;
}
</style>