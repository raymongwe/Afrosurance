<template>
  <v-app-bar flat color="background" border="bottom" class="px-md-10" height="80">
    <div 
      class="d-flex align-center brand-link" 
      @click="handleScroll('top')"
    >
      <v-img
        src="normal-log.png"
        width="50"
        height="50"
        class="rounded-lg mr-3"
        alt="Description of image"
        cover
      ></v-img>
      
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
      class="text-capitalize rounded-lg px-6 font-weight-bold d-none d-sm-flex" 
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
    <div class="pa-8 d-flex flex-column align-center text-center">
      <v-img
        src="bright-logo.png"
        width="100"
        height="100"
        class="mb-4"
        alt="Afrosurance Logo"
        contain
      ></v-img>
      <div class="text-h6 font-weight-bold text-white text-uppercase" style="letter-spacing: 2px;">
        Afrosurance
      </div>
      <div class="text-caption text-grey-lighten-1" style="letter-spacing: 4px;">
        BROKERS
      </div>
    </div>

    <v-divider></v-divider>

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

      <v-divider class="my-4"></v-divider>

      <v-list-item class="px-2">
        <v-btn
          color="primary"
          variant="elevated"
          class="text-capitalize rounded-lg font-weight-bold"
          prepend-icon="mdi-whatsapp"
          href="https://wa.me/27123456789"
          target="_blank"
          block
        >
          Chat on WhatsApp
        </v-btn>
      </v-list-item>
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

  if (route.path === '/') {
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
    await router.push('/')
    
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