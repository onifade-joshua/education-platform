<template>
  <section class="featured-courses">
    <div class="container text-center">
      <h2 class="title">Featured our creative courses</h2>

      <div class="courses-grid">
        <div class="course-card" v-for="course in courses" :key="course.title">
          <div class="icon">
            <img :src="logo" alt="Course Icon" class="logo"/>
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
import Logo from "../assets/background.jpg";

export default {
  data() {
    return {
      logo: Logo,
      courses: [
        {
          title: "UI / UX Design",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta consectetur deserunt alias similique, temporibus quaerat blanditiis libero dolores omnis deleniti repudiandae ipsa quas vero labore minus quia quidem soluta reiciendis! Accusantium natus unde accusamus nostrum autem. Architecto est rem atque, id quia accusamus magni laudantium nulla dolore, voluptates repudiandae....",
          icon: "uiux-icon.png",
        },
        {
          title: "Web Development",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta consectetur deserunt alias similique, temporibus quaerat blanditiis libero dolores omnis deleniti repudiandae ipsa quas vero labore minus quia quidem soluta reiciendis! Accusantium natus unde accusamus nostrum autem. Architecto est rem atque, id quia accusamus magni laudantium nulla dolore, voluptates repudiandae....",
          icon: "webdev-icon.png",
        },
        {
          title: "SEO/ Marketing",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta consectetur deserunt alias similique, temporibus quaerat blanditiis libero dolores omnis deleniti repudiandae ipsa quas vero labore minus quia quidem soluta reiciendis! Accusantium natus unde accusamus nostrum autem. Architecto est rem atque, id quia accusamus magni laudantium nulla dolore, voluptates repudiandae....",
          icon: "seo-icon.png",
        },
        {
          title: "Branding",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta consectetur deserunt alias similique, temporibus quaerat blanditiis libero dolores omnis deleniti repudiandae ipsa quas vero labore minus quia quidem soluta reiciendis! Accusantium natus unde accusamus nostrum autem. Architecto est rem atque, id quia accusamus magni laudantium nulla dolore, voluptates repudiandae....",
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
  margin-bottom: rem;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: #1d1b44;
  margin-bottom: 40px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  justify-content: center;
}

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
.logo {
  width: 80px;
  height: 50px;
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

.view-all-btn {
  margin-top: 80px;
  padding: 20px 30px;
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
