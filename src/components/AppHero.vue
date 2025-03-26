<template>
  <section class="hero-section">
    <div class="container">
      <!-- Hero Section -->
      <div class="hero d-flex flex-column flex-lg-row align-items-center justify-content-between text-center text-lg-start">
        <!-- Left Content -->
        <div class="text-content">
          <h1 class="fw-bold display-5">Transforming <br />Education and Training</h1>
          <p class="text-muted lead">
            Empower your learning journey with a cutting-edge Learning Management System that is
            intuitive, scalable, and fully equipped to meet the needs of learners, educators, and organizations.
          </p>
          <a href="#" class="btn btn-dark rounded-pill px-4 py-3 mt-3">Get Started Free Trial</a>
        </div>

        <!-- Right Image Content -->
        <div class="image-content position-relative mt-4 mt-lg-0">
          <img :src="logo" alt="Learning" class="hero-img img-fluid rounded-circle shadow-lg" />

          <!-- Floating Labels -->
          <div class="floating-label position-absolute">
            <span class="badge bg-light text-dark shadow-sm">Lisa</span>
          </div>

          <!-- Floating Analytics with Chart -->
          <div class="floating-analytics position-absolute">
            <div class="analytics-box shadow-sm">
              <span style="font-size: 13px;">Increase Audience</span>
              <canvas ref="audienceChart"></canvas>
              <h5>125K Followers</h5>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial Section -->
      <div class="testimonial-wrapper">
        <div class="testimonial-container">
          <TestimonialSection :totalPeople="50000" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Chart, registerables } from "chart.js";
import Logo from "../assets/cbn.jpg";
import TestimonialSection from "./TestimonialSection.vue";

Chart.register(...registerables);

export default {
  name: "HeroSection",
  components: {
    TestimonialSection,
  },
  data() {
    return {
      logo: Logo,
    };
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const ctx = this.$refs.audienceChart.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Completed", "Remaining"],
          datasets: [
            {
              data: [75, 25],
              backgroundColor: ["#6c63ff", "#e5e5f7"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutout: "80%",
          plugins: {
            legend: { display: false },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: #f8f9fa;
  padding: 2rem 0;
}

.hero {
  gap: 2rem;
}

/* Ensure text scales properly */
.text-content {
  max-width: 600px;
}

.hero-img {
  max-width: 100%;
  width: 300px; /* Adjust size on smaller screens */
  height: auto;
  object-fit: cover;
  border: 8px solid #fff;
}

/* Floating Elements */
.floating-label {
  top: 10%;
  left: -30px;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 8px;
  background: #e5e5f7;
}

.floating-analytics {
  bottom: 10px;
  right: -10px;
}

/* Adjust chart box for small screens */
.analytics-box {
  background: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  width: 120px;
}

.analytics-box canvas {
  width: 50px !important;
  height: 50px !important;
  margin: auto;
}

.analytics-box h5 {
  font-weight: bold;
  color: #6c63ff;
  margin-top: 5px;
  font-size: 12px;
}

/* Testimonial Section */
.testimonial-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.testimonial-container {
  max-width: 100%;
}
</style>
