<template>
  <v-sheet color="primary" class="py-16 ma-0">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 mb-2 font-weight-bold text-white">Community Stories</h2>
        <p class="text-white opacity-80">Trusted by thousands of families across South Africa.</p>
      </div>

      <v-row>
        <v-col v-for="(testimonial, i) in testimonials" :key="i" cols="12" md="4">
          <v-card 
            color="transparent" 
            class="rounded-xl pa-8 h-100 d-flex flex-column" 
            style="border: 1px solid rgba(255, 255, 255, 0.3) !important;"
            flat
          >
            <v-icon 
              icon="mdi-format-quote-open" 
              color="white" 
              size="48" 
              class="mb-4 opacity-40"
            ></v-icon>

            <p class="text-h6 font-italic font-weight-light mb-8 text-white" style="line-height: 1.6;">
              "{{ testimonial.quote }}"
            </p>

            <v-spacer></v-spacer>

            <v-list-item
              class="px-0 mt-4"
              :prepend-avatar="testimonial.avatar"
            >
              <template v-slot:title>
                <span class="text-subtitle-1 font-weight-bold text-white">{{ testimonial.name }}</span>
              </template>
              <template v-slot:subtitle>
                <span class="text-caption text-white opacity-80">{{ testimonial.location }}</span>
              </template>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
const testimonials = [
  {
    quote: "I used to worry about funeral costs, but Afrosurance made it so easy. I just sent a message on WhatsApp and I was covered in minutes.",
    name: "Sipho Khumalo",
    location: "Durban, KZN",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "As a small business owner, the Business Boost loan was exactly what I needed. No long forms or bank queues—just quick credit via my phone.",
    name: "Lerato Molefe",
    location: "Soweto, GP",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "My phone screen cracked during a busy shift. Because I had Device Cover, the repair was handled without me spending a cent of my savings.",
    name: "Thabo Ndlovu",
    location: "Polokwane, L",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  }
]
</script>

<style scoped>
/* Added a subtle gradient to keep the primary color from feeling too flat */

.v-sheet {
  background: linear-gradient(135deg, rgba(55, 145, 160, 1) 0%, rgba(40, 110, 125, 1) 100%) !important;
}

h2 {
  font-family: 'Playfair Display', serif !important;
}
</style>