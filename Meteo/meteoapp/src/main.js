import './assets/main.css'

import { createApp } from 'vue'
import Weather from './components/Weather.vue'
import App from './App.vue'

const app = createApp(App)
app.component('weather', Weather)
app.mount('#app')
