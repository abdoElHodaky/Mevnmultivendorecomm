import { createApp } from 'vue';

// global styles
import './style.scss';
import 'primeicons/primeicons.css';

// router
import router from './router';

// prime-vue
import primevue from './includes/primevue';

// app
import App from './App.vue';

// init
createApp(App).use(primevue).use(router).mount('#app');