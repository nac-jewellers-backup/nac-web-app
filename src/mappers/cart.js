import moment from "moment";

const generateShipsBy = (readytoship, vendorDeliveryTime) => {
  var isReadytoShip = readytoship;
  var numberOfDays = vendorDeliveryTime;
  var date = moment().format(" h a");
  if (isReadytoShip) {
    if (JSON.stringify(date) > " 1 pm") {
      return "Ships by" + " " + moment().add(1, "days").format("Do MMMM YYYY");
    }
  } else {
    return (
      "Ships by" +
      " " +
      moment().add(numberOfDays, "days").format("Do MMMM YYYY")
    );
  }
};
export default function (data) {
  let mapperdata = [];
  try {
    mapperdata = data.data.allTransSkuLists.nodes;
  } catch (error) {
    mapperdata = [];
  }
  const _format = mapperdata.map((k) => {
    let _d;

    try {
      _d = {
        generatedSku: k.generatedSku,
        skuUrl: k.skuUrl,
        materialName:
          k?.productListByProductId?.productMaterialsByProductSku?.nodes ===
          undefined
            ? ""
            : k?.productListByProductId?.productMaterialsByProductSku?.nodes.map(
                (val) => {
                  return val?.materialName;
                }
              ),
        // materialName: k.productMaterialsByProductSku.nodes[0].materialName,
        productType: k.productListByProductId.productType,
        prdheader: k.productListByProductId.productName,
        // allorderdata: allorderdata,
        productId:
          k.productListByProductId && k.productListByProductId.productId,
        shipby: generateShipsBy(k.isReadyToShip, k.vendorDeliveryTime),
        isReadyToShip: k.isReadyToShip,
        isActive: k.productListByProductId.isactive,
        // sellingPrice: k?.sellingPrice,
        // markupPrice: k?.markupPrice,
        minOrderQty: k.minOrderQty ?? 1,
        maxOrderQty: k.maxOrderQty ?? 1,
        productsDetails: [
          //                     Quality
          // Metal
          // Gold
          // Product Code
          {
            header: "Product Details",
            pro_header: k.productListByProductId.productName,
            namedetail: [
              {
                name: "Product Code",
                details: k.generatedSku,
              },
              {
                name: k.metalColor.length > 0 ? "Metal" : "",
                details: k.purity + " " + k.metalColor,
              },
              {
                name:
                  k.productListByProductId.productType == "Kada"
                    ? "Metal Weight (Gm)"
                    : "Gold Weight (Gm)",
                details: k.skuWeight,
              },
              {
                name: k.skuSize && k.skuSize.length > 0 ? "Size" : null,
                details: k.skuSize,
              },
              {
                name:
                  k.diamondType && k.diamondType.length > 0
                    ? "Diamond Quality"
                    : "",
                details: k.diamondType,
              },

              {
                name:
                  k.productListByProductId.productDiamondsByProductSku.nodes
                    .length > 0
                    ? "Diamond Weight (Ct)"
                    : null,
                details:
                  k.productListByProductId.productDiamondsByProductSku.nodes
                    .length > 0
                    ? k.productListByProductId.productDiamondsByProductSku
                        .nodes[0].stoneWeight
                    : null,
              },
              {
                name:
                  k.productListByProductId.productGemstonesByProductSku.nodes
                    .length > 0
                    ? "Gemstone Type"
                    : null,
                details:
                  k.productListByProductId.productGemstonesByProductSku.nodes
                    .length > 0
                    ? k.productListByProductId.productGemstonesByProductSku
                        .nodes[0].gemstoneType
                    : null,
              },
              {
                name:
                  k.productListByProductId.productGemstonesByProductSku.nodes
                    .length > 0
                    ? "Gemstone Weight"
                    : null,
                details:
                  k.productListByProductId.productGemstonesByProductSku.nodes
                    .length > 0
                    ? k.productListByProductId.productGemstonesByProductSku
                        .nodes[0].stoneWeight
                    : null,
              },
            ],
          },
        ],
        //
        //

        dataCard1: [
          {
            generatedSku: k.generatedSku,
            offerPrice: k.markupPrice,
            price: k.discountPrice,
            title: "Diamond Pendant Ring",
            dis: "Pendants set in 18 Kt Yellow Gold 3.95 gm with Diamonds (0.52 ct, GH - SI )",
            save: " ",
            discount: k && k.discount ? k.discount : null,
            image: {
              placeImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/SE0176-1R.jpg",
              hoverImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/HOVER-SE0176-2R.jpg",
            },
            minOrderQty: k.minOrderQty ?? 1,
            maxOrderQty: k.maxOrderQty ?? 1,
          },
        ],
        fadeImages: k.productListByProductId.productImagesByProductId.nodes,
        breadcrumsdata: [
          { title: "Shopping Bag" },
          { title: "Login/ Register" },
          { title: "Address Detail" },
          { title: "Order Confirmation" },
          { title: "Payment Options" },
        ],
        cartsubdata: [
          {
            name: "100% Certified   Jewellery  ",
            icon: "https://assets.stylori.com/images/static/icon-star.png",
          },
          {
            name: " Secure  Payments   ",
            icon: "https://assets.stylori.com/images/static/icon-lock.png",
          },
          {
            name: "  Free Insured    Shipping   ",
            icon: "https://assets.stylori.com/images/static/icon-van.png",
          },
          {
            name: "  25 - Day   Returns   ",
            icon: "https://assets.stylori.com/images/static/icon-return.png",
          },
        ],
      };
    } catch (error) {
      console.info("error", error);
      throw error;
    }

    return _d;
  });
  return _format;
}
