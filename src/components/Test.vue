<template>
  <div>
      <div v-if="business">
           <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list shaped>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="products of business.products.edges" v-bind:key="products.node.id"
        >
          <v-list-item-icon>
            {{products.node.unitPrice}}
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="products.node.name"></v-list-item-title>
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
import { GET_MY_PRODUCTS } from "../router/graphql";

export default {
  name: "Test",
  data() {
    return {
      business: null
    };
  },
  apollo: {
    business: {
      query: GET_MY_PRODUCTS,
      variables() {
        return {
          businessId:
            "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUx"
        };
      }
    }
  }
};
</script>
