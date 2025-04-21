<template>
    <div class="d-flex">
      <AppSidebar />
      <div class="flex-grow-1 p-3">
        <!-- <TopNav /> -->
        <AppSearchbar />
        <CourseSection title="Recently Watching" />
        <CourseSection title="Courses" />
        <CourseSection title="New" />
      </div>
    </div>
  </template>
  
  <script setup>
  import AppSidebar from '@/components/custom/AppSidebar.vue'
  // import TopNav from '@/components/custom/TopNav.vue'
  import AppSearchbar from '@/components/custom/AppSearchbar.vue'
  import CourseSection from '@/components/custom/CourseSection.vue'
  </script>
  