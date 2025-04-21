<template>
    <div class="container py-4">
      <div class="ratio ratio-16x9 mb-4">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Lesson Video"
          allowfullscreen
        ></iframe>
      </div>
      <h5 class="fw-bold mb-2">{{ title }}</h5>
      <p class="text-muted">
        In this lesson, you’ll learn everything about {{ title }} in depth.
      </p>
      <button class="btn btn-dark">Mark as Completed</button>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const title = route.params.title
  </script>
  