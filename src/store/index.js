import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state =  {
    homePage:`hello World`
};

const mutations = {
    // 公用修改State
    amend(state, item) {
        // console.log(item);
        for (let res in item) {
            state[res] = item[res];
        }
    }
};

const actions = {

};

const modules = {

};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules,
});
