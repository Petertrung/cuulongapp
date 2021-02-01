<template>
  <stripe-checkout
    ref="checkoutRef"
    :pk="publishableKey"
  >
    <template slot="checkout-button">
      <v-btn block outlined color="success" @click="checkout"> Pay </v-btn>
    </template>
  </stripe-checkout>
</template>

<script>
import { StripeCheckout } from 'vue-stripe-checkout';
export default {
  name: "Checkouts",
  components: {
    StripeCheckout
  },
  data: () => ({
    loading: false,
    publishableKey: "pk_test_51HzWZ2AzwLBskmWxGTbPVfgqBflhaSprfsdVY3vIlwmO3Ck1sredwXhR7I1oyzg7hNbrbnmMjNWjMp4nFgdXaOjU00iDKmtL4Y",
     sessionId: 'session-id',
  }),
  methods: {
    checkout () {
      this.$refs.checkoutRef.redirectToCheckout();
    }
  }
}
</script>
