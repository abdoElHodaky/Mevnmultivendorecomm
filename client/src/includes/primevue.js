import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import ProgressSpinner from 'primevue/progressspinner';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Avatar from 'primevue/avatar';

export default {
    install(app) {

        app.use(PrimeVue);

        app.component('Button', Button);
        app.component('Sidebar', Sidebar);
        app.component('ConfirmDialog', ConfirmDialog);
        app.component('ProgressSpinner', ProgressSpinner);
        app.component('Toast', Toast);
        app.component('Avatar', Avatar);
        
        app.use(ConfirmationService);
        app.use(ToastService);
    }
};