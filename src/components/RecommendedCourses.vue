<template>
  <div class="wrapper" style="  background: #f8f9ff; padding: 1rem;">
  <section class="container">
    <div class="content">
      
      <!-- Recommended Courses Card -->
      <div class="courses-card">
        <h2 class="course-title">Courses Recommended For You</h2>
        <ul class="course-list">
          <li v-for="(course, index) in courses" :key="index">{{ course }}</li>
        </ul>
        <a href="#" class="view-more">View More</a>
      </div>

      <!-- About Section -->
      <div class="about-section">
        <h4 class="about-title">ABOUT US</h4>
        <h2 class="about-heading">
          We Handle Over <span class="highlight">3 Million</span> Courses
        </h2>
        <p class="about-text">
          Empower your learning journey with a cutting-edge Learning Management System that is intuitive, scalable, 
          and fully equipped to meet the needs of learners, educators, and organizations. Whether you're a school, 
          university, business, or training institution, our LMS makes learning easier, more engaging, and effective.
        </p>

        <!-- Course Tags -->
        <div class="tags">
          <span v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</span>
        </div>
      </div>

    </div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        "Introduction to Programming",
        "Deep Learning",
        "Digital Marketing",
        "Data Engineering with AWS",
      ],
      tags: [
        "Deep Learning",
        "UX Design",
        "AWS",
        "2D Design",
        "PHP",
        "Wix",
        "Digital Marketing",
        "Native App Dev",
      ],
    };
  },
};
</script>

<style scoped>
/* Global Container */
.container {
  background-color: #090014;
  color: white;
  padding: 80px 40px;
  display: flex;
  justify-content: center;
  border-radius: 50px;
}

.content {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  gap: 60px;
  align-items: center;
}

/* Recommended Courses Card */
.courses-card {
  background: white;
  color: black;
  padding: 40px;
  border-radius: 30px;
  width: 45%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.course-title {
  font-size: 26px;
  font-weight: bold;
}

.course-list {
  margin-top: 15px;
  list-style: none;
  padding: 0;
}

.course-list li {
  font-size: 18px;
  margin: 10px 0;
  position: relative;
  padding-left: 20px;
  color: black;
}

/* Purple bullet points */
.course-list li::before {
  content: "•";
  color: #6c38ff;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  left: 0;
  /* top: 3px; */
}

.view-more {
  display: inline-block;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #6c38ff;
  text-decoration: none;
}

/* About Section */
.about-section {
  width: 50%;
}

.about-title {
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  color: gray;
}

.about-heading {
  font-size: 36px;
  font-weight: bold;
}

.highlight {
  color: #6c38ff;
}

.about-text {
  color: #ccc;
  margin-top: 15px;
  line-height: 1.8;
}

/* Tags Section */
.tags {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  background-color: #6c38ff;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(108, 56, 255, 0.4);
}

/* RESPONSIVE DESIGN */
@media (max-width: 1024px) {
  .content {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .courses-card, .about-section {
    width: 100%;
  }

  .about-heading {
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 60px 15px;
  }

  .courses-card {
    padding: 30px;
  }

  .course-title {
    font-size: 22px;
  }

  .course-list li {
    font-size: 16px;
  }

  .about-heading {
    font-size: 26px;
  }

  .tag {
    font-size: 12px;
    padding: 10px 15px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 40px 10px;
  }

  .content {
    gap: 20px;
  }

  .courses-card {
    padding: 25px;
    border-radius: 20px;
  }

  .course-title {
    font-size: 20px;
  }

  .course-list li {
    font-size: 14px;
  }

  .about-heading {
    font-size: 22px;
  }

  .about-text {
    font-size: 14px;
  }

  .tag {
    font-size: 12px;
    padding: 8px 12px;
  }
}
</style>
