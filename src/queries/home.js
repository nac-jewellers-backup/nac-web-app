export const testimonials = `query testimonials {
    allCustomerReviews(condition: {isPublish: true}) {
      nodes {
        productListByProductId {
          productImagesByProductId(condition: {isdefault: true, imagePosition: 1}) {
            nodes {
              imageUrl
              imagePosition
              isdefault
              productColor
              productId
            }
          }
        }
        customerName
        message
        title
        transSkuListByProductSku {
          markupPrice
          skuUrl
        }
      }
    }
  }`;

export const ALLBANNERS = `
  query MyQuery {
    allBanners(condition: {urlParam: "landing"})
    {
      nodes {
        id
        mobile
        position
        url
        web
        urlParam 
      }
    }
  }
  `;

export const ALLBANNERSCOMPLETE = `
  query MyQuery {
    allBanners
    {
      nodes {
        id
        mobile
        position
        url
        web
        urlParam 
      }
    }
  }
  `;

export const ALLFEATUREDPRODUCT = `
query MyQuery {
  allFeaturedProducts(condition: {isActive: true}) {
    nodes {
      productId
      productListByProductId {
        productName
        productId
        productImagesByProductId(condition: {ishover: true}) {
          nodes {
            imageUrl
          }
        }
        transSkuListsByProductId {
          nodes {
            
            markupPrice
            discountPrice
            discount
             skuId
            skuUrl
            transSkuDescriptionsBySkuId {
              nodes {
                skuDescription
              }
            }
           
          }
        }
      }
      isActive
    }
  }
}
  `;
export const ALLREVIEWS = `
query MyQuery {
  allCustomerReviews(
    filter: {rating: {greaterThanOrEqualTo: 4}}
    first: 6
    condition: {isPublish: true}
  ) {
    nodes {
      customerName
      id
      message
      productId
      rating
      title
    }
  }
}

`;
export const LISTINGBANNER = `
query MyQuery {
  allBanners  {
    nodes {
      mobile
      url
      web
      urlParam
      position
      id
    }
  }
}



`;
export const ALLNEWARRIVALPRODUCT = `query MyQuery{
  allNewArrivalProducts {
    nodes {
      productId
      productListByProductId {
        productName
        productId
        productImagesByProductId(condition: {ishover: false}) {
          nodes {
            imageUrl
          }
        }
        transSkuListsByProductId{
          nodes{
            costPrice
            markupPrice
            skuUrl
            transSkuDescriptionsBySkuId{
              nodes{
                skuDescription
              }
            }
            sellingPrice
          }
        }
      }
      isActive
    }
  }
}
`;
export const AllHOMEQUERY = `query MyQuery {
  allBanners(condition: { urlParam: "landing" }) {
    nodes {
      id
      mobile
      position
      url
      web
      urlParam
    }
  }
  allFeaturedProducts(condition: { isActive: true }) {
    nodes {
      productId
      productListByProductId {
        productName
        productId
        productImagesByProductId(condition: { ishover: true }) {
          nodes {
            imageUrl
          }
        }
        transSkuListsByProductId {
          nodes {
            markupPrice
            discountPrice
            discount
            skuId
            skuUrl
            transSkuDescriptionsBySkuId {
              nodes {
                skuDescription
              }
            }
            sellingPrice
          }
        }
      }
      isActive
    }
  }
  allNewArrivalProducts(condition: { isActive: true }) {
    nodes {
      productId
      productListByProductId {
        productName
        productId
        productImagesByProductId(condition: { ishover: true }) {
          nodes {
            imageUrl
          }
        }
        transSkuListsByProductId {
          nodes {
            markupPrice
            discountPrice
            discount
            skuId
            skuUrl
            transSkuDescriptionsBySkuId {
              nodes {
                skuDescription
              }
            }
            sellingPrice
          }
        }
      }
      isActive
    }
  }
  allCustomerReviews(
    filter: { rating: { greaterThanOrEqualTo: 4 } }
    first: 6
    condition: { isPublish: true }
  ) {
    nodes {
      customerName
      id
      message
      productId
      rating
      title
    }
  }
}


`;

export const GOLD_PRICE_AND_CURRENCY_CONVO = `
query {
  allDailyMetalPrices(condition: { isActive: true }, orderBy: ID_ASC) {
    nodes {
      id
      metalName
      displayName
      displayPrice
      isActive
      createdAt
      updatedAt
    }
  }
  allMasterCountries {
    nodes {
      currency
      currencyAlias
      currencySymbol
      fxConversionRate
      id
      isActive
      iso
      iso3
      name
      nicename
      numcode
      phonecode
    }
  }
}`;

export const SEND_QUERIES = `
mutation MyMutation(
  $createdAt: Datetime!
  $email: String
  $phone: String
  $name: String
  $message: String
  $updatedAt: Datetime!
) {
  createAskus(
    input: {
      askus: {
        updatedAt: $updatedAt
        createdAt: $createdAt
        email: $email
        isActive: true
        message: $message
        name: $name
        phone: $phone
      }
    }
  ) {
    askus {
      email
      id
      name
    }
  }
}
`;

export const SEND_ENQUIREY =`
mutation($appointment: AppointmentInput!) {
  createAppointment(input: { appointment: $appointment }) {
    appointment {
      id
    }
  }
}
`
