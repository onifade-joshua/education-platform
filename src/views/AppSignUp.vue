<template>
  <div class="container-fluid signup-page">
    <div class="row vh-100">
      <!-- Left Section (Signup Form) -->
      <div
        class="col-md-6 d-flex flex-column justify-content-center p-5 bg-light position-relative"
      >
        <!-- Logo (Top Left) -->
        <div class="logo-container">
          <img :src="logo" alt="Logo" class="logo"/>
        </div>

        <h2 class="fw-bold text-center mt-5" style="padding-top: 20px; color: #1d1b44;">
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
            <span class="input-group-text"><i class="bi bi-envelope"></i></span>
            <input
              type="email"
              v-model="email"
              class="form-control"
              placeholder="Email Address"
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

          <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
          </div>

          <button 
            type="submit" 
            class="btn btn-dark w-100 mt-3"
            :disabled="isLoading"
          >
            <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            {{ isLoading ? 'Signing Up...' : 'Signup Now' }}
          </button>
        </form>

        <div class="social-icons mt-4 d-flex justify-content-center">
          <button class="btn btn-outline mx-2">
            <i class="bi bi-google text-danger"></i>
          </button>
          <button class="btn btn-outline mx-2">
            <i class="bi bi-facebook text-primary"></i>
          </button>
          <button class="btn btn-outline mx-2">
            <i class="bi bi-apple text-dark"></i>
          </button>
        </div>

        <p class="mt-4 text-center">
          Already have an account?
          <router-link to="/login" class="text-dark fw-bold">Login</router-link>
        </p>
      </div>

      <!-- Right Section (Image & Text) -->
      <div class="col-md-6 d-flex image-container">
        <img :src="logo" alt="Illustration" class="info-image img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/logo-img.png"; 
import signupService from "@/services/signupService";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      logo: Logo,
      isLoading: false,
      error: null
    };
  },
  methods: {
    async handleSignup() {
      this.error = null;
      
      // Validate passwords match
      if (this.password !== this.confirmPassword) {
        this.error = "Passwords do not match!";
        return;
      }
      
      // Validate password strength (example)
      if (this.password.length < 8) {
        this.error = "Password must be at least 8 characters long";
        return;
      }
      
      // Start loading
      this.isLoading = true;
      
      try {
        // Register the user
        const userData = {
          username: this.username,
          email: this.email,
          password: this.password
        };
        
        await signupService.register(userData);
        
        // Redirect to dashboard or home after signup
        this.$router.push("/home");
      } catch (err) {
        // Handle specific API error messages
        if (err.response && err.response.data) {
          this.error = err.response.data.message || "Registration failed. Please try again.";
        } else {
          this.error = "Unable to connect to the server. Please try again later.";
        }
        console.error("Signup error:", err);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.mx-2 {
  background-color: #fff;
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.mx-2:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  transform: translateY(-2px);
  background-color: #fff;
  /* color: #fff; */
}

.signup-page {
  background: linear-gradient(to right, #ffffff, #1c1c2e);
}

.logo-container {
  position: absolute;
  top: 20px;
  left: 40px;
  margin-bottom: 30px; 
  height: 100vh;
}

.logo {
  width: 40px; 
}

.input-group-text {
  background: #f0f0f0;
}

.info-card {
  padding: 40px;
  max-width: 450px;
}

.image-container {
  background: #fff; 
  /* background: #f1f1f1; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-image {
  max-width: 80%; 
  max-height: 80%;
  object-fit: contain; 
}

button {
  transition: all 0.3s ease-in-out;
  background-color: #1d1b44;
  padding: 0.5rem;
  /* height: "50px"; */
}

button:hover {
  background: #141136;
  color: white;
}

.spinner-border {
  width: 1rem;
  height: 1rem;
}
</style>