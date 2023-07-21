import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';

export default {
    install(app) {

        app.use(PrimeVue);

        app.component('Button', Button);
        app.component('Sidebar', Sidebar);
        app.component('ConfirmDialog', ConfirmDialog);
        
        app.use(ConfirmationService);
    }
};