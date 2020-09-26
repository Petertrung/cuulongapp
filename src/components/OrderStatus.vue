<template>
  <v-stepper v-model="e13" vertical>
    <v-stepper-step step="1">Order Received</v-stepper-step>

    <v-stepper-content step="1">
      <v-btn color="primary" @click="e13 = 2">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="2">Order Confirmed</v-stepper-step>

    <v-stepper-content step="2">
      <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="3">
      Ordered Shipped
      <small>Arriving Soon</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-btn color="primary" @click="e13 = 4">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">Delivered</v-stepper-step>

    <v-stepper-content step="4">
      <!-- <v-btn color="primary" @click="e13 = 1">Continue</v-btn>
      <v-btn text>Cancel</v-btn>-->
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      e13: 1,
    };
  },
};
</script>