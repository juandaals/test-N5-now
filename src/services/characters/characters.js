import React, { useState } from "react";
import useFetch from "use-http";

export const useCharacters = () => {
  const API = "https://rickandmortyapi.com/api";
  const [page, setPage] = useState(1);
  const [listCharacters, setList] = useState([]);

  const { loading, error, get, response } = useFetch(API);

  const getCharacters = async (newPage = 1) => {
    console.log("page", page);
    const res = await get(`/character/?page=${newPage}`);
    if (response.ok) {
      setList(res.results);
    }
    setPage(newPage);
  };

  const nextPage = () => {
    const newPage = page + 1;
    getCharacters(newPage);
  };

  const previousPage = () => {
    const newPage = page - 1;
    getCharacters(newPage);
  };
  return {
    getCharacters,
    nextPage,
    previousPage,
    listCharacters,
    page,
    loading,
    error,
  };
};
