import React from "react";
import Picture1 from './product.png'
import HoverPicture from './product2.png'
const Thumbnail = props => (
  <>
    <img className='mainImage' src={Picture1} alt={props.alt}/>
    <img className='hoverImage' src={HoverPicture}alt={props.alt2}/>
  </>
);
export default Thumbnail;