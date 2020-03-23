import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";

storiesOf("Checkboxes", module)
  .add("Checkbox 1", () => (<Checkbox type="checkbox1" label="" spanClass='checkmark' typeClass='checkbox' labelClass='container' />))
  .add("Checkbox 2", () => (<Checkbox type="checkbox2" label="" spanClass='checkmark2' typeClass='checkbox' labelClass='container2' />))
  .add("Checkbox 3", () => (<Checkbox type="checkbox3" label="Don't show this popup again" spanClass='checkmark3' typeClass='checkbox' labelClass='container3' />));