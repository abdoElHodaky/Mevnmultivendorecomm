import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Sidebar from 'primevue/sidebar';

export default {
    install(app) {

        app.use(PrimeVue);

        app.component('Button', Button);
        app.component('Sidebar', Sidebar);
    }
};