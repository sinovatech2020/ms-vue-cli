import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "test",
        component: () => import("@/test/test.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
