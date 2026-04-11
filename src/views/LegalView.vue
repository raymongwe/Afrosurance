<template>
  <v-sheet color="background" class="py-16 ma-0" min-height="100vh">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card variant="outlined" class="pa-8 pa-md-12 rounded-xl border-opacity-25" color="grey-lighten-3">
            <h1 class="text-h4 font-weight-bold text-white mb-2">Terms and Conditions</h1>
            <p class="text-subtitle-1 text-primary mb-8">Afrosurance Brokers (Pty) Ltd</p>

            <div class="legal-content text-grey-lighten-2 text-body-2">
              <p class="mb-6">
                Afrosurance Funeral Cover (or this "cover” or “plan") is subject to the terms, conditions and exclusions set out in this document.
              </p>

              <h3 class="text-white mb-2">1. Who is the underwriter of this cover?</h3>
              <p class="mb-6">
                Safrican is the underwriter of this cover. Any reference to "we, us, our, ourselves" in this document shall mean Afrosurance or Safrican as the case may be.
              </p>

              <h3 class="text-white mb-2">2. Who is insured under the plan?</h3>
              <p class="mb-4">
                The persons insured and the amount for which they are insured under the Plan are specified in the Policy Certificate issued by Afrosurance. All the persons to be insured under the policy must be related to the Principal Member and the Principal Member must have an insurable interest in all insured persons under the policy. 
              </p>
              <p class="mb-6">
                All insured lives must be South African citizens or permanent residents and be in possession of a green bar-coded RSA ID book or a Smart ID Card. If the insured life is younger than 18 years, a valid birth certificate is acceptable.
              </p>

              <h3 class="text-white mb-2">3. Insured Persons Categories</h3>
              <v-list bg-color="transparent" class="mb-6">
                <v-list-item class="px-0">
                  <span class="text-primary font-weight-bold">Principal Member:</span> The main insured life who owns this plan. Children below 18 are not permitted.
                </v-list-item>
                <v-list-item class="px-0">
                  <span class="text-primary font-weight-bold">Spouse:</span> Married by law or life partner of 24+ months. Limited to one spouse.
                </v-list-item>
                <v-list-item class="px-0">
                  <span class="text-primary font-weight-bold">Child(ren):</span> Biological, legally adopted, and stepchildren.
                </v-list-item>
                <v-list-item class="px-0">
                  <span class="text-primary font-weight-bold">Extended Family:</span> Additional spouses, children over 21, parents, and blood relatives.
                </v-list-item>
              </v-list>

              <h3 class="text-white mb-2">4. Benefit Details</h3>
              <p class="mb-6">
                This Plan is a Life Policy and pays out the specified cash benefit in the event of death. Accidental Death means death caused solely by injury sustained during an Accident within 90 days of the event.
              </p>

              <h3 class="text-white mb-2">5. Commencement of Cover</h3>
              <p class="mb-0">
                This plan and cover start on the day the Insurer accepts your application. A policy certificate will be issued once accepted. Cover for other insured persons starts on the date they are loaded onto the plan.
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.legal-content h3 {
  margin-top: 24px;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}
</style>