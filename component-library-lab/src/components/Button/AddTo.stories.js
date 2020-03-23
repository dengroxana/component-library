import React from "react";
import { storiesOf } from "@storybook/react";
import AddTo from "./AddTo";
import cart2 from "./cart2.png";
import hearts from "./hearts.png";

storiesOf("AddTo", module)
  .add("Add To Cart", () => (
    <AddTo source={cart2} label="Add To Cart" type="addtocart" />
  ))
  .add("Add To Favorites", () => (
    <AddTo source={hearts} label="Add To Favorites" type="addtofavorites" />
  ))
  .add("Favorite", () => <AddTo source={hearts} />)
  .add("Cart", () => <AddTo source={cart2} />);
