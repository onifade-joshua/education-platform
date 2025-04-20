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
/* Base Styles */
.testimonial-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  /* background: #f8f9fa; */
  text-align: center;
}

.testimonial-content {
  max-width: 500px;
}

/* Avatar Styling */
.avatar-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Testimonial Text */
.testimonial-text {
  font-size: 18px;
  color: #333;
}

.highlight {
  color: #6c63ff;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 600px) {
  .testimonial-section {
    padding: 30px 15px;
  }

  .avatar-group {
    gap: 5px;
  }

  .avatar {
    width: 45px;
    height: 45px;
  }

  .testimonial-text {
    font-size: 16px;
  }
}
</style>
