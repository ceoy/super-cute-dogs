import Vue from 'vue';
import App from './App.vue';

new Vue({
    render: h => h(App)
}).$mount('#app');

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log("sw registered: ", registration)
        }).catch(registrationError => {
            console.log("sw registration failed: ", registrationError)
        })
    })
}