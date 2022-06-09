import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import "../src/assets/css/styles.css";
import "../src/assets/css/_settings.variables.scss";
createApp(App).use(router).mount("#app");
