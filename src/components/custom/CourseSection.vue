<template>
  <div class="mb-5">
    <h5>{{ title }}</h5>
    <div class="row mt-3">
      <CourseCard v-for="(course, index) in courses" :key="index" :course="course" />
    </div>
  </div>
</template>

<script>
import CourseCard from './CourseCard.vue';

export default {
  components: { CourseCard },
  props: {
    title: String
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          title: "Vue.js Basics",
          instructor: "Jane Doe",
          role: "Frontend Developer",
          avatar: "https://i.pravatar.cc/40?img=5",
          image: "https://via.placeholder.com/400x200?text=Vue+Course",
          progress: 65,
          status: "Enrolled"
        },
        {
          id: 2,
          title: "Advanced React",
          instructor: "John Smith",
          role: "Senior React Engineer",
          avatar: "https://i.pravatar.cc/40?img=7",
          image: "https://via.placeholder.com/400x200?text=React+Course",
          progress: 75,
          status: "Enrolled"
        },
        {
          id: 3,
          title: "C# for Beginners",
          instructor: "Alan Turing",
          role: "Software Architect",
          avatar: "https://i.pravatar.cc/40?img=9",
          image: "https://via.placeholder.com/400x200?text=CSharp+Course",
          progress: 45,
          status: "Enrolled"
        }
      ]

    };
  }
};
</script>
