import React from "react";

export const CardBack = (props) => {
  return (
    <div onClick={() => props.setHover((prev) => !prev)} className="container__backcard">
      <lu className="container__backcard-list">
        <li>{props.name}</li>
        <li>{props.status}</li>
        <li>{props.species}</li>
        <li>{props.gender}</li>
        <li>{props.origin.name}</li>
      </lu>
    </div>
  );
};
