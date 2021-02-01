import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import fab from "vue-fab";
import "bootstrap/dist/css/bootstrap.min.css";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import { Auth0Plugin } from "./auth";
import HighlightJs from "./directives/highlight";
import { domain, clientId } from "../auth_config.json";
import store from "./store/index";
import "es6-promise/auto";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import "../src/common-functions"
import { Plugins } from '@capacitor/core'
const { SplashScreen } = Plugins

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
//https://realm.mongodb.com/api/client/v2.0/app/cuulong-owaug/graphql
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

console.log(Vue.prototype.$auth._data.user.sub)
if(Vue.prototype.$auth.user.sub){
  var sub = Vue.prototype.$auth.user.sub
  var userId = sub.replace("auth0|","")
  // localStorage.setItem("userId", userId);
  Vue.prototype.$userId = userId;
  console.log(this.$auth.user.sub)
 }

new Vue({
  router,
  vuetify,
  store,
  apolloProvider,
  render: h => h(App),
   mounted() {
   SplashScreen.hide()
   }
}).$mount("#app");
