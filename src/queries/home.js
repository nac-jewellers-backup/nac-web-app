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
  }`

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