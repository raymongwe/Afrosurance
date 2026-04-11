<template>
  <v-sheet 
    color="primary" 
    class="ma-0 py-16 d-flex align-center" 
    min-height="400px"
  >
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8" class="text-center">
          
          <h2 class="text-h2 font-weight-bold text-white mb-6">
            Ready to Protect <span class="text-white opacity-80">What Matters?</span>
          </h2>
          
          <p class="text-h6 text-white mb-10 mx-auto opacity-90" style="line-height: 1.6; max-width: 650px;">
            Join thousands of Africans who trust Afrosurance. Get covered in minutes, entirely on WhatsApp.
          </p>

          <v-btn 
            color="white" 
            variant="elevated" 
            class="text-primary text-capitalize rounded-lg px-10 font-weight-bold" 
            size="x-large" 
            prepend-icon="mdi-whatsapp"
            elevation="12"
            href="https://wa.me/27000000000"
          >
            Start Your Coverage Now
          </v-btn>

        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
</script>

<style scoped>
h2 {
  font-family: 'Playfair Display', serif !important;
  letter-spacing: -1px !important;
  line-height: 1.2 !important;
}

</style>