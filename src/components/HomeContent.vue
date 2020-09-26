<template>
  <div>
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab>Order</v-tab>
      <v-tab>List</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <Order />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <List />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import List from "../components/List";
import Order from "../components/Order";

export default {
  name: "HomeContent",
  components: {
    List,
    Order,
  },
  data() {
    return {
      tab: null,
      items: ["Order", "List"],
    };
  },
};
</script>
