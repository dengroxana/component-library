import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";
import "./Thumbnail.css";
import Picture1 from './product.png'
import HoverPicture from './product2.png'
storiesOf("Thumbnails", module)
  .add("Product", () => (
    <Thumbnail mainPicture={Picture1} hoverPicture={HoverPicture} />
  ))