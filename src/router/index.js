import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "music",
    component: () =>
      import(/* webpackChunkName: "music" */ "../views/Music.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
    }else{
      return { x: 0, y: 0 }
    }
  },
  routes,
});

export default router;
