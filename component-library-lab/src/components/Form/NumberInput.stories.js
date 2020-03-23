import React from "react";
import { storiesOf } from "@storybook/react";
import NumberInput from "./NumberInput";

storiesOf("Counter", module).add("Number Input", () => (
  <NumberInput counter="counter" value={1} startValue={0} minValue={0} maxValue={20} />
));
