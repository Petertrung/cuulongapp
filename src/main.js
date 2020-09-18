import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import fab from "vue-fab";
import "bootstrap/dist/css/bootstrap.min.css";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import { Auth0Plugin } from "./auth";
import HighlightJs from "./directives/highlight";
import { domain, clientId } from "../auth_config.json";

Vue.config.productionTip = false;

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.directive("highlightjs", HighlightJs);
Vue.component("fab", fab);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
