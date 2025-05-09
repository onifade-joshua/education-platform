<template>
  <div>
    <AppHero />
    <FeaturedCourses />
    <RecommendedCourses />
    <CustomerReview />
    <WhyUsSection />
    <WhyDifferentSection />
    <FeaturedNews />
    <AppGetInTouch />
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import userService from '@/services/userService';

import AppHero from "@/components/AppHero.vue";
import FeaturedCourses from "@/components/FeaturedCourses.vue";
import RecommendedCourses from "@/components/RecommendedCourses.vue";
import CustomerReview from "@/components/CustomerReview.vue";
import WhyUsSection from "@/components/WhyUsSection.vue";
import WhyDifferentSection from "@/components/WhyDifferentSection.vue";
import FeaturedNews from "@/components/FeaturedNews.vue";
import AppGetInTouch from "@/components/AppGetInTouch.vue";
import AppFooter from "@/components/AppFooter.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";


const userProfile = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await userService.getProfile();
    userProfile.value = response.data;
    console.log("User Profile:", userProfile.value); 
  } catch (err) {
    console.error("Failed to fetch profile:", err);
    error.value = "Could not load profile data";
  }
});
</script>
