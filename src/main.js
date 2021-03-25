import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// lodash库
import _ from 'lodash';
Vue.prototype._ = _;
// 引入公共css
import "./libs/css/rest.css";
// 请求区分域名
import "./httpClient/urlconfig";
// 全局插入
import mixins from "./mixins/mixins.js";
Vue.mixin(mixins);
// 引入rem
// import rem from './libs/js/public';
// rem(window,1242);
// PV日志
// import pvLog from "./libs/js/pvLog";
// Vue.use(pvLog);
// 组件内部调用 Vue.$pvLog({titleName:'测试'})
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");