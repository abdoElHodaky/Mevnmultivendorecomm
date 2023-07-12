import { createApp } from 'vue';

// global style
import './style.scss';

// app
import App from './App.vue';

// router
import router from './router';

// init
createApp(App).use(router).mount('#app');