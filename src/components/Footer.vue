<template>
  <v-footer color="surface" class="pt-16 pb-6 border-t">
    <v-container>
      <v-row class="mb-12">
        <v-col cols="12" md="5" class="pr-md-16">
          <div class="d-flex align-center mb-6">
            <v-avatar color="secondary" size="40" class="mr-3 rounded-lg">
              <span class="text-black font-weight-bold">A</span>
            </v-avatar>
            <h3 class="text-h5 font-weight-bold text-white">Afrosurance</h3>
          </div>
          
          <h4 class="text-subtitle-1 font-weight-bold text-white mb-3">Subscribe</h4>
          <p class="text-body-2 text-grey-lighten-1 mb-6">
            Enter your email address to subscribe to our blog and receive notifications of new posts by email.
          </p>
          
          <div class="d-flex ga-2">
            <v-text-field
              placeholder="Your Email Address"
              variant="solo-filled"
              flat
              density="comfortable"
              bg-color="grey-darken-4"
              class="rounded-lg"
              hide-details
            ></v-text-field>
            <v-btn 
              color="secondary" 
              class="text-black font-weight-bold px-6" 
              height="48"
              elevation="0"
            >
              SUBSCRIBE
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="7">
          <h4 class="text-subtitle-1 font-weight-bold text-white mb-8">Contact</h4>
          
          <v-row>
            <v-col cols="12" sm="6">
              <v-list-item class="px-0 mb-4">
                <template v-slot:prepend>
                  <v-avatar color="secondary" size="36" class="mr-4">
                    <v-icon color="black" size="20">mdi-email</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-grey-lighten-1 text-caption font-weight-bold text-uppercase">Email</v-list-item-title>
                <v-list-item-subtitle class="text-white font-weight-medium">info@afrosurance.com</v-list-item-subtitle>
              </v-list-item>

              <v-list-item class="px-0">
                <template v-slot:prepend>
                  <v-avatar color="secondary" size="36" class="mr-4">
                    <v-icon color="black" size="20">mdi-phone</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-grey-lighten-1 text-caption font-weight-bold text-uppercase">Phone</v-list-item-title>
                <v-list-item-subtitle class="text-white font-weight-medium">+27 79 556 5218</v-list-item-subtitle>
                <v-list-item-subtitle class="text-white font-weight-medium">+27 71 804 4073</v-list-item-subtitle>
              </v-list-item>
            </v-col>

            <v-col cols="12" sm="6">
              <v-list-item class="px-0 mb-4">
                <template v-slot:prepend>
                  <v-avatar color="secondary" size="36" class="mr-4">
                    <v-icon color="black" size="20">mdi-map-marker</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-grey-lighten-1 text-caption font-weight-bold text-uppercase">Address - Limpopo</v-list-item-title>
                <v-list-item-subtitle class="text-white text-caption">Rapitsi village, Ga-Moshole, Office no.2</v-list-item-subtitle>
              </v-list-item>

              <v-list-item class="px-0">
                <template v-slot:prepend>
                  <v-avatar color="secondary" size="36" class="mr-4">
                    <v-icon color="black" size="20">mdi-map-marker</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-grey-lighten-1 text-caption font-weight-bold text-uppercase">Address - Gauteng</v-list-item-title>
                <v-list-item-subtitle class="text-white text-caption">6206B Immink Dr, Diepkloof Zone 4, Soweto, 1864</v-list-item-subtitle>
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="mb-6 border-opacity-25"></v-divider>

      <div class="text-center">
        <p class="text-caption text-grey">
            Copyright &copy; {{ new Date().getFullYear() }} afrosurance. All rights reserved.
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
h3, h4, .v-list-item-title, .v-list-item-subtitle {
  font-family: inherit !important;
  letter-spacing: 0.2px;
}

.v-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
}
</style>