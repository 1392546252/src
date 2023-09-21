import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Detail from "../views/Detail.vue";

let routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   // 验证token，只有存在token的时候才能跳转到首页
//   let token = localStorage.getItem("token");
//   if (token || to.path === "/") {
//     next();
//   } else {
//     next("/");
//   }
// });

export { router, routes };
