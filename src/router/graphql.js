import gql from "graphql-tag";

const GET_Resturant = gql`
  query {
    business(
      id: "QnVzaW5lc3M6ZTVkMmE5ZTctMThlYy00OGIwLTlmOTYtNDZjNGYwNDIxZGUx"
    ) {
      id
      customers(sort: [NAME_ASC]) {
        edges {
          node {
            id
            name
            email
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
      products {
        pageInfo {
          currentPage
          totalPages
          totalCount
        }
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

export { GET_MY_PRODUCTS, GET_Resturant };
