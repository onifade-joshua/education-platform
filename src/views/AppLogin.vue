<template>
  <div class="container-fluid login-page">
    <div class="row vh-100">
      <!-- Left Section (Login Form) -->
      <div
        class="col-md-6 d-flex flex-column justify-content-center p-5 bg-light position-relative"
      >
        <!-- Logo (Top Left) -->
        <div class="logo-container">
          <img :src="logo" alt="Logo" class="logo" />
        </div>

        <h2 class="fw-bold text-center mt-5" style="color: #1d1b44;">LOGIN</h2>
        <p class="text-muted text-center">
          Welcome back! Please login to continue.
        </p>

        <form @submit.prevent="handleLogin" class="w-75 mx-auto">
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

          <div class="mb-1 input-group">
            <span class="input-group-text"><i class="bi bi-lock"></i></span>
            <input
              type="password"
              v-model="password"
              class="form-control"
              placeholder="Password"
              required
            />
          </div>

          <!-- Forgot Password Link -->
          <div class="text-end">
            <router-link to="/forgot-password" class="forgot-password-link"
              >Forgot Password?</router-link
            >
          </div>

          <button type="submit" class="btn btn-dark w-100">Login Now</button>
        </form>

        <!-- <div class="social-icons mt-4 d-flex justify-content-center">
            <button class="btn btn-outline-dark mx-2"><i class="bi bi-google"></i></button>
            <button class="btn btn-outline-dark mx-2"><i class="bi bi-facebook"></i></button>
            <button class="btn btn-outline-dark mx-2"><i class="bi bi-apple"></i></button>
          </div> -->

        <p class="mt-4 text-center">
          Don't have an account?
          <router-link to="/signup" class="text-dark fw-bold"
            >Sign Up</router-link
          >
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
import Logo from "@/assets/logo-img.png";

export default {
  data() {
    return {
      username: "",
      password: "",
      logo: Logo,
    };
  },
  methods: {
    handleLogin() {
      if (this.username === "admin" && this.password === "password") {
        localStorage.setItem("isAuthenticated", "true");
        this.$router.push("/dashboard");
      } else {
        alert("Invalid Credentials");
      }
    },
  },
};
</script>

<style scoped>
/* Background Gradient */
.login-page {
  background: linear-gradient(to right, #ffffff, #1c1c2e);
}

/* Logo Positioning */
.logo-container {
  position: absolute;
  top: 20px;
  left: 40px;
}

.logo {
  width: 120px;
}

/* Input Fields */
.input-group-text {
  background: #f0f0f0;
}

/* Right Section Styling */
.image-container {
  background: #f0f0f0;
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

.forgot-password-link {
  display: block;
  color: #1c0732;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 10px;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

/* Buttons */
button {
  transition: all 0.3s ease-in-out;
  background-color: #1d1b44;
  padding: 0.5rem;
}

button:hover {
  background: #141136;
  color: white;
}
</style>
