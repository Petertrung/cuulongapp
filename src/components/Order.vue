<template>
  <v-stepper v-model="e13" vertical>
    <v-stepper-step step="1" complete>
      Name of step 1
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-btn color="primary" @click="e13 = 2">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="2" complete>Name of step 2</v-stepper-step>

    <v-stepper-content step="2">
      <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :rules="[() => false]" step="3">
      Ad templates
      <small>Alert message</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-btn color="primary" @click="e13 = 4">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>

    <v-stepper-content step="4">
      <v-btn color="primary" @click="e13 = 1">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      e13: 1
    };
  }
};
</script>
