<template>
  <v-container class="py-16">
    <v-row>
      <v-col v-for="product in products" :key="product.title" cols="12" sm="6" md="3">
        <v-card color="surface" class="rounded-xl h-100 pa-5 d-flex flex-column" flat border>
          <v-avatar color="primary" variant="tonal" class="mb-4">
            <v-icon :icon="product.icon"></v-icon>
          </v-avatar>
          <h3 class="text-h5 mb-1">{{ product.title }}</h3>
          <p class="text-caption text-secondary font-weight-bold mb-4">From {{ product.from }}</p>
          <p class="text-body-2 text-grey-lighten-1 mb-6">{{ product.tagline }}</p>
          <v-spacer></v-spacer>
          <v-btn variant="text" color="secondary" class="px-0 mt-2 text-capitalize justify-start" append-icon="mdi-chevron-right" @click="activeProduct = product">
            Learn More
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-expand-transition>
      <div v-if="activeProduct" class="my-10 pt-10 border-t-sm border-grey-darken-3">
        <v-card color="surface" class="rounded-xl pa-8" flat border>
          
          <v-row class="mb-8">
            <v-col cols="12" md="6">
              <div class="d-flex align-center justify-space-between mb-4">
                <h3 class="text-h4">{{ activeProduct.title }} <span class="text-secondary">Details</span></h3>
                <v-btn icon="mdi-close" variant="tonal" class="d-md-none" size="small" @click="activeProduct = null"></v-btn>
              </div>
              <p class="text-body-2 text-grey-lighten-1 mb-6">{{ activeProduct.details }}</p>
              
              <v-row no-gutters>
                <v-col v-for="feat in activeProduct.topFeatures" :key="feat" cols="12" sm="6" class="py-1">
                  <div class="d-flex align-center">
                    <v-icon icon="mdi-check-circle" color="primary" size="small" class="mr-2"></v-icon>
                    <span class="text-caption text-white">{{ feat }}</span>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            
            <v-col cols="12" md="6" class="text-right d-none d-md-block">
              <v-btn icon="mdi-close" variant="tonal" color="grey" @click="activeProduct = null"></v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="(tier, index) in activeProduct.tiers" :key="index" cols="12" sm="6" :md="activeProduct.tiers.length === 4 ? '3' : '4'">
              <v-card color="background" class="rounded-xl h-100 d-flex flex-column pa-6 text-center" flat border>
                <div class="text-subtitle-1 font-weight-bold mb-3">{{ tier.name }}</div>
                
                <div class="py-6 border-t border-b border-grey-darken-2">
                  <p class="text-caption text-grey mb-1">Benefit Value</p>
                  <p class="text-h4 font-weight-bold text-white">{{ tier.benefit }}</p>
                  <p class="text-caption text-secondary mt-1">{{ tier.desc }}</p>
                </div>

                <v-spacer class="mb-6"></v-spacer>

                <v-btn color="secondary" class="rounded-lg text-black font-weight-bold text-capitalize" block>
                  Signup
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-expand-transition>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { products } from '@/data/products.js'
const activeProduct = ref(null)
</script>