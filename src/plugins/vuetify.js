import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    light: true,
    themes: {
      light: {
        primary: "#4DB6AC",
        secondary: "#b0bec5",
        accent: "#B2DFDB",
        error: "#b71c1c"
      }
    }
  }
});
