<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h2 class="font-bold text-2xl">{{ api.nome }}</h2>
        <div class="relative pb-[56.25%]">
          <iframe
            class="absolute top-0 left-0 w-[70%] h-[100%]"
            :src="`https://www.youtube.com/embed/${api.youtube}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData";
export default {
  name: "aula",
  mixins: [fetchData],
  props: ["aula"],
  created() {
    this.fetchData(`/aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`/aula/${to.params.aula}`);
    next();
  },
};
</script>

<style></style>
