const { request } = require("graphql-request");
const { seoUrlResult, PRODUCTDETAILS } = require("./gqlquery");
const { API_URL } = require("./config");
const { default: axios } = require("axios");
const networkcall = (path, skuID) => {
  if (skuID !== undefined) {
    var variables = { conditionfilter: { skuId: skuID } };
    return request(API_URL + "/graphql", PRODUCTDETAILS, variables).then(
      (data) => {
        var imgConstructURL;
        var description = null;
        var ResultData = data.allTransSkuLists.nodes;
        imgConstructURL =
          ResultData[0].productListByProductId.productImagesByProductId.nodes[0]
            .imageUrl;
        description =
          ResultData[0].transSkuDescriptionsBySkuId.nodes[0].skuDescription;

        if (description.length > 200) {
          description = description.replace(/^(.{200}[^\s]*).*/, "$1");
          description = description.concat("...");
        }

        return {
          title: `${ResultData[0].productListByProductId.productName}  
        `,
          description: description,
          imgURL: imgConstructURL,
        };
      }
    );
  } else if (path.indexOf("jewellery")) {
    var pathnameSplit = path.split("/");
    const splitHiphen = () => {
      if (pathnameSplit[1].indexOf("-")) {
        return pathnameSplit[1].split("-");
      }
    };

    const variables = {
      seofilter: { seoUrl: { in: splitHiphen() } },
    };

    // Run GraphQL queries/mutations using a static function
    return request(API_URL + "/graphql", seoUrlResult, variables).then(
      (data) => {
        var filters = {};
        data.allSeoUrlPriorities.nodes.map((val) => {
          var attrName = val.attributeName.replace(/\s/g, "").toLowerCase();
          var attrVal = val.attributeValue;

          filters[attrName] = attrVal;
        });

        return axios.post(API_URL + "/filterlist", filters).then((response) => {
          var data = response.data;
          var replaceValue = "";

          var Page_title = data.seo_url.replace(/[-\+]/gi, " ");

          replaceValue = Page_title.toLowerCase()
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
          return {
            title: replaceValue,
            description: " ",
            imgURL: " ",
          };
        });
      }
    );
  } else {
    console.log("error");
  }
};
module.exports = { networkcall };
