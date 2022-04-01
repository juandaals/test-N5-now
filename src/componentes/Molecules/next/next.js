import React from "react";
import { ButtonStyles } from "./styles";

export const Next = ({ nextPage, previousPage, page, color }) => {
  return (
   
      <ButtonStyles className="container__button" color={color}>
        <button className="container__button-btn " onClick={previousPage} >previousPage</button>
        <p className="container__button-p">{page} </p>
        <button className="container__button-btn" onClick={nextPage} >Next</button>
      </ButtonStyles>
    
  );
};
