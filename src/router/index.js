import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: () => import("@/pages/Home.vue") },
    { path: "/about-us", name: "about", component: () => import("@/pages/About.vue") },
    { path: "/our-vision", name: "vision", component: () => import("@/pages/Vision.vue") },
    { path: "/our-impact", name: "impact", component: () => import("@/pages/Impact.vue") },
    { path: "/our-solutions", name: "solutions", component: () => import("@/pages/Solutions.vue") },
  ],
});

export default router;
