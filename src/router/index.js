import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Login from '@/views/AppLogin.vue';
import Signup from '@/views/AppSignUp.vue';
import LearnPage from '@/views/LearnPage.vue';
import CourseDetail from '@/components/custom/CourseDetail.vue';
import VideoPlayer from '@/components/custom/VideoPlayer.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  {
    path: '/learn',
    name: 'Learn',
    component: LearnPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/course/:id",
    name: "CourseDetail",
    component: CourseDetail
  },
  {
    path: "/video/:id",
    name: "VideoPlayer",
    component: VideoPlayer
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  if ((to.path === '/login' || to.path === '/signup') && isAuthenticated) {
    next('/dashboard'); // Or /home
  } else {
    next();
  }
});

export default router;
