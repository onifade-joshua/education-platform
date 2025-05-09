<template>
  <div>
    <!-- <ScreenLoader /> -->
    <template v-if="isAuthRoute">
      <router-view />
    </template>
    <template v-else>
      <AppNavbar />
      <router-view />
    </template>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

import AppNavbar from "./components/AppNavbar.vue";
// import ScreenLoader from "./components/custom/ScreenLoader.vue";

export default {
  components: {
    AppNavbar,
    // ScreenLoader
  },
  setup() {
    const route = useRoute();
    const isAuthRoute = computed(() => route.path === "/login" || route.path === "/signup");
    return { isAuthRoute };
  }
};
</script>
