import React from "react";

export const CardBack = ({ characterInfo, setHover }) => {
  return (
    <div
      onClick={() => setHover((prev) => !prev)}
      className="container__backcard"
    >
      <h1 className="container__backcard-list">{characterInfo.name}</h1>
      <h1 className="container__backcard-list">{characterInfo.status}</h1>
      <h1 className="container__backcard-list">{characterInfo.species}</h1>
      <h1 className="container__backcard-list">{characterInfo.gender}</h1>
      <h1 className="container__backcard-list">{characterInfo.origin.name}</h1>
      <h1 className="container__backcard-list">{characterInfo.location.name}</h1>
      <h1 className="container__backcard-list">{characterInfo.created}</h1>
      <button className="container__backcard-btn">volver</button>
    </div>
  );
};
