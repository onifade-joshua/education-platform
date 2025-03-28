<template>
  <div class="container-fluid signup-page">
    <div class="row vh-100">
      <!-- Left Section (Signup Form) -->
      <div
        class="col-md-6 d-flex flex-column justify-content-center p-5 bg-light position-relative"
      >
        <!-- Logo (Top Left) -->
        <div class="logo-container">
          <img :src="logo" alt="Logo" class="logo" />
        </div>

        <h2 class="fw-bold text-center mt-5" style="padding-top: 20px">
          SIGN UP
        </h2>
        <p class="text-muted text-center">
          Register today for a secure and seamless experience.
        </p>

        <form @submit.prevent="handleSignup" class="w-75 mx-auto">
          <div class="mb-3 input-group">
            <span class="input-group-text"><i class="bi bi-person"></i></span>
            <input
              type="text"
              v-model="username"
              class="form-control"
              placeholder="Username"
              required
            />
          </div>

          <div class="mb-3 input-group">
            <span class="input-group-text"><i class="bi bi-lock"></i></span>
            <input
              type="password"
              v-model="password"
              class="form-control"
              placeholder="Password"
              required
            />
          </div>

          <div class="mb-3 input-group">
            <span class="input-group-text"><i class="bi bi-lock"></i></span>
            <input
              type="password"
              v-model="confirmPassword"
              class="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>

          <button type="submit" class="btn btn-dark w-100">Signup Now</button>
        </form>

        <div class="social-icons mt-4 d-flex justify-content-center">
          <button class="btn btn-outline-dark mx-2">
            <i class="bi bi-google"></i>
          </button>
          <button class="btn btn-outline-dark mx-2">
            <i class="bi bi-facebook"></i>
          </button>
          <button class="btn btn-outline-dark mx-2">
            <i class="bi bi-apple"></i>
          </button>
        </div>

        <p class="mt-4 text-center">
          Already have an account?
          <router-link to="/login" class="text-dark fw-bold">Login</router-link>
        </p>
      </div>

      <!-- Right Section (Image & Text) -->
      <div class="col-md-6 d-flex image-container">
        <img :src="logo" alt="Illustration" class="info-image" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/cbn.jpg"; // Ensure the path is correct

export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      logo: Logo,
    };
  },
  methods: {
    handleSignup() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Simulating signup success (Replace with API call)
      localStorage.setItem("isAuthenticated", "true");
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
/* Background Gradient */
.signup-page {
  background: linear-gradient(to right, #ffffff, #1c1c2e);
}

/* Logo Positioning */
.logo-container {
  position: absolute;
  top: 20px;
  left: 40px;
  margin-bottom: 30px; /* Adds space between the logo and the form */
}

.logo {
  width: 30px; /* Reduced size */
}

/* Input Fields */
.input-group-text {
  background: #f0f0f0;
}

/* Right Section Styling */
.info-card {
  padding: 40px;
  max-width: 450px;
}

/* Centered Image with Grey Background */
.image-container {
  background: #f0f0f0; 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-image {
  max-width: 80%; /* Keeps the image from being too large */
  max-height: 80%; /* Ensures the image fits within the container */
  object-fit: contain; /* Maintains aspect ratio without cropping */
}

/* Buttons */
button {
  transition: all 0.3s ease-in-out;
}

button:hover {
  background: #5a0084;
  color: white;
}
</style>
