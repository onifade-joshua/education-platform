<template>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <ul class="nav">
        <li class="nav-item" v-for="item in tabs" :key="item">
          <a class="nav-link text-dark" href="#">{{ item }}</a>
        </li>
      </ul>
      <button class="btn btn-dark">Log out</button>
    </div>
  </template>
  
  <script setup>
  const tabs = ['Home', 'Videos', 'Course', 'Business', 'Government', 'Outcomes']
  </script>
  