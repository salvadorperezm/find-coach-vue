<template>
  <the-header></the-header>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { mapActions } from "vuex";

import TheHeader from "./components/layout/TheHeader.vue"

export default {
  created() {
    this.fetchCoaches()
  },
  components: {
    TheHeader
  },
  methods: {
    ...mapActions(['fetchCoaches'])
  }
}
</script>

<style scoped>
.page-enter-active {
  animation: page 0.5s ease;
}



@keyframes page {
  from {
    opacity: 1;
    transform: translateY(0px);

  }

  to {
    opacity: 0.3;
    transform: translateY(30px);

  }
}
</style>
