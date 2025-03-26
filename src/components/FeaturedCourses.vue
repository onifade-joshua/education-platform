<template>
  <section class="featured-courses">
    <div class="container text-center">
      <h2 class="title">Featured our creative courses</h2>

      <div class="courses-grid">
        <div class="course-card" v-for="course in courses" :key="course.title">
          <div class="icon">
            <img :src="course.icon" alt="Course Icon" />
          </div>
          <h4 class="course-title">{{ course.title }}</h4>
          <p class="course-description">{{ course.description }}</p>
        </div>
      </div>

      <button class="view-all-btn">View All our Courses</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          title: "UI / UX Design",
          description: "There are many variations of passages of available but the majority have suffered...",
          icon: "uiux-icon.png",
        },
        {
          title: "Web Development",
          description: "There are many variations of passages of available but the majority have suffered...",
          icon: "webdev-icon.png",
        },
        {
          title: "SEO/ Marketing",
          description: "There are many variations of passages of available but the majority have suffered...",
          icon: "seo-icon.png",
        },
        {
          title: "Branding",
          description: "There are many variations of passages of available but the majority have suffered...",
          icon: "branding-icon.png",
        }
      ],
    };
  },
};
</script>

<style scoped>
.featured-courses {
  padding: 60px 20px;
  background: #f8f9ff;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: #1d1b44;
  margin-bottom: 40px;
}

/* Responsive Course Grid */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-content: center;
}

/* Course Card */
.course-card {
  background: linear-gradient(135deg, #f0f5ff, #ebf0ff);
  padding: 20px;
  border-radius: 16px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
}

.icon img {
  width: 50px;
}

.course-title {
  font-size: 18px;
  font-weight: bold;
  color: #1d1b44;
  margin-top: 10px;
}

.course-description {
  font-size: 14px;
  color: #64678a;
}

/* View All Courses Button */
.view-all-btn {
  margin-top: 30px;
  padding: 15px 30px;
  background: #1d1b44;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.view-all-btn:hover {
  background: #141136;
}

/* Mobile Responsive Styling */
@media (max-width: 768px) {
  .title {
    font-size: 24px;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .course-card {
    padding: 15px;
  }

  .course-title {
    font-size: 16px;
  }

  .course-description {
    font-size: 13px;
  }

  .view-all-btn {
    font-size: 14px;
    padding: 12px 25px;
  }
}
</style>
