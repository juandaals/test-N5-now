import React, { useEffect, useState } from 'react'
import useFetch from 'use-http'
import Card from '../Molecules/Card'


export const GifGrid = () => {
  const [character, setCharacter] = useState()
  const [gifs, setGifs] = useState([])
  const { response, loading, error, get } = useFetch('https://rickandmortyapi.com/api');

  useEffect(() => {
    initialLoad();
  }, []) // componentDidMount
  
  const initialLoad = async () => {
      const dataLoad  =await get('/character');
      if(response.ok) setCharacter(dataLoad.results)
  }
  
    return (
        <>
        {error && 'Error!'}
        {loading && 'Loading...'}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>

        {
          character?.map( todo => (
            <Card {...todo}/> ))}
            </div>

            
      </>
  )
}
