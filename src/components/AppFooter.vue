<template>
  <footer class="bg-white py-4">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <!-- Logo -->
        <div class="d-flex align-items-center">
          <span class="logo-dot bg-dark me-1"></span>
          <span class="logo-dot bg-primary me-1"></span>
          <span class="logo-dot bg-secondary"></span>
        </div>
        
        <!-- Navigation Links -->
        <ul class="nav">
          <li class="nav-item"><a href="#" class="nav-link text-dark">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-dark">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-dark">Integration</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-dark">Blogs</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-dark">About</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-dark">Contact</a></li>
        </ul>
      </div>
      
      <!-- Divider -->
      <hr class="my-3 border-dark" />
      
      <div class="d-flex justify-content-between align-items-center">
        <p class="m-0 text-dark">All rights reserved | Terms and conditions apply!</p>
        <div class="d-flex gap-3">
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
