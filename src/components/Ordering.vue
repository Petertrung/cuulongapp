<template>
  <div>
    <v-alert
  type="error"
  border="right"
  v-if="errors"
>Error - Please Try Again</v-alert>
      <v-alert
  border="right"
  color="green"
  type="success"
  v-if="success"
>Successfully Created </v-alert>
      <v-row justify="center">
    <v-dialog
      v-model="popup"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Pick a Restaurant
        </v-card-title>
        <v-card-text>
          <v-select
          :items="restaurants"
          label="Resturant"
          dense
          outlined
          placeholder="Resturant Name"
          item-text="name"
          item-value="restaurant_id"
          v-model="rest_id"
          :rules="[rules.required]"
        ></v-select>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="setRest"
          >
            Pick
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    <!--hi-->
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Beef </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Other Meats </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3"> Seafood </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">Veggies/Fruits </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">Others</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 6" step="6">Reciept</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-container fluid>
          <h3>Beef</h3>
          <v-list dense>
           <template v-for="products of beef(items)">
              <v-list-item v-bind:key="products.wave_id" class="ma-0 pa-0">

                <v-list-item-content class="ma-0 pa-0">
                  <v-checkbox
                  v-model="selected"
                  :label="products.name"
                  :value="products"
                  @click='products.toggle = !products.toggle,products.box = 1 '
                ></v-checkbox>
                <v-text-field
                  label="Box"
                  dense
                  v-if="products.toggle"
                  v-model="products.box"
                  placeholder="0"
                  outlined
                ></v-text-field>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-container>

        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

      </v-stepper-content>

      <v-stepper-content step="2">
        <v-container fluid>
          <h3>Other Meats</h3>
          <v-list dense>
           <template v-for="products of otherMeats(items)">
              <v-list-item v-bind:key="products.wave_id" class="ma-0 pa-0">

                <v-list-item-content class="ma-0 pa-0">
                  <v-checkbox
                  v-model="selected"
                  :label="products.name"
                  :value="products"
                  @click='products.toggle = !products.toggle,products.box = 1 '
                ></v-checkbox>
                <v-text-field
                  label="Box"
                  dense
                  v-if="products.toggle"
                  v-model="products.box"
                  placeholder="0"
                  outlined
                ></v-text-field>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-container>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text @click="e1 = 1"> Back </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-container fluid>
          <h3>Seafood</h3>
          <v-list dense>
           <template v-for="products of seafood(items)">
              <v-list-item v-bind:key="products.wave_id" class="ma-0 pa-0">

                <v-list-item-content class="ma-0 pa-0">
                  <v-checkbox
                  v-model="selected"
                  :label="products.name"
                  :value="products"
                  @click='products.toggle = !products.toggle,products.box = 1 '
                ></v-checkbox>
                <v-text-field
                  label="Box"
                  dense
                  v-if="products.toggle"
                  v-model="products.box"
                  placeholder="0"
                  outlined
                ></v-text-field>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-container>

        <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>

        <v-btn text @click="e1 = 2"> Back </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-container fluid>
          <h3>Veggies/Fruits</h3>
          <v-list dense>
           <template v-for="products of veg(items)">
              <v-list-item v-bind:key="products.wave_id" class="ma-0 pa-0">

                <v-list-item-content class="ma-0 pa-0">
                  <v-checkbox
                  v-model="selected"
                  :label="products.name"
                  :value="products"
                  @click='products.toggle = !products.toggle,products.box = 1 '
                ></v-checkbox>
                <v-text-field
                  label="Box"
                  dense
                  v-if="products.toggle"
                  v-model="products.box"
                  placeholder="0"
                  outlined
                ></v-text-field>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-container>

        <v-btn color="primary" @click="e1 = 5"> Continue </v-btn>

        <v-btn text @click="e1 = 3"> Back </v-btn>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-container fluid>
          <h3>Others</h3>
          <v-list dense>
           <template v-for="products of other(items)">
              <v-list-item v-bind:key="products.wave_id" class="ma-0 pa-0">

                <v-list-item-content class="ma-0 pa-0">
                  <v-checkbox
                  v-model="selected"
                  :label="products.name"
                  :value="products"
                  @click='products.toggle = !products.toggle,products.box = 1 '
                ></v-checkbox>
                <v-text-field
                  label="Box"
                  dense
                  v-if="products.toggle"
                  v-model="products.box"
                  placeholder="0"
                  outlined
                ></v-text-field>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-container>

        <v-btn color="primary" @click="e1 = 6"> Continue </v-btn>

        <v-btn text @click="e1 = 4"> Back </v-btn>
      </v-stepper-content>

      <v-stepper-content step="6">
        <v-container fluid>
          <h3>Order</h3>
              <v-simple-table fixed-header>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Box
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="select of selected"
                      :key="select.name"
                    >
                      <td>{{ select.name }}</td>
                      <td v-if="select.box">{{ select.box }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
        </v-container>

        <v-btn block outlined color="success" @click="submit"> Submit </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </div>
</template>

<script>
import axios from "axios";
import { CREATE_INVOICE } from "../router/mutations"

export default {
  name: "Ordering",
  data() {
    return {
      selected: [],
      e1: 1,
      items: [],
      rest_id: null,
      popup: null,
      products: [],
      rules: {
          required: value => !!value || 'Required.',
      }, 
      restaurants: null,
      errors: null,
      success: null
    };
  },
  beforeMount() {
    axios
      .get("/api/items")
      .then((response) => (this.items = response.data));

      if(this.$route.params.rest_id){
        this.rest_id = this.$route.params.rest_id;
        this.popup = false;
      }else{
      this.popup = true;
      axios
      .get("/api/restaurants/")
      .then((response) => (this.restaurants = response.data));
      }
  },
  methods: {
      beef: function (items) {
        return items.filter(items => items.type == 'beef')
      },
       otherMeats: function (items) {
        return items.filter(items => items.type == 'chicken' || items.type == 'pork')
      },
       seafood: function (items) {
        return items.filter(items => items.type == 'seafood')
      },
       veg: function (items) {
        return items.filter(items => items.type == 'veggie' || items.type == 'fruit')
      },
       other: function (items) {
        return items.filter(items => items.type == 'other')
      },
      setRest: function () {
        if(this.rest_id){
          this.popup = false
        }else{
          alert("Please Select Restaurant")
        }
      },
      listProd: function (){
        for(var i = 0; i < this.selected.length; i++ ){
        this.products.push({
          "productId": this.selected[i].wave_id,
          "quantity": this.selected[i].box
        })
        }
      },
      submit: async function (){
        this.listProd()
      if(this.products.length != 0){
        const invoiceCreated = await this.$apollo.mutate({
        mutation: CREATE_INVOICE,
        variables: {
              "input": {
                "businessId": "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUx",
                "customerId": this.rest_id,
                "items": this.products
              }
            },
            error(error) {
              console.log('errors', error)
              this.errors = true
            }
      });
      if(invoiceCreated.data.invoiceCreate.didSucceed){
        var userId = this.$userId;
        axios.post('/api/orders', {
        invoice_id: invoiceCreated.data.invoiceCreate.invoice.id,
        restaurant_id: invoiceCreated.data.invoiceCreate.invoice.customer.id,
        user_id: userId
      }).then((response) => {
         this.response = response;
         this.success = true
         setTimeout(() => this.$router.push({ path: "/" }), 2000);
          })
      }
      }else{
        this.errors = true;
        this.e1 = 1;
      }
      }
    }
};
</script>