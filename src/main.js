import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
createApp(App).use(router).mount("#app");
axios.defaults.baseURL = "https://ruby-inquisitive-pike.cyclic.app/";
