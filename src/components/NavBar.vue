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
      bgColor: "#4DB6AC",
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
          color: "#b0bec5"
        }
      ]
    };
  },
  methods: {
    profile() {
      this.$router.push({ path: "/profile" });
    },
    cart() {
      this.$router.push({ name: "Ordering" });
    },
    test() {
      this.$router.push({ name: "test" });
    }
  }
};
</script>
