import gql from "graphql-tag";

const CREATE_INVOICE = gql`
  mutation($input: InvoiceCreateInput!) {
    invoiceCreate(input: $input) {
      didSucceed
      inputErrors {
        message
        code
        path
      }
      invoice {
        id
        createdAt
        modifiedAt
        pdfUrl
        viewUrl
        status
        title
        subhead
        invoiceNumber
        invoiceDate
        poNumber
        customer {
          id
          name
          # Can add additional customer fields here
        }
        currency {
          code
        }
        dueDate
        amountDue {
          value
          currency {
            symbol
          }
        }
        amountPaid {
          value
          currency {
            symbol
          }
        }
        taxTotal {
          value
          currency {
            symbol
          }
        }
        total {
          value
          currency {
            symbol
          }
        }
        exchangeRate
        footer
        memo
        disableCreditCardPayments
        disableBankPayments
        itemTitle
        unitTitle
        priceTitle
        amountTitle
        hideName
        hideDescription
        hideUnit
        hidePrice
        hideAmount
        items {
          product {
            id
            name
            # Can add additional product fields here
          }
          description
          quantity
          price
          subtotal {
            value
            currency {
              symbol
            }
          }
          total {
            value
            currency {
              symbol
            }
          }
          account {
            id
            name
            subtype {
              name
              value
            }
            # Can add additional account fields here
          }
          taxes {
            amount {
              value
            }
            salesTax {
              id
              name
              # Can add additional sales tax fields here
            }
          }
        }
        lastSentAt
        lastSentVia
        lastViewedAt
      }
    }
  }
`;
//Input*********
// {
//     "input": {
//       "businessId": "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUx",
//       "customerId": "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUxO0N1c3RvbWVyOjM5OTg0Nzc1",
//       "items": [
//         {
//           "productId": ""
//           "quantity": ""
//         }
//       ]
//     }
//   }

const CREATE_CUSTOMER = gql`
  mutation($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      didSucceed
      inputErrors {
        code
        message
        path
      }
      customer {
        id
        name
        firstName
        lastName
        email
        address {
          addressLine1
          addressLine2
          city
          province {
            code
            name
          }
          country {
            code
            name
          }
          postalCode
        }
        currency {
          code
        }
      }
    }
  }
`;

// {
//   "input": {
//     "businessId": "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUx",
//     "name": "Santa",
//     "firstName": "Saint",
//     "lastName": "Nicholas",
//     "email": "santa@example.com",
//     "address": {
//       "addressLine1": "",
//       "addressLine2": "",
//       "city": "North Pole",
//       "postalCode": "H0H 0H0",
//       "provinceCode": "CA-NU",
//       "countryCode": "US"
//     },
//     "currency": "CAD"
//   }
// }
const EDIT_CUSTOMER = gql`
mutation ($input: CustomerPatchInput!) {
  customerPatch(input: $input) {
    didSucceed
    inputErrors {
      path
      code
      message
    }
    customer {
      id
      address{
        addressLine1
        addressLine2
        city
        postalCode
        province{
          code
        }
      }
    }
  }
}`;
// {
//   "input": {
//     "id": "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUxO0N1c3RvbWVyOjQ2MTEwNjA5",
//     "address":{ 
//       "addressLine1":  "11013 Forest Ave S",
//       "addressLine2": "",
//       "city": "Seattle",
//       "postalCode": "98178"
//     }
//   }
// }


export { CREATE_INVOICE, CREATE_CUSTOMER, EDIT_CUSTOMER };
