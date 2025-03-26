<template>
  <footer class="bg-white py-4">
    <div class="container">
      <!-- Top Section -->
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
        <!-- Logo -->
        <div class="d-flex align-items-center justify-content-center mb-3 mb-md-0">
          <span class="logo-dot bg-dark me-1"></span>
          <span class="logo-dot bg-primary me-1"></span>
          <span class="logo-dot bg-secondary"></span>
        </div>
        
        <!-- Navigation Links -->
        <ul class="nav flex-column flex-md-row">
          <li class="nav-item"><a href="#" class="nav-link text-dark px-2">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-dark px-2">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-dark px-2">Integration</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-dark px-2">Blogs</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-dark px-2">About</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-dark px-2">Contact</a></li>
        </ul>
      </div>

      <!-- Divider -->
      <hr class="my-3 border-dark" />

      <!-- Bottom Section -->
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
        <p class="m-0 text-dark">All rights reserved | Terms and conditions apply!</p>
        
        <!-- Social Media Icons -->
        <div class="d-flex gap-3 mt-3 mt-md-0">
          <a href="#" class="text-dark fs-5"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-dark fs-5"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-dark fs-5"><i class="bi bi-youtube"></i></a>
          <a href="#" class="text-dark fs-5"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="text-dark fs-5"><i class="bi bi-twitter"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.logo-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}
</style>
