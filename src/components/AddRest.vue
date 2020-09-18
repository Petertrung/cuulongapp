<template>
  <div>
    <v-card class="mx-auto mb-4"></v-card>
    <v-btn block class="ma-2" outlined color="primary">Add Restaurant</v-btn>
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
      .get("http://localhost:3000/api/restaurants/")
      .then((response) => (this.restaurants = response.data));
  },
};
</script>
