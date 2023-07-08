<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<template>
  <div id="app">
    <TheHeader />
    <router-view class="sm:px-40"></router-view>
  </div>
</template>

<style>
.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}
</style>
