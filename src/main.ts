import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "../src/App.vue";
import Router from "../src/router";
import "../src/assets/css/style.css";

const pinia = createPinia();
const app = createApp(App);

// make v-alphaNumeric usable in all components
app.directive("alphaNumeric", (el) => {
  el.addEventListener("input", () => {
    return el.validity?.valid || (el.value = "");
  });

  el.addEventListener("keypress", (evt: any) => {
    evt = evt || window.event;
    const charCode = evt.which ? evt.which : evt.keyCode;
    const charStr = String.fromCharCode(charCode);
    if (/[a-z0-9]/i.test(charStr) || charCode === 32) return true;
    else evt.preventDefault();
  });
});

app.use(pinia);
app.use(Router);
app.mount("#app");
