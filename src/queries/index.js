import { gql } from 'apollo-boost';

export const PRODUCTLIST = `
{
  allProductLists {
    nodes {
      productName
      productId
      productType
    }
  }
}
`
