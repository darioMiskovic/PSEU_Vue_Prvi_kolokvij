import Vue from "vue";
import VueRouter from "vue-router";
import Naslovnica from "../views/Naslovnica.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Naslovnica",
    component: Naslovnica,
  },
  {
    path: "/kartice",
    name: "Kartica",
    component: () => import("../views/Kartice.vue"),
  },
  {
    path: "/forma",
    name: "Forma",
    component: () => import("../views/Forma.vue"),
  },
  {
    path: "/tablica",
    name: "Tablica",
    component: () => import("../views/Tablica.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
