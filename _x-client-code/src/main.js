import { createApp } from "vue";
import { createPinia } from 'pinia';

// global styles
import "./style.scss";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/md-dark-indigo/theme.css";
import "primeicons/primeicons.css";

// store
const pinia = createPinia();

// router
import router from "./router";

// prime-vue
import primevue from "./includes/primevue";

// app
import App from "./App.vue";

// init
createApp(App).use(pinia).use(primevue).use(router).mount('#app');