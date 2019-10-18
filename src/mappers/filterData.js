

import { resolutions } from "utils";
export default function (data) {
    let mapperdata = [];
    try {
        mapperdata = data;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(k => {
        debugger
       
        let _d;
        try {
            _d = {
                filter : [
                    'Offers', 'Availability', 'Product Type', 'Style', 'Material', 'Theme', 'Collection',
                    'Metal Color', 'Metal Purity', 'Occasion', 'No Of Stone', 'Gender', 'Stone Color', 'Stone Shape'
                ],
                
                subFilter : {
                    'Offers': [
                        'Up to  20%',
                        'Up to  30%',
                        'Up to  40%',
                        'Up to  50%',
                    ],
                    'Availability': [
                        '1 Day Shipping', '10 Day Shipping', '15 & Above Day Shipping', '5 Day Shipping', '7 Day Shipping',
                    ],
                    'Product Type': data[0].master_product_type.map(val =>{
                        return val.product_type
                     }),
                    'Style':  data[0].master_styles.map(val =>{
                        return val.style_name
                     }),
                    'Material': data[0].master_material.map(val =>{
                        return val.material_name
                     }),
                    'Theme': data[0].master_themes.map(val =>{
                        return val.theme_name
                     }),
                    'Collection': data[0].master_collection.map(val =>{
                       return val.collection_name
                    }),
                    'master_colors': data[0].master_colors.map(val =>{
                        return val.metal_color
                     }),
                    'Metal Purity': data[0].master_purity.map(val =>{
                        return val.purity
                     }),
                    'Occasion':data[0].master_occassion.map(val =>{
                        return val.occassion_name
                     }),
                    'No Of Stone': ['Fashion', 'Chic', 'Cluster', 'Cut Out',
                    ],
                    'Gender': ['Female', 'Male', 'Kids, Female', 'Unisex, Kids, Female', 'Unisex, Female', 'Male, Female',  'Male, Kids, Female', 'Unisex'
                    ],
                    'Stone Color': ['Fashion', 'Chic', 'Cluster', 'Cut Out',
                    ],
                    'Stone Shape': ['Fashion', 'Chic', 'Cluster', 'Cut Out',
                    ],
                },
                
                sortOptions : [
                    "New To Stylori",
                    "Featured",
                    "Price Low to High",
                    "Price High to Low",
                    "Ready To Ship",
                    "Best Seller"
                ],

            }
        } catch (error) {
            console.info('error', error);
        }

        return _d;
    })
    // console.info('_format', _format);
    return _format;


}

// injectUrl("/images/product/SE0775/SE0775-1Y.jpg", cdnUrl)