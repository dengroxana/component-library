import React from "react";
import "./Dropdown.css";

const Dropdown = props => (
  <>
    <select id={props.id}>
      <option value={props.value}>{props.value}</option>
    </select>
  </>
);
export default Dropdown;
