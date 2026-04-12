<template>
  <v-sheet color="surface" class="py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          
          <div class="text-center mb-12">
            <h5 class="text-subtitle-1 text-uppercase font-weight-bold text-secondary mb-1">
              FAQ
            </h5>
            <h2 class="text-h3 font-weight-bold text-white mb-4">
              Common Questions
            </h2>
            <p class="text-grey-lighten-1 text-body-1 mx-auto" style="max-width: 600px;">
              Find answers about coverage, claims, and managing your policy via WhatsApp.
            </p>
          </div>

          <v-expansion-panels 
            variant="accordion" 
            flat 
            bg-color="transparent"
            class="faq-panels"
          >
            <v-expansion-panel
              v-for="(item, i) in faqItems"
              :key="i"
              class="faq-border"
            >
              <v-expansion-panel-title 
                expand-icon="mdi-chevron-down" 
                class="text-h6 text-white py-6 px-0"
              >
                {{ item.question }}
              </v-expansion-panel-title>
              
              <v-expansion-panel-text class="text-grey-lighten-2 px-0 pb-6">
                <div class="pr-md-12">
                  {{ item.answer }}
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <div class="text-center mt-16 pt-10">
            <h4 class="text-h4 text-white mb-6">
              Still have questions?
            </h4>
            
            <v-btn 
              color="primary" 
              variant="elevated" 
              class="text-capitalize rounded-lg px-8 font-weight-bold" 
              size="large" 
              prepend-icon="mdi-whatsapp"
              elevation="8"
              href="https://wa.me/27795565218"
            >
              Chat with Us
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'

const faqItems = ref([
  {
    question: "How do I sign up for cover?",
    answer: "Signing up is incredibly simple. Just add our number to your WhatsApp contacts and send the message 'START'. Our automated system will guide you through the process entirely within the chat."
  },
  {
    question: "What are the requirements to join?",
    answer: "You must be a resident of South Africa and hold a valid South African ID or passport. For Group Cover, the main applicant needs an ID, and members are registered under their certificate."
  },
  {
    question: "How much coverage does each person receive?",
    answer: "Everyone on the policy receives the full benefit amount. For example, if you choose a R20,000 plan, every single person covered under that plan individually gets R20,000 in cover."
  },
  {
    question: "How do I make premium payments?",
    answer: "We support several flexible payment options including mobile money (MTN MoMo, Vodapay) and secure debit orders. Payments can be daily, weekly, or monthly."
  },
  {
    question: "How fast is the claims process?",
    answer: "We pride ourselves on speed. For all valid claims, our target is processing and payout within 48 hours of receiving the final documentation via WhatsApp."
  },
  {
    question: "Is there a waiting period for cover?",
    answer: "Typically, there is a 6-month waiting period for natural death and immediate cover for accidental death from your first premium payment."
  }
])
</script>

<style scoped>
/* Custom border to match the clean 'line-only' look */
.faq-border {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  background-color: transparent !important;
}

/* Customizing the chevron color to the brand yellow */
.faq-panels :deep(.v-expansion-panel-title__icon .v-icon) {
  color: #ffcc00 !important;
}

/* Font styling */
.text-h6 {
  font-family: inherit !important;
  letter-spacing: -0.2px !important;
}

/* Ensuring no background appears when a panel is active */
.v-expansion-panel--active, 
.v-expansion-panel--active:hover {
  background-color: transparent !important;
}

.faq-panels :deep(.v-expansion-panel__shadow) {
  display: none;
}
</style>