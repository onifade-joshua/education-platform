<template>
    <div class="mb-5">
      <h5>{{ title }}</h5>
      <div class="row mt-3">
        <CourseCard v-for="n in 3" :key="n" />
      </div>
    </div>
  </template>
  
  <script>
  import CourseCard from './CourseCard.vue'
  
  export default {
    components: { CourseCard },
    props: {
      title: String
    }
  }
  </script>
  