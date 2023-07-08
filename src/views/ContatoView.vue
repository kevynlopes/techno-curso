<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="flex items-center flex-col justify-center gap-6">
        <h1 class="text-4xl">Contato</h1>
        <p>{{ api.descricao }}</p>
        <div
          class="flex justify-center items-center flex-col gap-4 bg-[#4b8] w-72 h-52 rounded-lg text-white shadow-lg"
        >
          <p class="font-bold text-xl">Contatos</p>
          <p><b>Telefone</b>: {{ api.contato.telefone }}</p>
          <p><b>Email</b>: {{ api.contato.email }}</p>
          <p><b>Endereço</b>: {{ api.contato.endereco }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData";
export default {
  name: "Contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
};
</script>

<style></style>
