import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createVuetify } from 'vuetify';
import * as components from "vuetify/components";
import 'vuetify/styles'

const pinia = createPinia();
const app = createApp(App);
const vuetify = createVuetify({
    components,
});

app.use(pinia).use(vuetify).mount('#app');