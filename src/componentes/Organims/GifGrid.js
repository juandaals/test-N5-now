import React from "react";
import Card from "../Molecules/Card";
import { ContainerCard } from "./styles";

export const GifGrid = ({ listCharacters, loading, error, color }) => {
  if (loading)
    return (
      <p>
        Loading..{" "}
        <progress className="progress is-small is-primary" max="100">
          15%
        </progress>
      </p>
    );
  if (error) return <p>Error!</p>;
  return (
    <ContainerCard color={color}>
      {listCharacters?.map((character) => (
        <Card characterinfo={character} />
      ))}
    </ContainerCard>
  );
};
