import gql from "graphql-tag";

const GET_Resturant = gql`
  query {
    business(
      id: "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUx"
    ) {
      id
      customers(pageSize: 1000) {
        edges {
          node {
            id
            name
            email
            phone
            firstName
            lastName
          }
        }
      }
    }
  }
`;

const GET_MY_PRODUCTS = gql`
  query($businessId: ID!) {
    business(id: $businessId) {
      id
      products(pageSize: 300) {
        edges {
          node {
            id
            name
            description
            unitPrice
            defaultSalesTaxes {
              id
              name
              abbreviation
              rate
            }
            isSold
            isBought
            isArchived
            createdAt
            modifiedAt
          }
        }
      }
    }
  }
`;

const GET_THE_INVOICE = gql`
  query($businessId: ID!) {
    business(
      id: "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUx"
    ) {
      id
      isClassicInvoicing
      invoices(pageSize: 300) {
        pageInfo {
          currentPage
          totalPages
          totalCount
        }
        edges {
          node {
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
    }
  }
`;

const GET_BY_INVOICE = gql`query($invoiceId: ID!){
  business(id: "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUx") {
    id
    invoice(id:$invoiceId) {
          id
          createdAt
          modifiedAt
          pdfUrl
          viewUrl
          status
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
    }`

export { GET_MY_PRODUCTS, GET_Resturant, GET_THE_INVOICE,  GET_BY_INVOICE };
