<template>
  <header>
    <nav class="flex justify-between bg-[#234] p-6 sm:px-40 text-xl mb-12">
      <div>
        <router-link class="font-semibold text-white" to="/"
          >Techno</router-link
        >
      </div>
      <ul class="flex gap-12 font-semibold text-white">
        <li><router-link to="/cursos">Cursos</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style>
.router-link-active {
  color: #4b8;
}
</style>
