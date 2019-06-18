import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Proyectos from "./views/Proyectos.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/proyectos",
      name: "proyectos",
      component: Proyectos
    }
  ]
});
