export const COLLECTIONS = `query MyQuery($productId: String) {
    allProductLists(condition: {productId: $productId}) {
        totalCount
        nodes {
          productName
          productId
          transSkuListsByProductId {
            nodes {
              markupPrice
              sellingPrice
              discountPrice
              generatedSku
              productListByProductId {
                productImagesByProductId(condition: {isdefault: true, ishover: true}) {
                  nodes {
                    ishover
                    imageUrl
                    isdefault
                  }
                }
              }
            }
          }
        }
      }
    }`;
export const WISHLIST = `query MyQuery($userprofileId: [UUID!]) {
  allUserWhislists(
    filter: {
      userprofileId: { in: $userprofileId }
      isActive: { equalTo: true }
    }
  ) {
    nodes {
      userprofileId
      productId
      skuId
      productListByProductId {
        productName
        productImagesByProductId(
          condition: { isdefault: true, imagePosition: 1 }
        ) {
          nodes {
            imageUrl
          }
        }
        isactive
      }
      transSkuListBySkuId {
        discountPrice
        markupPrice
        generatedSku
      }
    }
  }
}`;
export const CARTALL = `
query MyQuery($userprofileId: [UUID!]) {
  allShoppingCarts(filter: {userprofileId: {in: $userprofileId}}) {
    nodes {
      shoppingCartItemsByShoppingCartId {
        nodes {
          qty
          productSku
          price
          offerPrice
        }
        totalCount
      }
    }
  }
}
`;
