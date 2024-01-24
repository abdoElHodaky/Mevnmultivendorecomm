import { ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

/**
 * authed values 'pending' 'authed' 'unauthed'
 */

const useUserStore = defineStore('user', () => {

    const router = useRouter();

    const authed = ref('pending');
    const user = ref(null);

    const logUserIn = (userData) => {
        authed.value = 'authed';
        if(!router.currentRoute.value.path.includes('dashboard')) router.push('/dashboard');
        user.value = userData;
    };

    const logUserOut = () => {
        authed.value = 'unauthed';
        router.push('/');
        user.value = null;
    };

    return { authed, user, logUserIn, logUserOut };

});

export default useUserStore;