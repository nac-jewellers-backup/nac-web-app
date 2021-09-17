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

  allCustomerReviews(filter: {rating: {greaterThanOrEqualTo: 4}}, first: 6) {
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
  allBanners(condition: {urlParam: "listingPage"}) {
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



`