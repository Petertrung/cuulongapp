<template>
  <div>
    <h2 class="text-center">{{restaurants.name}}</h2>
    <v-card class="mx-auto mb-4">{{restaurants}}</v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "List",
  data() {
    return {
      restaurants: null,
    };
  },
  created() {
    axios
      .get("/api/restaurants/" + this.$route.params.userId)
      .then((response) => (this.restaurants = response.data));
  },
};
</script>
