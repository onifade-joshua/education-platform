<template>
  <div class="d-flex flex-column">
    <div class="d-flex">
      <AppSidebar />
      <div class="flex-grow-1 p-3">
        <!-- Other sections like top nav, content, etc. -->
        <AppSearchbar />
        <CourseSection title="Recently Watching" />
        <CourseSection title="Courses" />
        <CourseSection title="New" />
        <!-- <FeaturedNews /> -->
      </div>
    </div>
    <div class="full-width-section">
      <FeaturedNews />
      <AppGetInTouch />
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import AppSidebar from "@/components/custom/AppSidebar.vue";
import AppSearchbar from "@/components/custom/AppSearchbar.vue";
import CourseSection from "@/components/custom/CourseSection.vue";
import FeaturedNews from "@/components/FeaturedNews.vue";
import AppGetInTouch from "@/components/AppGetInTouch.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style scoped>
.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.full-width-section {
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  margin-top: 2rem; 
}

.flex-grow-1 {
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
}
</style>
