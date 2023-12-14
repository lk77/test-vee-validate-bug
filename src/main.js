import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

import Bug from "./components/Bug.vue";

let app = createApp(App);

app.component('Bug', Bug);

app.mount('#app');
