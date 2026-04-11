<template>
  <div>
    <HeroSection />

    <section id="how-it-works">
      <HowItWorks />
    </section>

    <section id="products" class="bg-surface py-10">
      <ProductGrid />
    </section>

    <WhyUs />

    <Testimonials />

    <section id="faq">
      <FAQ />
    </section>

    <CTA />
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import HowItWorks from '@/components/sections/HowItWorks.vue'
import ProductGrid from '@/components/sections/ProductGrid.vue'
import WhyUs from '@/components/sections/WhyUs.vue'
import Testimonials from '@/components/sections/Testimonials.vue'
import FAQ from '@/components/sections/FAQ.vue'
import CTA from '@/components/sections/CTA.vue'
</script>