import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/AppLogin.vue";
import Signup from "../views/AppSignUp.vue";
// import Dashboard from "../views/Dashboard.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { 
    path: "/dashboard", 
    // component: Dashboard,
    meta: { requiresAuth: true },
  }
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
