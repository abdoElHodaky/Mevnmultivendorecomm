import PrimeVue from "primevue/config";

import Button from "primevue/button";

export default {
    install(app) {

        app.use(PrimeVue, {
            unstyled: true,
            pt: {
                button: {
                    root: { class: 'bg-black hover:bg-gray-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
                    label: { class: 'text-4xl text-white font-bold capitalize' },
                    icon: { class: 'text-4xl text-white' }
                }
            }
        });

        app.component('Button', Button);
    }
};