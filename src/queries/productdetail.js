import { filterGenerator } from "utils";
// SR3261
export const PRODUCTDETAILS = `query MyQuery(
  $conditionfilter: TransSkuListCondition
  $conditionImage: ProductImageCondition
  $productnamefilter: TransSkuListFilter
  $number: Int
) {
  allTransSkuLists(
    condition: $conditionfilter
    filter: $productnamefilter
    first: $number
  ) {
    nodes {
      skuSize
      markupPrice
      sellingPrice
      purity
      discount
      skuWeight
      metalColor
      discountPrice
      generatedSku
      skuId
      isReadyToShip
      vendorDeliveryTime
      discountPriceTax
      markupPriceTax
      skuUrl
      
      transSkuDescriptionsBySkuId {
        nodes {
          skuDescription
          ringsizeImage
          certificate
        }
      }
      diamondType
      productListByProductId {
        productName
        productId
        defaultSize
        prodDescription
        width
        height
        sizeVarient
        colourVarient
        defaultWeight
        productType
        isactive
        productDiamondsByProductSku {
          nodes {
            diamondClarity
            diamondColour
            diamondType
            stoneWeight
            diamondShape
            diamondSettings
            stoneCount
            description
            itemName
            stoneAmount
            subItemName
            stoneCont
            stoneRate
          }
        }
        productGemstonesByProductSku {
          nodes {
            gemstoneType
            gemstoneSize
            gemstoneShape
            gemstoneSetting
            productSku
            stoneCount
            stoneWeight
            description
            itemName
            stoneAmount
            subItemName
            stoneAmount
            stoneRate
          }
        }
        productImagesByProductId(
          condition: $conditionImage
          orderBy: IMAGE_POSITION_ASC
        ) {
          nodes {
            ishover
            imageUrl
            imagePosition
          }
        }
      }
      pricingSkuMaterialsByProductSku {
        nodes {
          materialName
          component
          discountPrice
          sellingPrice
          markup
          costPrice
          marginPercentage
        }
      }
      pricingSkuMetalsByProductSku {
        nodes {
          materialName
          discountPrice
          sellingPrice
          markup
          costPrice
          marginPercentage
        }
      }
    }
  }
}

`;
export const CheckForCod = `query CheckForCod($pincode:String) {
  allPincodeMasters(first: 1, condition: {pincode:$pincode}) {
    nodes {
      isDelivery
      maxCartvalue
      minCartvalue
      isCod
      pincode
      state
      country
      district
     }
  }
}
`;

export const CUSTOMERREVIEWS = `query MyQuery($productSku: String) {
  allCustomerReviews(condition: {productSku: $productSku}, last: 5) {
    nodes {
      message
      title
      rating
      customerName
    }
  }
}
`;
export const USERPROFILES = `query MyQuery($userId: UUID) {
  allUserProfiles(condition: {id: $userId}) {
    nodes {
      id
      firstName
      email
    }
  }
}
`;

export const GIFTWRAPS = `query MyQuery($cardId: UUID) {
  allGiftwraps(condition: {cartId: $cardId}, orderBy: CREATED_AT_DESC) {
    nodes {
      giftTo
      giftFrom
      message
    }
  }
}

`;

export const ADDRESSDETAILS = `query MyQuery($userprofileId: String) {
  allUserAddresses(condition: {userprofileId: $userprofileId, isActive: true}, orderBy: UPDATED_AT_ASC) {
    nodes {
      addressline1
      addressline2
      id
      city
      contactNumber
      country
      countryCode
      defaultBilling
      defaultShipping
      firstname
      lastname
      pincode
      state
      isActive
      updatedAt
      createdAt
      salutation
    }
  }
}
`;
export const YouMayAlsoLike = `query MyQuery(
  $filterdata: ProductListFilter
  $filterdatatranssku: TransSkuListFilter
  # $filterdatatranssku2: TransSkuListFilter
  $filterdata2: ProductListFilter
  $imgcondition: ProductImageCondition
  $Conditiondatatranssku: TransSkuListCondition # $Conditiondatatranssku2: TransSkuListCondition
) {
  youMayalsolike1: allProductLists(
    filter: $filterdata
    orderBy: CREATED_AT_DESC
    first: 16
  ) {
    nodes {
      productImagesByProductId(condition: $imgcondition) {
        nodes {
          imageUrl
        }
      }
      transSkuListsByProductId(
        condition: $Conditiondatatranssku
        filter: $filterdatatranssku
      ) {
        nodes {
          discountPrice
          generatedSku
          skuUrl
          sellingPrice
          productId
          discount
          productListByProductId {
            productName
            productImagesByProductId {
              nodes {
                imageUrl
                imagePosition
                ishover
              }
            }
            transSkuListsByProductId {
              nodes {
                skuId
                skuUrl
                markupPrice
                discountPrice
                discount
                transSkuDescriptionsBySkuId {
                  nodes {
                    skuDescription
                  }
                }
              }
            }
            productMaterialsByProductSku {
              nodes {
                materialName
              }
            }
          }
        }
      }
      productName
      productType
      createdAt
    }
    totalCount
  }
  youMayalsolike2: allProductLists(
    filter: $filterdata2
    orderBy: CREATED_AT_DESC
    first: 8
  ) {
    nodes {
      productImagesByProductId(condition: $imgcondition) {
        nodes {
          imageUrl
        }
      }
      transSkuListsByProductId(
        condition: $Conditiondatatranssku
        filter: $filterdatatranssku
      ) {
        nodes {
          discountPrice
          generatedSku
          skuUrl
          sellingPrice
          productId
          discount
          productListByProductId {
            productName
            productImagesByProductId {
              nodes {
                imageUrl
                imagePosition
                ishover
              }
            }
            transSkuListsByProductId {
              nodes {
                skuId
                skuUrl
                markupPrice
                discountPrice
                discount
                transSkuDescriptionsBySkuId {
                  nodes {
                    skuDescription
                  }
                }
              }
            }
            productMaterialsByProductSku {
              nodes {
                materialName
              }
            }
          }
        }
      }
      productName
      productType
      createdAt
    }
    totalCount
  }
}

`;
export const youRecentlyViewed = `query MyQuery {
  allProductMaterials(
    filter: {and: {productListByProductSku: {isactive: {equalTo: true}}}}
    first: 13
  ) {
    nodes {
      materialName
      productSku
      isActive
      productListByProductSku {
        productType
        productName
        productCategory
        prodDescription
        productImagesByProductId {
          nodes {
            imageUrl
            imagePosition
            productId
            isActive
            productListByProductId {
              transSkuListsByProductId {
                nodes {
                  sellingPrice
                  skuUrl
                  transSkuDescriptionsBySkuId {
                    nodes {
                      skuDescription
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    totalCount
  }
}
  `;
export const shopByStyloriSilver = (data) => {
  return `query MyQuery {
   ${data.map((val) => {
     return `${val}: allProductMaterials(filter: {and: {materialName: {includes: "Silver"}, productListByProductSku: {isactive: {equalTo: true}, productType: {equalTo: "${val}"}}}}) {
        nodes {
          materialName
          productListByProductSku {
            productType
            productImagesByProductId {
              nodes {
                imageUrl
                imagePosition
              }
            }
          }
        }
        totalCount
      }`;
   })}
  }
  
    `;
};

export const checkProductAlreadyExistInCart = (data) => ` {
  allShoppingCartItems(condition: {productSku: "${data.skuId}", shoppingCartId: "${data.cartId}"}) {
    nodes {
      productSku
    }
  }
}`;
export const filterProductMatrix = (type, value) => {
  let fc = { table: "", type: "" };
  switch (type) {
    case "productId": {
      fc = {
        table: "",
        type: "productId",
      };
      break;
    }
    case "sizeVarient": {
      fc = {
        table: "",
        type: "sizeVarient",
      };
      break;
    }
    case "metalColor": {
      fc = {
        table: "transSkuListsByProductId",
        type: "metalColor",
      };
      break;
    }
    case "diamondType": {
      fc = {
        table: "productDiamondsByProductSku",
        type: "diamondType",
      };
      break;
    }
    default: {
      break;
    }
  }

  return filterGenerator(fc.type, value, fc.table);
};

export const conditions = {
  productId: (id) => ({
    condition: {
      productId: id,
    },
  }),

  generateFilters: (filters) => {
    let filter = {};
    const filterKeys = filters.map((val) => val);

    filterKeys.map((k) => {
      const fk = String(Object.keys(k));
      const fval = String(Object.values(k));
      const fquery = filterProductMatrix(fk, fval);
      filter = { ...filter, ...fquery };
    });

    if (Object.keys(filter).length > 0) {
      return { filter };
    } else {
      return {};
    }
  },
};
