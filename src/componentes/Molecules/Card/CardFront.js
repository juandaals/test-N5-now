import React, { useState } from "react";

export const CardFront = (props) => {
  return (
    <>
        <img className={props.className} src={props.image} alt={props.gender} onClick={() => props.setHover(prev => !prev)} />

    </>
  );
};
