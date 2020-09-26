import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import fab from "vue-fab";
import "bootstrap/dist/css/bootstrap.min.css";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import { Auth0Plugin } from "./auth";
import HighlightJs from "./directives/highlight";
import { domain, clientId } from "../auth_config.json";
import Vuex from "vuex";
import "es6-promise/auto";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

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
Vue.use(Vuex);
Vue.use(VueApollo);

const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem("apollo-token");
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};
// Create an http link:
const link = new HttpLink({
  uri: "https://gql.waveapps.com/graphql/public",
  fetch,
  headers: getHeaders()
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

new Vue({
  router,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
