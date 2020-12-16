<template>
  <v-form>
    <v-container>
    <h4 color="primary">Info</h4>
  <v-text-field
    label="Resturant Name"
    placeholder="Resturant"
    outlined
    v-model="buzname"
  ></v-text-field>
  <v-text-field
    label="First Name"
    placeholder="First"
    outlined
    v-model="firstname"
    :rules="[rules.required]"
  ></v-text-field>
  <v-text-field
    label="Last Name"
    placeholder="Last"
    outlined
    v-model="lastname"
  ></v-text-field>
   <v-select
          :items="types"
          label="Type"
          dense
          outlined
          placeholder="Placeholder"
          v-model="type"
          :rules="[rules.required]"
        ></v-select>
  <h4 color="primary">Address</h4>
  <v-text-field
    label="Address Line 1"
    placeholder="Address 1"
    outlined
    v-model="address1"
  ></v-text-field>
  <v-text-field
    label="Address Line 2"
    placeholder="Address 2"
    outlined
    v-model="address2"
  ></v-text-field>
  <v-text-field
    label="City"
    placeholder="City"
    outlined
    v-model="city"
  ></v-text-field>
  <v-text-field
    label="State"
    placeholder="State"
    outlined
    v-model="provinceCode"
    maxlength = "2"
  ></v-text-field>
  <v-text-field
    label="Zip"
    placeholder="Zip"
    outlined
    v-model="postalCode"
  ></v-text-field>
    <v-btn block outlined color="success" v-on:click="submit">Save</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import { CREATE_CUSTOMER } from "../router/mutations";

export default {
  name: "AddRest",
  data() {
    return {
      buzname: null,
      firstname: null,
      lastname: null,
      email: null,
      address1: null,
      address2: null,
      city: null,
      postalCode: null,
      provinceCode: null,
      countryCode: "US",
      type: null,
      types: [
        { text: 'Viet'},
        { text: 'Chinese'},
        { text: 'Korean'},
        { text: 'ThaiS'},
      ],
       rules: {
          required: value => !!value || 'Required.',
      }
    };
  },
  methods: {
    submit: async function() {
       const restCreated = await this.$apollo.mutate({
        mutation: CREATE_CUSTOMER,
        variables: {
          input: {
            businessId:
              "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUx",
            name: this.buzname,
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            address: {
              addressLine1: this.address1,
              addressLine2: this.address2,
              city: this.city,
              postalCode: this.postalCode,
              provinceCode: "US-" + this.provinceCode,
              countryCode: "US"
            },
            currency: "USD"
          }
        }
      });
      if(restCreated.data.customerCreate.didSucceed){
        var userId = localStorage.userId;
        var address = {
              addressLine1: this.address1,
              addressLine2: this.address2,
              city: this.city,
              postalCode: this.postalCode,
              provinceCode: this.provinceCode,
              countryCode: "US"
            };
         axios.post('/api/restaurants', {
        name: this.buzname,
        restaurant_id: restCreated.data.customerCreate.customer.id,
        admin: userId,
        status: "1",
        cuisine:this.type,
        address: address
      }).then((response) => {
         this.response = response;
        console.log(this.response.data._id)
         setTimeout(() => this.$router.push({ path: "/" }), 2000);
          })
       }
    }
  }
};
</script>
