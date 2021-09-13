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
              costPrice
              markupPrice
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
  }
  `;
