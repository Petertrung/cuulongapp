<template>
<div>
  <div v-if="business && order">
    <v-card
  elevation="2" class="mb-5">
  <v-card-title>Order</v-card-title>
      <div class="subtitle-1 pa-4" v-if="order">
        Tracking Number: {{order._id}}
      </div>
      <div class="subtitle-1 pa-4" v-if="order">
        Created: {{business.invoice.invoiceDate}}
      </div>
      <div class="subtitle-1 pa-4" v-if="restaurant">
      Restaurant Name: {{restaurant.name}}
      </div>
      <div class="subtitle-1 pa-4" v-if="restaurant">
      Delivery Address: {{restaurant.address.addressLine1}}<br>
        {{restaurant.address.addressLine2}}
        {{restaurant.address.city}},
        {{restaurant.address.provinceCode}}
        {{restaurant.address.postalCode}}
      </div>
</v-card>
      <v-stepper
    v-model="e6"
    vertical
    class="mb-5"
  >
  <v-card-title>Status</v-card-title>
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
    >
      Received
      
    </v-stepper-step>

    <v-stepper-content step="1">
      <small>Order has been received and awaiting approval</small>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
     Confirmed
    </v-stepper-step>

    <v-stepper-content step="2">
      <small>Order has been approved, possible changes have been made to accurately reflect quantity </small>
      <!-- <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn> -->
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3"
    >
      Ready and on the way
    </v-stepper-step>

    <v-stepper-content step="3">
      <small>Order is good to go and should be on the way</small>
      <!-- <v-btn
        color="primary"
        @click="e6 = 4"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn> -->
    </v-stepper-content>

    <v-stepper-step step="4">
      Delivered
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card>

      </v-card>
    </v-stepper-content>
  </v-stepper>
  <v-card
  elevation="2" class="mb-5" v-if="e6 > 1">
  <v-card-title>Items</v-card-title>
  <v-simple-table fixed-header>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Quantity
          </th>
          <th class="text-left">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="select of business.invoice.items"
          :key="select.id"
        >
          <td>{{ select.product.name }}</td>
          <td>{{ select.quantity }}</td>
          <td>${{ select.total.value }}</td>
        </tr>
      </tbody>
      <div class="subtitle-1 pa-4">
            Total: {{business.invoice.amountDue.value}}
      </div>
    </template>
  </v-simple-table>

  </v-card>
  </div>
  <div v-if="errors">
        <v-card
  elevation="2" class="mb-5">
  <v-card-title>Order</v-card-title>
      <div class="subtitle-1 pa-4" v-if="order">
        Tracking Number: {{order._id}}
      </div>
      <div class="subtitle-1 pa-4" v-if="restaurant">
      Restaurant Name: {{restaurant.name}}
      </div>
      <div class="subtitle-1 pa-4" v-if="restaurant">
      Delivery Address: {{restaurant.address.addressLine1}}<br>
        {{restaurant.address.addressLine2}}
        {{restaurant.address.city}},
        {{restaurant.address.provinceCode}}
        {{restaurant.address.postalCode}}
      </div>
</v-card>
<v-card>
   <v-card-title>Status</v-card-title>
          <v-stepper
    v-model="e6"
    vertical
    class="mb-5"
  >
  <v-card-title>Status</v-card-title>
    <v-stepper-step
        :rules="[() => false]"
        step="1"
      >
        Rejected
      </v-stepper-step>

    <v-stepper-content step="1">
      <small>Order has been received and has been rejected</small>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
     Confirmed
    </v-stepper-step>

    <v-stepper-content step="2">
      <small>Order has been approved, possible changes have been made to accurately reflect quantity </small>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3"
    >
      Ready and on the way
    </v-stepper-step>

    <v-stepper-content step="3">
      <small>Order is good to go and should be on the way</small>
    </v-stepper-content>

    <v-stepper-step step="4">
      Delivered
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card>

      </v-card>
    </v-stepper-content>
  </v-stepper>
</v-card>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import { GET_BY_INVOICE } from "../router/querygql";

export default {
  name: "OrderPage",
  data() {
    return {
      e6: null,
      order: null,
      restaurant: null,
      business: null,
      errors: null
    };
  },
     async beforeCreate() {
    await axios
      .get("/api/order/" + this.$route.params.orderId)
      .then((response) => (this.order = response.data));
      await axios
      .get("/api/restbywave/" + this.order.restaurant_id)
      .then((response) => (this.restaurant = response.data));
  },
  apollo: {
    business: {
      query: GET_BY_INVOICE,
      variables() {
        return {
          invoiceId: this.$route.params.invoiceId,
        };
      },
      error(error) {
              console.log(error)
              this.errors = true
            },
    },
  },
  methods:{
    setStatus: function(){
      var statusWave;
      var statusDB;
      if(this.business.invoice.status){
        statusWave = this.business.invoice.status;
      }else{
        statusWave = null
      }
      if(this.order.status){
      statusDB = this.order.status;
      }else{
      statusDB = null;
      }
      if(statusWave == "DRAFT" && !statusDB){
        this.e6 = 1;
      }else if(statusWave == "SAVED" && !statusDB || statusWave == "OVERDUE"  && !statusDB){
        this.e6 = 2;
      }else if(statusDB){
        this.e6 = parseInt(statusDB);
      }
    }
  },
  updated(){
    this.setStatus();
    }
};
</script>
