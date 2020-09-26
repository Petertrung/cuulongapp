<template>
  <div>
      <div v-if="business">
           <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list shaped>
      <v-subheader>Resturant</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="rest of business.customers.edges" v-bind:key="rest.node.id"
        >
          <v-list-item-icon>
            {{rest.node.unitPrice}}
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="rest.node.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
      </div>
      <div v-if="!business">Nothing</div>
  </div>
</template>

<script>
import { GET_Resturant } from "../router/graphql";

export default {
  name: "Restpro",
  data() {
    return {
      business: null
    };
  },
  apollo: {
    business: {
      query: GET_Resturant
    }
  }
};
</script>
