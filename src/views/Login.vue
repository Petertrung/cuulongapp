<template>
  <div class="container w-100">
    <div class="text-center">
      <h3 class="primary--text">Cuu Long</h3>
      <h4 class="secondary--text">Meats</h4>
    </div>

    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab>Login</v-tab>
      <v-tab>Sign Up</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-col cols="12" sm="6" md="3">
              <v-text-field label="Email" placeholder="Email" outlined></v-text-field>
              <v-text-field type="password" label="Password" placeholder="Password" outlined></v-text-field>
              <v-btn block outlined color="primary">Login</v-btn>
            </v-col>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-text-field label="Email" placeholder="Email" outlined></v-text-field>
            <v-text-field label="Name" placeholder="Name" outlined></v-text-field>
            <v-text-field label="Password" placeholder="Password" outlined></v-text-field>
            <v-text-field label="Password Re-enter" placeholder="Password" outlined></v-text-field>
            <v-btn block outlined color="primary">Sign-up</v-btn>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
  },
  data() {
    return {
      tab: null,
      items: ["Login", "Sign Up"],
    };
  },
};
</script>