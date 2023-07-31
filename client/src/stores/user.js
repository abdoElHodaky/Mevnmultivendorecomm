import { ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

const useUserStore = defineStore('user', () => {

    const router = useRouter();

    const authed = ref(null);
    const user = ref(null);

    const logUserIn = (userData) => {
        authed.value = true;
        if(!router.currentRoute.value.path.includes('dashboard')) router.push('/dashboard');
        user.value = userData;
    };

    const logUserOut = () => {
        authed.value = false;
        router.push('/');
        user.value = null;
    };

    return { authed, user, logUserIn, logUserOut };

});

export default useUserStore;