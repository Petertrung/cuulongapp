<template>
  <div class="container w-100">
    <div class="row align-items-center profile-header">
      <div class="col-md-2 mb-3">
      </div>
      <div class="col-md text-center text-md-left">
        <h3>{{ $auth.user.name }}</h3>
        <p class="lead text-muted">{{ $auth.user.email }}</p>
      </div>
    </div>

    <!-- <div class="row">
      <pre v-highlightjs="JSON.stringify($auth.user, null, 2)" class="rounded w-100"><code class="json"></code></pre>
    </div> -->
     <v-btn block class="ma-2" outlined color="danger" @click.prevent="logout">Log out</v-btn>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    }
  }
};
</script>
