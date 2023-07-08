<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div class="grid gap-96 grid-cols-2 max-sm:block">
        <div v-if="api" class="flex flex-col gap-6">
          <h1 class="text-4xl font-bold">Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <div class="mb-10">
            <router-link
              class="bg-[#4b8] text-white font-bold shadow-lg p-4 rounded-lg"
              to="/cursos"
              >Cursos</router-link
            >
          </div>
          <div>
            <h2 class="text-2xl font-semibold">Avaliações</h2>
            <ul class="flex flex-col gap-4">
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                {{ avaliacao.nome }}
                {{ avaliacao.descricao }}
              </li>
            </ul>
          </div>
        </div>
        <img v-if="api" width="500" src="../assets/aprender.png" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData";
export default {
  name: "home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
};
</script>
