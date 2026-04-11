<template>
  <v-app-bar flat color="background" border="bottom" class="px-md-10" height="80">
    <div 
      class="d-flex align-center brand-link" 
      @click="handleScroll('top')"
    >
      <v-sheet 
        color="primary" 
        width="40" 
        height="40" 
        class="rounded-lg d-flex align-center justify-center mr-3"
      >
        <span class="text-white font-weight-bold text-h6" style="font-family: 'Playfair Display', serif;">A</span>
      </v-sheet>
      
      <span class="font-weight-bold text-h6 text-white">Afrosurance</span>
    </div>

    <v-spacer></v-spacer>

    <div class="d-none d-md-flex mr-8">
      <v-btn 
        variant="text" 
        class="text-capitalize text-body-1 px-5 mx-1" 
        height="50"
        @click="handleScroll('#products')"
      >
        Products
      </v-btn>

      <v-btn 
        to="/about" 
        variant="text" 
        class="text-capitalize text-body-1 px-5 mx-1" 
        height="50"
      >
        About
      </v-btn>

      <v-btn 
        to="/legal" 
        variant="text" 
        class="text-capitalize text-body-1 px-5 mx-1" 
        height="50"
      >
        Legal
      </v-btn>

      <v-btn 
        variant="text" 
        class="text-capitalize text-body-1 px-5 mx-1" 
        height="50"
        @click="handleScroll('#faq')"
      >
        FAQ
      </v-btn>
    </div>

    <v-btn 
      color="primary" 
      variant="elevated" 
      class="text-capitalize rounded-lg px-6 font-weight-bold" 
      height="48"
      prepend-icon="mdi-whatsapp"
      href="https://wa.me/27123456789"
      target="_blank"
    >
      Chat on WhatsApp
    </v-btn>

    <v-app-bar-nav-icon 
      class="d-md-none ml-2" 
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer 
    v-model="drawer" 
    location="right" 
    temporary 
    color="background"
    width="300"
  >
    <v-list class="pa-4">
      <v-list-item 
        title="Products" 
        class="mb-2 rounded-lg"
        @click="handleScroll('#products')"
      ></v-list-item>
      
      <v-list-item 
        to="/about" 
        title="About" 
        class="mb-2 rounded-lg"
        @click="drawer = false"
      ></v-list-item>

      <v-list-item 
        to="/legal" 
        title="Legal" 
        class="mb-2 rounded-lg"
        @click="drawer = false"
      ></v-list-item>

      <v-list-item 
        title="FAQ" 
        class="mb-2 rounded-lg"
        @click="handleScroll('#faq')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const drawer = ref(false)
const router = useRouter()
const route = useRoute()

const handleScroll = async (target) => {
  drawer.value = false
  
  if (target === 'top') {
    if (route.path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
    return
  }

  // Check if we are already on the home page
  if (route.path === '/') {
    // Scroll silently without changing the URL
    const el = document.querySelector(target)
    if (el) {
      const offset = 90
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  } else {
    // If we are on About/Legal, we MUST go home first.
    // We use router.push('/') then wait for it to load, then scroll.
    await router.push('/')
    
    // Give the browser a tiny moment to render the Home page
    setTimeout(() => {
      const el = document.querySelector(target)
      if (el) {
        const offset = 90
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = el.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }
}
</script>

<style scoped>
.brand-link {
  padding-left: 2rem;
}
.brand-link {
  cursor: pointer;
  transition: transform 0.2s ease;
}
.brand-link:hover {
  transform: translateY(-1px);
}
.v-btn {
  letter-spacing: 0.5px;
}
</style>