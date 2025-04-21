<template>
    <div class="container py-4">
      <div class="mb-4">
        <h4 class="fw-bold">{{ course.title }}</h4>
        <p class="text-muted">{{ course.description }}</p>
      </div>
      <div class="row g-4">
        <div class="col-md-4" v-for="(lesson, index) in course.lessons" :key="index">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h6 class="card-title">{{ lesson.title }}</h6>
              <p class="card-text small text-muted">{{ lesson.summary }}</p>
              <button class="btn btn-outline-primary btn-sm w-100" @click="goToLesson(lesson)">
                Start Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const course = {
    title: 'Frontend Development Masterclass',
    description: 'A complete beginner to pro roadmap.',
    lessons: [
      { title: 'HTML Basics', summary: 'Learn the building blocks of the web.' },
      { title: 'CSS Styling', summary: 'Add beauty to your web pages.' },
      { title: 'JavaScript Intro', summary: 'Make your websites interactive.' }
    ]
  }
  
  const goToLesson = (lesson) => {
    router.push({ name: 'LessonPlayer', params: { title: lesson.title } })
  }
  </script>
  