<template>
  <div>
    <template v-if="isAuthRoute">
      <router-view />
    </template>
    <template v-else>
      <AppNavbar />
      <AppHero />
      <FeaturedCourses />
      <RecommendedCourses />
      <AppGetInTouch />
      <AppFooter />
    </template>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

import AppNavbar from "./components/AppNavbar.vue";
import AppHero from "./components/AppHero.vue";
import FeaturedCourses from "./components/FeaturedCourses.vue";
import RecommendedCourses from "./components/RecommendedCourses.vue";
import AppFooter from "./components/AppFooter.vue";
import AppGetInTouch from "./components/AppGetInTouch.vue";

export default {
  components: {
    AppNavbar,
    AppHero,
    FeaturedCourses,
    RecommendedCourses,
    AppGetInTouch,
    AppFooter,
  },
  setup() {
    const route = useRoute();

    // Check if current route is login or signup
    const isAuthRoute = computed(() => route.path === "/login" || route.path === "/signup");

    return { isAuthRoute };
  },
};
</script>
