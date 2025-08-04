import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

// vuetify
import "vuetify/styles"
import '@mdi/font/css/materialdesignicons.min.css';
import { createVuetify } from 'vuetify';
import * as components from "vuetify/components";
import * as directives from 'vuetify/directives';

const pinia = createPinia();
const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
});

app.use(pinia).use(vuetify).mount('#app');