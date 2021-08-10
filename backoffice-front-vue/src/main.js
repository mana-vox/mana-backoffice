import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import styles
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).mount("#app");
