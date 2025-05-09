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

        <div v-if="errorMessage" class="alert alert-danger text-center w-75 mx-auto mb-3">
          {{ errorMessage }}
        </div>

        <form @submit.prevent="handleLogin" class="w-75 mx-auto">
          <div class="mb-3 input-group">
            <span class="input-group-text"><i class="bi bi-person"></i></span>
            <input
              type="text"
              v-model="email"
              class="form-control"
              placeholder="Email"
              required
              :disabled="loading"
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
              :disabled="loading"
            />
          </div>

          <!-- Forgot Password Link -->
          <div class="text-end">
            <router-link to="/forgot-password" class="forgot-password-link"
              >Forgot Password?</router-link
            >
          </div>

          <button type="submit" class="btn btn-dark w-100" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            {{ loading ? 'Logging in...' : 'Login Now' }}
          </button>
        </form>

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
import authService from "@/services/authService";

export default {
  data() {
    return {
      email: "",
      password: "",
      logo: Logo,
      loading: false,
      errorMessage: ""
    };
  },
  created() {
    if (authService.isAuthenticated()) {
      this.$router.push("/home");
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.errorMessage = "";

      try {
        await authService.login(this.email, this.password);
        this.$router.push("/home");
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            this.errorMessage = "Invalid email or password.";
          } else {
            this.errorMessage = error.response.data?.message || "Login failed.";
          }
        } else {
          this.errorMessage = "Network error. Please try again.";
        }
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>


<style scoped>
.login-page {
  background: linear-gradient(to right, #ffffff, #1c1c2e);
}

.logo-container {
  position: absolute;
  top: 20px;
  left: 40px;
  /* background: linear-gradient(to right, #ffffff, #1c1c2e); */
}

.logo {
  width: 40px;
}

.input-group-text {
  background: #f0f0f0;
}

.image-container {
  background: #fff;
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