<template>
    <button
      v-if="showButton"
      class="btn scroll-to-top rounded-circle position-fixed shadow d-flex align-items-center justify-content-center"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <i class="bi bi-arrow-up text-white"></i>
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showButton = window.scrollY > 300;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .scroll-to-top {
    bottom: 4vh;
    right: 4vw;
    width: 48px;
    height: 48px;
    background-color: #1d1b44;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .scroll-to-top:hover {
    background-color: #141136 !important;
    transform: scale(1.05);
  }
  
  /* On smaller devices, slightly reduce size and offset */
  @media (max-width: 576px) {
    .scroll-to-top {
      width: 42px;
      height: 42px;
      bottom: 3vh;
      right: 12vw;
    }
  }
  </style>
  