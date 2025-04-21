<template>
  <nav class="navbar navbar-expand-lg bg-light py-3">
    <div class="container">
      <!-- Brand Logo -->
      <!-- <a class="navbar-brand" href="#">
        <img :src="logo" alt="Logo" height="40" class="logo" />
      </a> -->
      <router-link class="navbar-brand" to="/home">
        <img :src="logo" alt="Logo" height="40" class="logo" />
      </router-link>

      <!-- Navbar Toggler Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible Navbar -->
      <div
        class="collapse navbar-collapse justify-content-center text-center"
        id="navbarNav"
      >
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/learn">Learn</router-link>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">Catalog</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Business</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Government</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Outcomes</a></li>
        </ul>

        <!-- Join Button - Adjusted for Mobile -->
        <!-- <a
          href="#"
          class="btn ms-lg-3 d-block d-lg-inline-block mt-3 mt-lg-0"
          style="background-color: #1d1b44; color: #fff"
          >Join</a
        > -->
        <!-- Join Button - Adjusted for Mobile -->
        <router-link
          to="/login"
          class="btn ms-lg-3 d-block d-lg-inline-block mt-3 mt-lg-0"
          style="background-color: #1d1b44; color: #fff"
        >
          Join
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../assets/logo-img.png";
export default {
  name: "AppNavbar",
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Space between nav items */
.navbar-nav {
  gap: 15px;
}

/* Ensures full width on mobile */
@media (max-width: 991px) {
  .navbar-collapse {
    text-align: center;
  }

  .navbar-nav {
    width: 100%;
  }

  .navbar-nav .nav-item {
    width: 100%;
  }

  .btn {
    width: 100%; /* Full width for mobile */
  }
}
</style>
