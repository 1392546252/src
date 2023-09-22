import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import naive from "naive-ui/es/preset";
import { router } from "./common/router";
import { createPinia } from "pinia";
import axios from "axios";

axios.defaults.baseURL = "http://47.115.221.26:8080";

const app = createApp(App);

app.provide("axios", axios);

app.use(naive);
app.use(createPinia());
app.use(router);
app.mount("#app");
