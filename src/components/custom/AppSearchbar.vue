<template>
  <div class="input-group mb-4">
    <!-- Search Icon on the Left inside the Input -->
    <span class="input-group-text"><i class="bi bi-search"></i></span>
    <!-- Search Input -->
    <input type="text" class="form-control" placeholder="Search your course here..." />
    <!-- Filter Icon on the Right -->
    <span class="input-group-text"><i class="bi bi-funnel"></i></span>
  </div>
</template>

<script setup>
// No changes needed in the script section
</script>

<style scoped>
/* Optional: Adjust styles for input field and icons if needed */
.input-group-text i {
  font-size: 1.2rem; /* Adjust icon size */
  color: #888; /* Adjust icon color */
}

.input-group-text {
  background-color: #f8f9fa; /* Optional: background color for input group */
}
</style>
