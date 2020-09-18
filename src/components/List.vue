<template>
  <div>
    <v-card class="mx-auto mb-4" v-for="rest of restaurants" v-bind:key="rest.name">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">{{rest.name}}</v-list-item-title>
          <v-list-item-subtitle>{{rest.close_location}}</v-list-item-subtitle>
        </v-list-item-content>
        <p>Open Orders:</p>
      </v-list-item>

      <v-card-actions>
        <v-btn text color="deep-purple accent-4">Edit</v-btn>
        <v-btn text color="deep-purple accent-4">Order</v-btn>
      </v-card-actions>
    </v-card>
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
