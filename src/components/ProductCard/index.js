import React from "react";
import { ImgMediaCard } from "./Card.js";
function Card(props) {  
  return <ImgMediaCard data={props.data} wishlist={props.wishlist} />;
}
export default Card;
