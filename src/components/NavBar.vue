<template>
  <div class="is-primary">
    <router-link to="/" class="nav-link">
      <v-icon medium>home</v-icon>
    </router-link>
    <!-- <router-link to="/profile" class="is-floating is-large"><b-icon icon="cog" size="is-small" type="is-info"></b-icon></router-link> -->
    <fab
      :actions="fabActions"
      :bg-color="bgColor"
      :main-icon="mainicon"
      @profile="profile"
      @shop="cart"
      @alertMe="test"
    ></fab>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgColor: "#0097a7",
      position: "top-right",
      mainicon: "settings",
      fabActions: [
        {
          name: "profile",
          icon: "perm_identity",
          color: "#006064"
        },
        {
          name: "shop",
          icon: "shopping_cart",
          color: "#00695c"
        },
        {
          name: "alertMe",
          icon: "assignment",
          color: "#000"
        }
      ]
    };
  },
  methods: {
    profile() {
      window.location = "/profile";
    },
    cart() {
      alert("Cart");
    },
    test() {
      alert("Home");
    }
  }
};
</script>
