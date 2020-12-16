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
  v-if="response"
>Successfully Added </v-alert>

      <h4 color="primary">Item</h4>
  <v-text-field
    label="Name"
    placeholder="Name"
    outlined
    v-model="name"
    :rules="[rules.required]"
  ></v-text-field>
  <v-text-field
    label="Wave Id"
    placeholder="ID"
    outlined
    v-model="wave"
    :rules="[rules.required]"
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
  <v-btn block outlined color="success" v-on:click="submit">Submit</v-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Item",
  data() {
    return {
      errors: null,
      response: null,
      name: null,
      wave: null,
      type: null,
      rules: {
          required: value => !!value || 'Required.',
      },
      types: [
        { text: 'Beef', value: 'beef' },
        { text: 'Chicken', value: 'chicken' },
        { text: 'Pork' , value: 'pork'},
        { text: 'Seafood', value: 'seafood' },
        { text: 'Veggie/Fruit', value: 'veggie' },
        { text: 'Other', value: 'other' },
      ]
    };
  },
  methods:{
    clear: function(){
      this.name = null
      this.wave = null
      this.type = null
    } ,
    submit: function (){
      if(this.name && this.wave && this.type){
      axios.post('/api/items', {
        name: this.name,
        wave_id: this.wave,
        type: this.type
      }).then((response) => {
         this.response = response;
         this.clear();
          }, (error) => {
          this.errors = error;
          this.clear();
        });
      }else{
        this.errors = true;
      }
    }
  }
};
</script>