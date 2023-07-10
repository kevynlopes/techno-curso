<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="flex flex-col gap-6">
        <div class="grid sm:grid-cols-2 gap-10">
          <div>
            <h1 class="text-4xl font-bold">{{ api.nome }}</h1>
            <p class="w-[600px]">{{ api.descricao }}</p>
            <h2 class="text-2xl font-semibold p-6">Aulas</h2>
            <ul class="flex flex-col gap-5">
              <li
                v-for="aula in api.aulas"
                :key="aula.id"
                class="'aulas' w-52 p-4 bg-white shadow"
              >
                <router-link
                  :to="{ name: 'aula', params: { aula: aula.id } }"
                  >{{ aula.nome }}</router-link
                >
              </li>
            </ul>
          </div>
          <div>
            <router-view></router-view>
          </div>
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
