<template>
  <div class="container py-4">
    <div class="ratio ratio-16x9 mb-4">
      <iframe
        :src="videoUrl"
        title="Lesson Video"
        allowfullscreen
      ></iframe>
    </div>
    <h5 class="fw-bold mb-2">Lesson Video</h5>
    <p class="text-muted">This video explains the lesson in detail.</p>
    <button class="btn btn-dark">Mark as Completed</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const videoId = computed(() => route.params.id); 

const videoUrl = computed(() => {
  if (videoId.value === '101') {
    return 'https://www.youtube.com/embed/ScMzIvxBSi4'; // HTML Course Video
  } else if (videoId.value === '102') {
    return 'https://www.youtube.com/embed/yfoY53QXEnI'; // CSS Course Video
  } else if (videoId.value === '103') {
    return 'https://www.youtube.com/embed/W6NZfCO5SIk'; // JavaScript Course Video
  } else {
    return 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Default fallback
  }
});
</script>
