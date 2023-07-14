import PrimeVue from "primevue/config";

import Button from "primevue/button";

export default {
    install(app) {

        app.use(PrimeVue);

        app.component('Button', Button);
    }
};