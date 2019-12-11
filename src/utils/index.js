import { async } from "q"

export const resolutions = [
  // { res: '318x318', size: '375w' },
  // { res: '372x372', size: '500w' },
  { res: '1000x1000', size: '1440w' },
  // { res: '422x422', size: '600w' },
  // { res: '247x247', size: '768w' },
  // { res: '204x204', size: '1024w' },
  // { res: '543x543', size: '2560w' },
]


// export const detailFilterGen = (type, value, table, clause = "equalTo") => {
//   if (type === 'productId') {
//     return {
//       [type]: {
//         [clause]: value
//       }
//     }
//   }
//   else {
    
//       let values = {};
//   // Object.keys(kv).map(k => {
//     values[type] = { [clause]: value } 
//   // });
// console.log(values)
//   return values;
//   }
// }


export const filterGenerator = (type, value, table,filter,clause = "equalTo") => {
  var _obj = Object.keys(filter).filter(val=>{ if(val === "transSkuListsByProductId") return true})
  if (table.length > 0) {
    if(_obj[0]=== table){
      return {
        [table]: {
          some: {
            ...filter.transSkuListsByProductId.some,
            [type]: {
              [clause]: value
            },
          }
        }
  
      }
    }
    else{
      return {
        [table]: {
          some: {
            
            [type]: {
              [clause]: value
            },
          }
        }
  
      }
    }

  }
  else {
    return {
      [type]: {
        [clause]: value
      }
    }
  }
}

export const filterTransSkuGenerator = (type, value) =>{
  if(type !== 'price'){
    let clause="equalTo"
    return{
      [type]:{
        [clause]:value
      }
    }
  }

}

// "filterTransSku": {
//   "purity": {
//     "equalTo": "55K"
//   }
// },



async function supportsWebp() {
  if (!window.createImageBitmap) return false;
  
  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}
export const lambda_func_front_end =async () =>{
  
    var browser_type = null
  var window_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  
    if(await supportsWebp()) {
      console.log('does support');
      browser_type = '.webp'
    }
    else {
      console.log('does not support');
      browser_type = '.jpeg'
    } 
    return({browser_type, window_width})
}