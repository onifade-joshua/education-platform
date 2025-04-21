<template>
    <div class="bg-white p-3 border-end" style="width: 250px;">
      <div class="text-center mb-4">
        <img :src="user.avatar" class="rounded-circle" width="80" />
        <h6 class="mt-2">{{ user.name }}</h6>
        <small class="text-muted">{{ user.subtitle }}</small>
      </div>
      <div class="d-flex justify-content-around my-3">
        <i class="bi bi-bell"></i>
        <i class="bi bi-person"></i>
        <i class="bi bi-gear"></i>
      </div>
      <div class="progress-bar-container text-center">
        <!-- Your purple bars -->
        <div class="d-flex justify-content-around">
          <div v-for="n in 5" :key="n" class="bg-purple" :style="{ height: `${n * 10}px`, width: '10px', backgroundColor: '#a259ff' }"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const user = {
    name: 'Good Morning Prashant',
    subtitle: 'Continue Your Journey And Achieve Your Target',
    avatar: 'https://via.placeholder.com/80'
  }
  </script>
  