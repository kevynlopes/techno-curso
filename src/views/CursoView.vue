<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="flex flex-col gap-4">
        <div>
          <h1 class="text-4xl">{{ api.nome }}</h1>
          <p>{{ api.descricao }}</p>
          <h2 class="text-2xl">Aulas</h2>
          <ul class="flex flex-col gap-5">
            <li
              v-for="aula in api.aulas"
              :key="aula.id"
              class="w-52 p-4 bg-white shadow"
            >
              {{ aula.id }}
              {{ aula.nome }}
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData";
export default {
  name: "CursoView",
  props: ["curso"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.curso}`);
  },
};
</script>

<style></style>
