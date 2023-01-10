export const resolutions = [{ res: "1000x1000", size: "1440w" }];

export const filterGenerator = (
  type,
  value,
  table,
  filter,
  clause = "equalTo"
) => {
  var _obj = Object.keys(filter).filter((val) => {
    if (val === "transSkuListsByProductId") return true;
    return 0;
  });
  if (table.length > 0) {
    if (_obj[0] === table) {
      return {
        [table]: {
          some: {
            ...filter.transSkuListsByProductId.some,
            [type]: {
              [clause]: value,
            },
          },
        },
      };
    } else {
      return {
        [table]: {
          some: {
            [type]: {
              [clause]: value,
            },
          },
        },
      };
    }
  } else {
    return {
      [type]: {
        [clause]: value,
      },
    };
  }
};

export const filterTransSkuGenerator = (type, value) => {
  if (type !== "price") {
    let clause = "equalTo";
    return {
      [type]: {
        [clause]: value,
      },
    };
  }
};
async function supportsWebp() {
  if (!window.createImageBitmap) return false;

  const webpData =
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  const blob = await fetch(webpData).then((r) => {
    return r.blob();
  });
  let test = await createImageBitmap(blob).then(
    () => true,
    () => false
  );
  return test;
}

export const lambda_func_front_end = async () => {
  var browser_type = null;
  var window_width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  // var h = Math.max(
  //   document.documentElement.clientHeight,
  //   window.innerHeight || 0
  // );

  let a = await supportsWebp();
  if (a) {
    browser_type = ".webp";
  } else {
    browser_type = ".jpg";
  }
  var browserDetails = {};
  browserDetails["browser_type"] = browser_type;
  browserDetails["browser_width"] = window_width;
  localStorage.setItem("browserDetails", JSON.stringify(browserDetails));
};
