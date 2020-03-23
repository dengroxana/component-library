import React from "react";
import "./Checkbox.css"

const Checkbox = props => (
  <>
    <label className={props.labelClass}>
      <input className={props.type} type={props.typeClass} />
      {props.label}
      <span className={props.spanClass}></span>
    </label>
  </>
);
export default Checkbox;
