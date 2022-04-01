import React from "react";

export const CardFront = (props) => {
  return (
    <img
      className={props.className}
      src={props.characterimage}
      alt="character_image"
      onClick={() => props.setHover((prev) => !prev)}
    />
  );
};
