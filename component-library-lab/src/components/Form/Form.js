import React from "react";
import "./Form.css";

const Form = props => (
  <form>
    <label for={props.name}>{props.title}</label>
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
    
  </form>
);

export default Form;
