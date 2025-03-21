<template>
    <section class="testimonial-section">
      <div class="testimonial-content">
        <!-- Avatar Images -->
        <div class="avatar-group">
          <img :src="avatar1" alt="User 1" class="avatar" />
          <img :src="avatar2" alt="User 2" class="avatar" />
          <img :src="avatar3" alt="User 3" class="avatar" />
        </div>
  
        <!-- Testimonial Text -->
        <p class="testimonial-text">
          We have helped over 
          <span class="highlight">{{ totalPeople.toLocaleString() }}+</span> 
          awesome people get certified for free around the world.
        </p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      totalPeople: {
        type: Number,
        default: 50000
      },
      avatar1: {
        type: String,
        default: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      avatar2: {
        type: String,
        default: "https://randomuser.me/api/portraits/men/33.jpg"
      },
      avatar3: {
        type: String,
        default: "https://randomuser.me/api/portraits/women/29.jpg"
      }
    }
  };
  </script>
  
  <style scoped>
  .testimonial-section {
    display: flex;
    justify-content: flex-start; /* Align to the left */
    padding: 30px 20px;
  }
  
  .testimonial-content {
    max-width: 500px;
    text-align: left; /* Ensures text is aligned to the left */
  }
  
  /* Avatar Styling */
  .avatar-group {
    display: flex;
    align-items: center;
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-right: -10px; /* Slight overlap effect */
  }
  
  .testimonial-text {
    font-size: 18px;
    color: #333;
    margin-top: 10px;
  }
  
  .highlight {
    color: #6c63ff;
    font-weight: bold;
  }
  </style>
  