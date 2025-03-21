<template>
  <nav class="navbar navbar-expand-lg bg-light py-3">
    <div class="container">
      <a class="navbar-brand" href="#"> 
        <img :src="logo" alt="Logo" height="40" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Learn</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Catalog</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Business</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Government</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Outcomes</a></li>
        </ul>
      </div>
      <a href="#" class="btn btn-dark ms-3">Join</a>
    </div>
  </nav>
</template>

<script>
import Logo from "../assets/cbn.jpg";
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
.navbar-nav {
  gap: 15px; /* Adjust spacing between nav links */
}

</style>
