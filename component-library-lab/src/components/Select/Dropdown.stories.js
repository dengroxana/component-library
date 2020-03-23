import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";

storiesOf("Select", module)
  .add("Dropdown", () => <Dropdown id="select" value="Select" />)
  .add("Dropdown2", () => <Dropdown id="select2" value="Select" />);
