import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import PageLoading from "./components/PageLoading.vue";

Vue.component("PageLoading", PageLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
