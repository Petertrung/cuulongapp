<template>
  <div>
    <checkouts />
    <router-link :to="{ name: 'payment' }">
        <v-btn text color="primary">Success</v-btn>
        </router-link>
  </div>
</template>

<script> 
import Checkouts from "./Checkout";
export default {
    name: "Test",
    components: {
    Checkouts
  }
}

</script>
