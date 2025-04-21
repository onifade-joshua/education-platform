import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/AppLogin.vue";
import Signup from "../views/AppSignUp.vue";
// import Dashboard from "../views/LearnPage.vue";
import HomePage from "../views/HomePage.vue";
import LearnPage from "../views/LearnPage.vue";
// import LearnPage from "../views/LearnPage.vue";

const routes = [
  { path: "/", redirect: "/home" }, // ⬅ Default route goes to homepage
  { path: "/home", name: "Home", component: HomePage },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
  {
    path: "/learn",
    name: "Learn",
    component: LearnPage,
    meta: { requiresAuth: true },
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route Guard: Prevent access to dashboard if not logged in
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
