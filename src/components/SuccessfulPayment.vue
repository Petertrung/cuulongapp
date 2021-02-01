<template>
<div>
    <v-alert
  border="right"
  color="green"
  type="success"
  class="my-16"
>Payment Successful </v-alert>
<h3 class="my-16 text-center">Redirecting to Home</h3>
<v-progress-linear
      color="light-blue"
      height="10"
      buffer-value="0"
      stream
    ></v-progress-linear>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "SuccussPayment",
  methods:{
    payorder: function(){
      axios.post('/stripes/success', {
        orderId: this.$route.params.id
      }).then((response) => {
         this.response = response;
         setTimeout(() => this.$router.push({ path: "/" }), 2000);
        });
    }
  },
  mounted(){
    this.payorder()
  }
}
</script>