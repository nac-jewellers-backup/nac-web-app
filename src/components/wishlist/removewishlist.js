import React from "react";
import useWishlists from "./usewishlist";

const RemoveWishlist = (props) => {
  return <RemoveWishlistComponent {...props} />;
};

const RemoveWishlistComponent = (props) => {
  const { values, setValues, handlers } = useWishlists(props);

  return (
    <div
      onClick={() => {
        values["product_sku"] = props.sku;
        values["product_id"] = props.productId;
        values["add"] = props.add;

        setValues({ values, ...values });
        handlers.handelRemove(1);
      }}
    >
      {props.data}
    </div>
  );
};

export default RemoveWishlist;
