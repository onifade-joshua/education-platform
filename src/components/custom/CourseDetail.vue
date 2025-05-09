<template>
  <div class="container py-4">
    <div class="mb-4">
      <h4 class="fw-bold">{{ course.title }}</h4>
      <p class="text-muted">{{ course.description }}</p>
    </div>
    <div class="row g-4">
      <div
        class="col-md-4"
        v-for="(lesson, index) in course.lessons"
        :key="index"
      >
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h6 class="card-title">{{ lesson.title }}</h6>
            <p class="card-text small text-muted">{{ lesson.summary }}</p>
            <button class="btn btn-outline-primary btn-sm w-100" @click="goToLesson(lesson.id)">
              Start Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const router = useRouter();
const courseId = route.params.id;

const course = ref({
  title: '',
  description: '',
  lessons: []
});

onMounted(() => {
  // Simulate fetching course details
  course.value = {
    id: courseId,
    title: `Frontend Development Masterclass #${courseId}`,
    description: 'Learn HTML, CSS, and JavaScript in a comprehensive course.',
    lessons: [
      { id: '101', title: 'Intro to HTML', summary: 'Basic structure of web pages' },
      { id: '102', title: 'CSS Essentials', summary: 'Styling and layout techniques' },
      { id: '103', title: 'JavaScript Basics', summary: 'Programming the web' }
    ]
  };
});

function goToLesson(videoId) {
  router.push({ name: 'VideoPlayer', params: { id: videoId } });
}
</script>
