<template>
  <div class="container py-5 bg-white">
    <!-- Header -->
    <div class="mb-4 text-center text-md-start">
      <h2 class="fw-bold mb-0">
        Featured <span class="text-primary">News</span>
      </h2>
    </div>

    <!-- News Cards -->
    <div class="row g-4">
      <div
        v-for="(item, index) in news"
        :key="index"
        class="col-12 col-sm-6 col-lg-4"
      >
        <div
          class="card h-100 border-0 shadow-sm"
          style="background-color: #f9fbff"
        >
          <div class="card-body d-flex flex-column justify-content-between">
            <img :src="item.image" alt="News Image" />
            <small class="text-muted">{{ item.category }}</small>
            <h6 class="mt-2">{{ item.title }}</h6>
            <div class="mt-auto text-primary">
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsImage from "../../src/assets/background.jpg";

export default {
  name: "FeaturedNews",
  data() {
    return {
      fallbackImage: NewsImage,
      news: [
        {
          image: NewsImage,
          category: "White Paper",
          title:
            "New study from IBM and the Burning Glass Institute: Skills for a Sustainable Future",
        },
        {
          image: NewsImage, 
          category: "IBM Newsroom",
          title:
            "IBM is committed to training 2 million people in Artificial Intelligence in 3 years",
        },
        {
          image: NewsImage,
          category: "IBM Newsroom",
          title:
            "IBM commits to training/re-skilling 30 million people globally by 2030",
        },
      ],
    };
  },
};
</script>

<style scoped>
h6 {
  font-size: 0.95rem;
  line-height: 1.5;
}
.card-body {
  min-height: 180px;
}
</style>
