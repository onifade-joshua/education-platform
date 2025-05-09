<template>
  <div :class="['sidebar-container', isDark ? 'dark' : '']" :style="{ width: collapsed ? '80px' : '250px' }">
    <!-- Toggle Buttons -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <button class="btn btn-sm toggle-btn" @click="collapsed = !collapsed">
        <i class="bi" :class="collapsed ? 'bi-chevron-right' : 'bi-chevron-left'"></i>
      </button>
      <button class="btn btn-sm toggle-btn ms-auto" @click="isDark = !isDark">
        <i class="bi" :class="isDark ? 'bi-brightness-high' : 'bi-moon'"></i>
      </button>
    </div>

    <!-- <h6>Your Profile</h6> -->
    <!-- Avatar and User Info -->
    <div class="text-center mb-3" v-if="!collapsed">
      <img :src="user.avatar" class="rounded-circle user-avatar" />
      <h6 class="mt-2">{{ user.name }}</h6>
      <small class="text">{{ user.subtitle }}</small>
    </div>

    <!-- Icon Bar -->
    <div class="icon-bar" :class="{ vertical: collapsed }">
      <div class="icon-wrapper" :title="collapsed ? 'Notifications' : ''">
        <i class="bi bi-bell"></i>
      </div>
      <div class="icon-wrapper" :title="collapsed ? 'Profile' : ''">
        <i class="bi bi-person"></i>
      </div>
      <div class="icon-wrapper" :title="collapsed ? 'Settings' : ''">
        <i class="bi bi-gear"></i>
      </div>
    </div>

    <!-- Frequency Bars -->
    <div class="progress-bar-container text-center" v-if="!collapsed">
      <div class="d-flex justify-content-around align-items-end bar-wrapper">
        <div
          v-for="(value, index) in frequencyData"
          :key="index"
          class="bar"
          :style="{ height: `${value}px`, animationDelay: `${index * 0.1}s` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Sidebar state
const collapsed = ref(false)
const isDark = ref(false)


// Dummy user data
const user = {
  name: 'Good Morning Prashant',
  subtitle: 'Continue Your Journey And Achieve Your Target',
  avatar: 'https://picsum.photos/200'
}

// Simulated frequency data
const frequencyData = ref([])

onMounted(() => {
  // Simulated backend data
  frequencyData.value = [20, 45, 30, 60, 40]
})
</script>

<style scoped>
/* Sidebar container */
.sidebar-container {
  background-color: white;
  color: #333;
  padding: 0.5rem;
  /* Removed fixed height to allow dynamic content */
  border-right: 1px solid #ddd;
  /* border-radius: 0 12px 12px 0; */
  /* box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05); */
  transition: width 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

/* Dark mode styles */
.sidebar-container.dark {
  background-color: #2d2d2d;
  color: #ffffff;
}

/* Avatar */
.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #a259ff;
}

/* Icon bar styles */
.icon-bar {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  transition: all 0.3s ease;
}

.icon-bar.vertical {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.icon-wrapper {
  width: 45px;
  height: 45px;
  background-color: #f2f2f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border: 1px solid #ccc;
}

.dark .icon-bar .icon-wrapper {
  background-color: #444;
  border: 1px solid #666;
}

.icon-bar .icon-wrapper:hover {
  background-color: #e0eaff;
  cursor: pointer;
  transform: scale(1.1);
}

.dark .icon-bar .icon-wrapper:hover {
  background-color: #666;
}

.icon-wrapper i {
  font-size: 1.2rem;
  color: #333;
}

.dark .icon-wrapper i {
  color: #fff;
}

/* Frequency bars */
.bar-wrapper {
  gap: 5px;
  margin-top: 10px;
  height: 100px;
}

.bar {
  width: 10px;
  background-color: #a259ff;
  border-radius: 8px;
  animation: pulse 1.2s infinite ease-in-out alternate;
}

@keyframes pulse {
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1.5);
  }
}

/* Toggle button */
.toggle-btn {
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: inherit;
}

.toggle-btn:hover {
  color: #a259ff;
}
</style>
