<template>
    <section class="py-5 bg-light text-center">
      <div class="container">
        <h2 class="fw-bold mb-5">
          What our <span class="text-primary">happy clients</span> say
        </h2>
  
        <div class="row g-4 justify-content-center">
          <div
            class="col-12 col-sm-10 col-md-6 col-lg-4"
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <div class="card h-100 shadow-sm border-0 p-4">
              <div class="text-start text-muted mb-2 quote-mark">“”</div>
              <div class="text-start mb-2 text-warning stars">
                <span v-for="n in 5" :key="n">★</span>
              </div>
              <h6 class="fw-bold text-start">{{ testimonial.name }}</h6>
              <p class="text-start small text-muted">
                {{ testimonial.text }}
              </p>
            </div>
          </div>
        </div>
  
        <!-- Pagination arrows -->
        <div class="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <button class="btn btn-outline-secondary rounded-circle px-3 py-2">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button class="btn btn-dark rounded-circle px-3 py-2">
            <i class="bi bi-chevron-right text-white"></i>
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          { name: "John De Marli", text: "Sit purus, ac nam morbi consectetur quam eget iaculis..." },
          { name: "Dianne", text: "Sit purus, ac nam morbi consectetur quam eget iaculis..." },
          { name: "Shawn", text: "Sit purus, ac nam morbi consectetur quam eget iaculis..." },
          { name: "Alexander", text: "Sit purus, ac nam morbi consectetur quam eget iaculis..." },
          { name: "Lisa David", text: "Sit purus, ac nam morbi consectetur quam eget iaculis..." },
          { name: "Emily", text: "Sit purus, ac nam morbi consectetur quam eget iaculis..." },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .card {
    transition: all 0.3s ease-in-out;
    border-radius: 1rem;
    background-color: white;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
  
  .quote-mark {
    font-size: 2rem;
    line-height: 1;
  }
  
  .stars {
    font-size: 1.1rem;
    white-space: nowrap;
  }
  </style>
  