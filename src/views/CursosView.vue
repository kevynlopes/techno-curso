<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="grid grid-cols-2 max-sm:grid-cols-1">
        <div>
          <h1 class="text-4xl">{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <ul>
          <li v-for="curso in api.cursos" :key="curso" class="mb-10">
            <router-link :to="{ name: 'curso', params: { curso: curso.id } }">
              <h2 class="text-2xl font-semibold">
                {{ curso.nome }} - {{ curso.totalAulas }} aulas |
                {{ curso.horas }} horas
              </h2>
            </router-link>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData";
export default {
  name: "cursos",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style></style>
