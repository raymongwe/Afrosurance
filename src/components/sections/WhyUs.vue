<template>
  <v-container class="py-16 text-center">
    <div class="mb-12">
      <h2 class="text-h3 mb-2 font-weight-bold">Why Afrosurance?</h2>
      <p class="text-grey text-body-1">Protection built for you.</p>
    </div>
    
    <v-row>
      <v-col cols="12" md="4">
        <v-card variant="text" class="pa-6">
          <v-avatar color="#2c7887" size="64" class="mb-6">
            <v-icon icon="mdi-shield-star" color="white" size="32"></v-icon>
          </v-avatar>
          <h4 class="text-h5 mb-3 font-weight-bold">Local Expertise</h4>
          <p class="text-body-2 text-grey-lighten-1" style="line-height: 1.7;">
            We aren't just an app. We understand the South African informal economy and funeral traditions deeply.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card variant="text" class="pa-6">
          <v-avatar color="#2c7887" size="64" class="mb-6">
            <v-icon icon="mdi-wallet" color="white" size="32"></v-icon>
          </v-avatar>
          <h4 class="text-h5 mb-3 font-weight-bold">Affordable</h4>
          <p class="text-body-2 text-grey-lighten-1" style="line-height: 1.7;">
            Plans from R29/month with flexible daily, weekly, or monthly payments via mobile money.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card variant="text" class="pa-6">
          <v-avatar color="#2c7887" size="64" class="mb-6">
            <v-icon icon="mdi-whatsapp" color="white" size="32"></v-icon>
          </v-avatar>
          <h4 class="text-h5 mb-3 font-weight-bold">Simple</h4>
          <p class="text-body-2 text-grey-lighten-1" style="line-height: 1.7;">
            Everything on WhatsApp. No apps to download, no websites to navigate. Just simple conversations.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-12">
      <v-col cols="12" md="10">
        <v-sheet 
          color="surface" 
          class="rounded-xl pa-8 border d-flex flex-column flex-md-row align-center justify-space-around ga-6"
        >
          <div class="text-center">
            <div class="text-h3 font-weight-bold text-secondary">10k+</div>
            <div class="text-caption text-uppercase font-weight-bold text-grey">Members Covered</div>
          </div>
          <v-divider vertical class="d-none d-md-block"></v-divider>
          <div class="text-center">
            <div class="text-h3 font-weight-bold text-secondary">98%</div>
            <div class="text-caption text-uppercase font-weight-bold text-grey">Customer Trust</div>
          </div>
          <v-divider vertical class="d-none d-md-block"></v-divider>
          <div class="text-center">
            <div class="text-h3 font-weight-bold text-secondary">R50m+</div>
            <div class="text-caption text-uppercase font-weight-bold text-grey">Claims Paid</div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>