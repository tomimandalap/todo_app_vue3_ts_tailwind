import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/Default.vue"),
      meta: { auth: false },
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "/todo",
          name: "Todo",
          component: () => import("../views/Todo.vue"),
        },
      ],
    },
    {
      path: "/404",
      name: "404 - Page Not Found",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../layouts/Error.vue"),
      beforeEnter: ({}, {}, next) => {
        next("/404");
      },
    },
  ],
});

router.beforeEach(({}, {}, next) => {
  window.scrollTo(0, 0);
  next();
});

router.afterEach((to) => {
  let nameTitle = to.name as "vue";
  document.title = `🚀 ${nameTitle} - Tomi Mandala Putra`;
});

export default router;
