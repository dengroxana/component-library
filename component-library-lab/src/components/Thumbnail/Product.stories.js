import React from "react";
import { storiesOf } from "@storybook/react";
import Product from "./Product";
import Picture from "./product-inline.png";

storiesOf("Inline Product", module).add("Inline Product", () => (
  <Product src={Picture} />
));
