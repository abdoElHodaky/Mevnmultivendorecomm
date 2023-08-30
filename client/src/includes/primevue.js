import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Dialog from 'primevue/dialog';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import ProgressSpinner from 'primevue/progressspinner';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Avatar from 'primevue/avatar';
import Fieldset from 'primevue/fieldset';
import Divider from 'primevue/divider';

export default {
    install(app) {

        app.use(PrimeVue);

        app.component('Button', Button);
        app.component('Sidebar', Sidebar);
        app.component('ConfirmDialog', ConfirmDialog);
        app.component('ProgressSpinner', ProgressSpinner);
        app.component('Toast', Toast);
        app.component('Avatar', Avatar);
        app.component('Fieldset', Fieldset);
        app.component('Divider', Divider);
        app.component('Dialog', Dialog);
        
        app.use(ConfirmationService);
        app.use(ToastService);
    }
};