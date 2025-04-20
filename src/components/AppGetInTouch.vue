<template>
  <div class="container py-5">
    <div class="row align-items-center">
      <!-- Left Section (Text) -->
      <div class="col-12 col-sm-6 text-center text-md-start mb-4 mb-md-0">
        <p class="text-uppercase text-secondary fw-semibold">GET IN TOUCH</p>
        <h1 class="fw-bold display-5">
          Let's <span class="text-primary">Make</span> Your Brand <span class="text-dark">Brilliant!</span>
        </h1>
        <p class="text-muted mt-3">
          If you would like to work with us or just want to get in touch, we’d love to hear from you!
        </p>
      </div>

      <!-- Right Section (Form) -->
      <div class="col-12 col-md-6 bg-light p-4 rounded shadow">
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <div class="input-group">
              <span class="input-group-text">👤</span>
              <input type="text" class="form-control" placeholder="First name" />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="input-group">
              <span class="input-group-text">👤</span>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="input-group">
              <span class="input-group-text">📧</span>
              <input type="email" class="form-control" placeholder="Email Address" />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="input-group">
              <span class="input-group-text">📞</span>
              <input type="tel" class="form-control" placeholder="Phone number" />
            </div>
          </div>
          <div class="col-12">
            <div class="input-group">
              <textarea class="form-control" placeholder="Write a message" rows="4"></textarea>
            </div>
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-primary w-100 w-md-auto px-4">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppGetInTouch",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
@media (max-width: 768px) {
  .input-group-text {
    font-size: 14px;
  }
  .form-control {
    font-size: 14px;
  }
}
</style>
