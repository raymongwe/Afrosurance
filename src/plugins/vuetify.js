import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'afrosurance',
    themes: {
      afrosurance: {
        dark: true,
        colors: {
          primary: '#3791a0', 
          secondary: '#fac612', 
          background: '#2d2d2f', 
          surface: '#121212',    
          'surface-variant': '#1a7a5e',
        },
      },
    },
  },
})