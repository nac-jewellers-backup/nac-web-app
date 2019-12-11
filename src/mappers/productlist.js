import { resolutions } from "utils";

var colSize = null
const  screenWidth = () => {
    const width = window.innerWidth;
    if (width > 2555) {
       colSize = 6; 
    }
    else if (width > 1440) {
       colSize= 4; 
    }
    else if (width > 1024) {
       colSize= 4; 
    }
    else if (width > 960) {
       colSize= 3; 
    }
    else if (width > 760) {
       colSize= 4; 
    }
    else if (width < 760) {
       colSize= 2; 
    }
  }
  var img_res;
var screen_width_type =  () =>{ 
    // const {window_width, browser_type} = await lambda_func_front_end()
    var window_width = JSON.parse(localStorage.getItem('browserDetails'))

    screenWidth()
    var _calc = () =>{
         var width_of_filters_20_percentage = ((window_width.browser_width-(window_width.browser_width * 0.2))/colSize)
         var subtracting_spacesaroundcard =  width_of_filters_20_percentage - (width_of_filters_20_percentage*0.1)
         return subtracting_spacesaroundcard 
        }
        var calc = _calc()
       
        var sizes = [50,60,70,80,90,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400]
        for(var i=0;i<=sizes.length;i++){
            if(calc===sizes[i] || calc<sizes[i]){

                img_res = sizes[i]
                break; 
            }
            else{
                if(sizes.length-1 === i){
                    img_res= sizes[i]
                }
            }
        }
    return img_res
}
console.log('screen_width_type()',screen_width_type())

// const baseUi = "https://assets-cdn.stylori.com/";
// const injectUrl = (url, baseUi) => url ? resolutions.map(k => ({ ...k, img: `${baseUi}${url.imageUrl===undefined  ? url : url.imageUrl}` })) : [];
const injectUrl =  (url, baseUi) => {
    var browser_type = JSON.parse(localStorage.getItem('browserDetails'))
    var resolution =     screen_width_type()
    var _resolutions = `${resolution}X${resolution}`
    var url_split;
    var extension_split;
    var url_construct;
    var browser_type_append;
    
    if(url.imageUrl.length>0){
        
        url_split = url.imageUrl.split('/')
         extension_split = url_split[url_split.length-1]
        browser_type_append = extension_split.split('\.')[0].concat(`${browser_type.browser_type}`)
        url_split[url_split.length-1] = browser_type_append 
         url_split.splice(2, 0, _resolutions);
          url_construct = url_split.join().replace(/\,/g,'/')
    }
    else{
        var img_not_found = "product/250X250/productnotfound.webp"
         url_split = img_not_found.split('/')
         extension_split = url_split[url_split.length-1]
         browser_type_append = extension_split.split('\.')[0].concat(`${browser_type.browser_type}`)
        url_split[url_split.length-1] = browser_type_append 
         url_split.splice(1, 0, _resolutions);
          url_construct = url_split.join().replace(/\,/g,'/')
    }
    

    var img_url = {img:`${baseUi}${url_construct}`}
    return img_url

}

// const valuesinjectUrl = (imageUrl, cdnUrl) => injectUrl(imageUrl, cdnUrl);in
const placeImages = (placeImage) => placeImage.find(fd => !fd.ishover);
const hoverImage = (placeImage) =>  placeImage.find(fd => fd.ishover); 


    export default function (data, cdnUrl) {
        
    let mapperdata = [];
    try {
        mapperdata = data.data.allProductLists.nodes;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(k => {
        console.log(injectUrl(placeImages(k.transSkuListsByProductId.nodes[0].productListByProductId.productImagesByProductId.nodes), cdnUrl),'injectUrl')
        let _d;
        try {
            _d = {
                totalCount: data.data.allProductLists.length> 0 ? data.length : data.data.allProductLists.totalCount ,
                price:(k.transSkuListsByProductId.nodes[0] === undefined  )? 15343 : k.transSkuListsByProductId.nodes[0].discountPrice,
                offerPrice: k.transSkuListsByProductId.nodes[0] === undefined   ? 13203 : k.transSkuListsByProductId.nodes[0].markupPrice,
                title: k.productName,
                save: '5999.9',
                image: {
                    placeImage: injectUrl(placeImages(k.transSkuListsByProductId.nodes[0].productListByProductId.productImagesByProductId.nodes), cdnUrl),
                    hoverImage: injectUrl(hoverImage(k.transSkuListsByProductId.nodes[0].productListByProductId.productImagesByProductId.nodes), cdnUrl),

                },
                productId: k.productId,
                
                diamondType:k.transSkuListsByProductId.nodes[0] === undefined ? '' : k.transSkuListsByProductId.nodes[0].diamondType,
                metalColor:k.transSkuListsByProductId.nodes[0] === undefined ? '' : k.transSkuListsByProductId.nodes[0].metalColor,
                purity:k.transSkuListsByProductId.nodes[0] === undefined ? '' : k.transSkuListsByProductId.nodes[0].purity,
                skuSize:k.transSkuListsByProductId.nodes[0] === undefined ? '' : k.transSkuListsByProductId.nodes[0].skuSize,
                material:k.productMaterialsByProductSku.nodes[0] === undefined ? '' : k.productMaterialsByProductSku.nodes[0].materialName,
                productType:k.productType,
                skuId:k.transSkuListsByProductId.nodes[0].generatedSku,
                oneDayShipping:k.transSkuListsByProductId.nodes[0].isReadyToShip,
                imageResolution:img_res

            }
        } catch (error) {
        }

        return _d;
    })
    // console.info('_format', _format);
    return _format;
    


}

// injectUrl("/images/product/SE0775/SE0775-1Y.jpg", cdnUrl)