<template>
    <section class="py-5 bg-white position-relative">
      <div class="container">
        <div class="row align-items-center justify-content-center flex-column-reverse flex-lg-row">
          <!-- Left Image/Graphic Side -->
          <div class="col-12 col-lg-5 mb-4 mb-lg-0 position-relative d-flex flex-column align-items-center align-items-lg-start">
            <!-- Circle decoration (hidden on mobile) -->
            <div
              class="bg-dark rounded-circle position-absolute shadow-lg d-none d-lg-block"
              style="width: 120px; height: 120px; top: 50%; left: 0; transform: translate(-50%, -50%); z-index: 0;"
            ></div>
  
            <!-- Chat box -->
            <div class="bg-white rounded shadow p-3 mb-3 position-relative z-2 w-100" style="max-width: 220px;">
              <small class="text-muted">Let's get started... What's your name?</small>
              <div class="bg-secondary mt-2 rounded" style="height: 10px; width: 80%;"></div>
              <div class="bg-secondary mt-2 rounded" style="height: 10px; width: 60%;"></div>
            </div>
  
            <!-- Growth Box -->
            <div class="bg-light text-center p-3 rounded w-100" style="max-width: 140px;">
              <h3 class="fw-bold mb-0">68%</h3>
              <small class="text-muted">Extra growth of creative courses</small>
            </div>
          </div>
  
          <!-- Right Text Side -->
          <div class="col-12 col-lg-6 text-center text-lg-start">
            <p class="text-primary fw-semibold">— Why Us ?</p>
            <h2 class="fw-bold mb-3">
              Certified and
              <span class="text-primary">vetted<br />courses</span>
              for you
            </h2>
            <p class="text-muted">
              Uifry helps you discover awesome free creative courses around the globe. We are on a mission to help you get access and educate you about free resources.
            </p>
            <p class="text-muted">
              Uifry helps you discover awesome free creative courses around the globe. We are on a mission to help you get access and educate you about free resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  section {
    overflow-x: hidden;
  }
  </style>
  