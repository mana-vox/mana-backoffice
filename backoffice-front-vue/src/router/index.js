import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sources",
    name: "Sources",
    component: () => import("../views/Sources.vue"),
  },
  {
    path: "/data",
    name: "Data",
    component: () => import("../views/Data.vue"),
  },
  {
    path: "/companies",
    name: "Companies",
    component: () => import("../views/Companies.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
