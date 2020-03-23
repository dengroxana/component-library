import React from "react";
import { storiesOf } from "@storybook/react";
import TextButton from "./TextButton"

storiesOf("Text Button", module).add("Text Button", () => (
    <TextButton id="input" redeem="redeem" type="text" placeholder="Voucher code" text="submit" value="Redeem"/>
  ));
