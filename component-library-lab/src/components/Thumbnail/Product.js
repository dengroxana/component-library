import React from "react";
import "./Product.css";
import Picture from "./product-inline.png"

const Product = props => (
  <>
    <img className="productInline" src={Picture} alt={props.alt} />
  </>
);

export default Product;
