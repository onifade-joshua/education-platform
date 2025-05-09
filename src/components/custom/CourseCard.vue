<template>
  <div class="col-md-4 mb-4">
    <div class="card course-card shadow-sm" @click="navigateToCourse">
      <!-- Course thumbnail with fallback -->
      <img :src="fallbackImage" class="card-img-top" alt="Course Thumbnail" />

      <div class="card-body">
        <!--  Course status badge -->
        <div v-if="course.status" :class="['course-status-badge', getStatusClass(course.status)]">
          {{ course.status }}
        </div>

        <!-- Title -->
        <h6 class="card-title fw-bold mt-2">{{ course.title }}</h6>

        <!-- Progress bar -->
        <div class="progress-container">
          <div class="progress-label">
            <!-- <small>{{ course.progress }}% Complete</small> -->
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              :style="{ width: course.progress + '%' }"
              :aria-valuenow="course.progress"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <!-- Instructor avatar, name, and role -->
        <div class="d-flex align-items-center mt-3">
          <img :src="course.avatar || fallbackImage" class="avatar-img me-2" alt="Instructor Avatar" />
          <div>
            <div class="fw-semibold">{{ course.instructor }}</div>
            <small class="text-muted">{{ course.role }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, defineProps } from 'vue-router'
import fallbackImage from '../../assets/background.jpg' 

const props = defineProps({
  course: {
    type: Object,
    required: true
  }
})

const router = useRouter()

function navigateToCourse() {
  router.push({ name: 'CourseDetail', params: { id: props.course.id } })
}

function getStatusClass(status) {
  switch (status.toLowerCase()) {
    case 'enrolled':
      return 'bg-light text-#8e2de2'
    case 'completed':
      return 'bg-success text-white'
    case 'in progress':
      return 'bg-warning text-dark'
    default:
      return 'bg-secondary text-white'
  }
}
</script>

<style scoped>
.course-card {
  cursor: pointer;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.course-card:hover {
  transform: scale(1.02);
}

.card-img-top {
  height: 160px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

.avatar-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.progress-container {
  margin-top: 15px;
}

.progress-label {
  margin-bottom: 4px;
  font-size: 12px;
  color: #666;
}

.progress {
  height: 6px;
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  background-color: #8e2de2;
  height: 100%;
  transition: width 0.4s ease;
}

.course-status-badge {
  display: inline-block;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 999px;
  text-transform: uppercase;
  width: fit-content;
  color: #8e2de2;
  background-color: lightgrey;
}
</style>
