<template>
  <div>
    <!-- <div v-if="business">
      <v-card class="mx-auto" max-width="300" tile>
        <v-list shaped>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="products of business.products.edges"
              v-bind:key="products.node.id"
              :id="products.node.id"
            >
              <v-list-item-icon>
                ${{ products.node.unitPrice }}
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="products.node.name"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
    <div v-if="!business">Nothing</div> -->
    <GooglePayButton
  id="google-pay-btn"
  @payed="processPayment($event)"
/>
  </div>
</template>

<script>
import { GooglePayButton } from 'vue-google-pay'

export default {
  name: "Test",
  data() {
    return {
      environment: 'TEST',
      buttonColor: 'white',
      allowedCardNetworks: [
         'AMEX',
         'DISCOVER',
         'INTERAC',
         'JCB',
         'MASTERCARD',
         'VISA'
      ],
      allowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
      merchantInfo: {
         merchantName: 'Example Merchant',
         merchantId: '0123456789'
      },
      transactionInfo: {
         totalPriceStatus: 'FINAL',
         totalPrice: '1.00',
         currencyCode: 'USD',
         countryCode: 'US'
      },
      tokenizationSpecification: {
         type: 'PAYMENT_GATEWAY',
         parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
         }
      }
   }
  },
  methods: {
   payed (paymentData) {
      // process payment
   },
   cancelled () {
      // handle cancel event
   }
}
};
</script>
