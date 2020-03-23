import React from "react";
import "./AddTo.css";

const AddTo = props => (
  <button className={props.type}>
    <img src={props.source} alt={props.alt}></img> {props.label}
  </button>
);

export default AddTo;
