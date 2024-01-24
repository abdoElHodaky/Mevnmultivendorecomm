import { ref } from "vue";

const showLoadingScreen = ref(false);

const toggleLoadingScreen = () => showLoadingScreen.value = !showLoadingScreen.value;

export {  
    showLoadingScreen,
    toggleLoadingScreen
};