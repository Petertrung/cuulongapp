<template>
  <div>
    <v-card
      class="mx-auto mb-4"
      elevation="2"
      v-for="rest of restaurants"
      v-bind:key="rest.name"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ rest.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <router-link :to="{ name: 'restpro', params: { userId: rest._id } }">
          <v-btn text color="secondary">View</v-btn>
        </router-link>
        <router-link :to="{ name: 'Ordering', params: { rest_id: rest.restaurant_id } }">
        <v-btn text color="accent">Order</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
    <router-link :to="{ name: 'addrest' }"
      ><v-btn block outlined color="primary">Add Restaurant</v-btn></router-link
    >
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
      .get("/api/restaurants/")
      .then((response) => (this.restaurants = response.data));
  },
};
</script>
