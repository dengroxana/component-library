import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";

storiesOf("Form", module)
  .add("Email", () => <Form type="text" for="email" title="Email" placeholder="Email"/>)
  
;
