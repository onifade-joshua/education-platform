<template>
  <AppNavbar />
  <AppHero />
  <FeaturedCourses />
  <RecommendedCourses />
  <AppGetInTouch/>
  <AppFooter />
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppHero from './components/AppHero.vue';
import FeaturedCourses from './components/FeaturedCourses.vue';
import RecommendedCourses from './components/RecommendedCourses.vue';
import AppFooter from './components/AppFooter.vue';
import AppGetInTouch from './components/AppGetInTouch.vue';

export default {
  components: {
    AppNavbar,
    AppHero,
    FeaturedCourses,
    RecommendedCourses,
    AppGetInTouch,
    AppFooter
  }
};
</script>
