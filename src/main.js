import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入公共css
import "./libs/css/rest.css";
// 引入rem
// import rem from './libs/js/public';
// rem(window,1242);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
