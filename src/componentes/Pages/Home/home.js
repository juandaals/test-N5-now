import React, { useEffect, useState } from "react";
import { BlockPicker } from 'react-color';
import { useCharacters } from "../../../services/characters/characters";
import { Next } from "../../Molecules/next/next";
import { GifGrid } from "../../Organims/GifGrid";
import { ContainerHome } from "./styles";

export const Home = () => {
  const [color, setColor] = useState('#f47373');
  const {
    getCharacters,
    listCharacters,
    loading,
    error,
    nextPage,
    page,
    previousPage,
  } = useCharacters();
  
  useEffect(() => {
    getCharacters();
  }, []);

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };
  return (
    <ContainerHome>
      <BlockPicker color={color} onChangeComplete={handleChangeComplete} />
      <GifGrid color={color} listCharacters={listCharacters} loading={loading} error={error} />
      <Next nextPage={nextPage} page={page} previousPage={previousPage} color={color}/>
    </ContainerHome>
  );
};
