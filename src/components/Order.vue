<template>
  <div>
    <router-link :to="{ name: 'Ordering' }"
      ><v-btn block outlined color="primary">Order</v-btn></router-link
    >
    <br>
    <div  v-for="order of orders"
      v-bind:key="order._id">
       <router-link :to="{ name: 'OrderProfile', params: { orderId: order._id, invoiceId: order.invoice_id } }" >
         <span class="text-justify">{{order._id}}</span>
          </router-link>
          <v-divider></v-divider>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Order",
  data() {
    return {
      e13: 1,
      orders: null,
    };
  },
     async beforeCreate() {
    await axios
      .get("/api/orders/" + localStorage.userId)
      .then((response) => (this.orders = response.data));
  },
};
</script>
