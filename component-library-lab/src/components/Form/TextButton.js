import React from "react";
import "./TextButton.css";

const TextButton = props => (
  <form>
    <input id={props.id}
      type={props.type}
      placeholder={props.placeholder}
    />
<input id={props.redeem}type={props.text} value={props.value}></input>
  </form>
);

export default TextButton;
