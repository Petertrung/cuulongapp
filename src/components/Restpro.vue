<template>
<div>
      <v-alert
  type="error"
  border="right"
  v-if="error"
>Error - Please Try Again</v-alert>
      <v-alert
  border="right"
  color="green"
  type="success"
  v-if="success"
>Successfully Saved </v-alert>
    <v-card
    class="mx-auto my-12"
    v-if="restaurant"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title>{{restaurant.name}}</v-card-title>
    

    <div v-if="edit == true">
      <v-text-field
    label="Address Line 1"
    placeholder="Address 1"
    outlined
    v-model="editrest.address.addressLine1"
  ></v-text-field>
  <v-text-field
    label="Address Line 2"
    placeholder="Address 2"
    outlined
    v-model="editrest.address.addressLine2"
  ></v-text-field>
  <v-text-field
    label="City"
    placeholder="City"
    outlined
    v-model="editrest.address.city"
  ></v-text-field>
  <v-text-field
    label="State"
    placeholder="State"
    outlined
    v-model="editrest.address.provinceCode"
    maxlength = "2"
  ></v-text-field>
  <v-text-field
    label="Zip"
    placeholder="Zip"
    outlined
    v-model="editrest.address.postalCode"
  ></v-text-field>
    </div>
        <v-card-text v-else>


    <v-chip
      class="mr-2"
      color="primary"
      small
    >
      {{restaurant.cuisine}}
    </v-chip>

    <v-chip
      class="mr-2"
      color="secondary"
      small
    >
      Secondary
    </v-chip>
    <v-chip
      class="mr-2"
      color="success"
      text-color="white"
      v-if="restaurant.status == '1'"
      small
    >
      Active
    </v-chip>
    <v-chip
      class="mr-2"
      color="error"
      text-color="white"
      v-else
      small
    >
      Deactivated
    </v-chip>

      <div class="mt-2">
        {{restaurant.address.addressLine1}}<br>
        {{restaurant.address.addressLine2}}
        {{restaurant.address.city}},
        {{restaurant.address.provinceCode}}
        {{restaurant.address.postalCode}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        text
        v-on:click="modes"
        v-if="edit == false"
      >
        Edit
      </v-btn>
      <v-btn
        color="error"
        text
        v-on:click="modes"
        v-if="edit == true"
      >
        Cancel
      </v-btn>
      <v-btn
        color="success"
        text
        v-on:click="editRest"
        v-if="edit == true"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card
    class="mx-auto my-12"
    v-if="restaurant"
  >
  <v-card-title>Orders</v-card-title>

    <v-card-text>
     <!-- {{orders}} -->
         <v-list subheader>
      <v-subheader>Tracking Number</v-subheader>

      <v-list-item
        v-for="order in orders"
        :key="order._id"
      >

        <v-list-item-content>
          <router-link :to="{ name: 'OrderProfile', params: { orderId: order._id, invoiceId: order.invoice_id } }">
          <v-list-item-title v-text="order._id"></v-list-item-title>
          </router-link>
        </v-list-item-content>

        <!-- <v-list-item-icon>
          <v-icon>
            mdi-message-outline
          </v-icon>
        </v-list-item-icon> -->
      </v-list-item>
      <v-subheader v-if="orders.length < 1">No Orders Yet</v-subheader>
    </v-list>
    </v-card-text>

    <v-card-actions>
      <router-link :to="{ name: 'Ordering', params: { rest_id: restaurant.restaurant_id } }">
        <v-btn text color="primary">Order</v-btn>
        </router-link>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
import axios from "axios";
import { EDIT_CUSTOMER } from "../router/mutations";

export default {
  name: "Restpro",
  data() {
    return {
      business: null,
      restaurant: null,
      orders: null,
      editrest: null,
      edit: false,
      success: false,
      error: false,
       rules: {
          required: value => !!value || 'Required.',
      }
    };
  },
  methods:{
    modes: function (){
      this.edit = !this.edit
    },
    editRest: async function() {
       const restEdit = await this.$apollo.mutate({
        mutation: EDIT_CUSTOMER,
        variables: {
          input: {
              id: this.editrest.restaurant_id,
              address:{ 
                addressLine1: this.editrest.address.addressLine1,
                addressLine2: this.editrest.address.addressLine2,
                city: this.editrest.address.city,
                provinceCode: "US-" + this.editrest.address.provinceCode,
                postalCode: this.editrest.address.postalCode
              }
          }
        }
      });
      if(restEdit.data.customerPatch.didSucceed){
        var address = {
              addressLine1:this.editrest.address.addressLine1,
              addressLine2: this.editrest.address.addressLine2,
              city: this.editrest.address.city,
              postalCode:this.editrest.address.postalCode,
              provinceCode: this.editrest.address.provinceCode,
              countryCode: "US"
            };
        axios.patch('/api/restaurants/'+ this.restaurant._id, {
        address: address
      }).then((response) => {
         this.response = response;
        this.edit = false;
        setTimeout(() => this.success = true, 2000);
          })
      }
    }
  },
   async beforeCreate() {
    await axios
      .get("/api/restaurants/" + this.$route.params.userId)
      .then((response) => (this.restaurant = response.data,this.editrest = response.data ))

        await axios
      .get("/api/orderbyrest/" + this.restaurant.restaurant_id)
      .then((response) => (this.orders = response.data));
  },
  
};
</script>
