<template>
  <v-app light class="d-flex flex-column h-100">
    <nav-bar v-if="$auth.isAuthenticated" />
    <div class="container flex-grow-1 w-100">
      <error />
      <div class="mt-5">
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script>
localStorage.setItem("apollo-token", "mHad0aakL8WVyCOZdlTwxs9RLF6nZb");
import NavBar from "./components/NavBar";
import Error from "./components/Error";

export default {
  components: {
    NavBar,
    Error
  }
};
</script>
