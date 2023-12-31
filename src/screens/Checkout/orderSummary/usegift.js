import { useCheckForCod } from "hooks/CheckForCodHook";
import { useNetworkRequest } from "hooks/index";
import { GIFTWRAPS } from "queries/productdetail";
import React, { useEffect } from "react";
const useGift = () => {
  let email = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "";
  const [values, setValues] = React.useState({
    gift_to: "",
    gift_from: email,
    message: "",
    haveAlready: false,
    cart_id: "",
    id: "",
  });
  const [emailerr, setEmailerr] = React.useState("");
  const [datas, setDatas] = React.useState();
  const [val, setval] = React.useState({
    expanded1: 1,
    expanded2: 1,
    expanded3: 1,
  });
  const { data, error, loading, makeFetch } = useNetworkRequest(
    "/addgiftwrap",
    {},
    false
  );
  const {
    loading: codloading,
    errors: coderror,
    data: CodData,
    makeRequestCod,
  } = useCheckForCod(GIFTWRAPS, () => {}, {});
  useEffect(() => {
    var cardId = {
      cardId:
        localStorage.getItem("cart_id") &&
        JSON.parse(localStorage.getItem("cart_id")).cart_id,
    };
    makeRequestCod(cardId);
    if (data && data.message === "Success") {
      alert("Your Gift wrap is added Successfully");
    }
  }, [data]);
  useEffect(() => {
    var messageGift =
      CodData &&
      CodData.data &&
      CodData.data.allGiftwraps &&
      CodData.data.allGiftwraps.nodes;

    if (messageGift && messageGift.length > 0) {
      setDatas(messageGift);
      setValues({
        ...values,
        gift_to: messageGift[0].giftTo,
        gift_from: messageGift[0].giftFrom,
        message: messageGift[0].message,
        id: messageGift[0].id,
        cardId: messageGift[0].cartId,
        haveAlready: true,
      });
    }
  }, [CodData]);

  const handleChange = (type, value) => {   
    if (type === "gift_to") {     
      if (value === email) {
        setEmailerr("Please Enter Mail Id Not Equal to Registered Mail ");
      } else {
        setValues({
          ...values,
          [type]: value,
        });
      }
    } else {
      setValues({
        ...values,
        [type]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    // e.preventDefault();   
    console.log(values.gift_to,"nnnnn")
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.gift_to))){
      alert("check mail id!!!")
    }
    else{
      const cart_id = {
        cart_id: JSON.parse(localStorage.getItem("cart_id")).cart_id,
      };
      const Obj = { ...values, ...cart_id };
      // setValues({...values,cart_id:JSON.parse(localStorage.getItem('cart_id')).cart_id})
  
      makeFetch({ ...Obj });
    }
    
  };

  const handlers = { handleSubmit, handleChange };

  return { values, handlers, val, data, setval, CodData, emailerr };
};

export default useGift;
