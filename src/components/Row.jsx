import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../instance'
import './Row.css';
function Row({title,fetchUrl,isPoster}) {
  const [allMovies,setAllmovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async ()=>{
    const {data} = await tmdbAxiosInstance.get(fetchUrl)
    setAllmovies(data.results)
  }
  //console.log(allMovies);

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="movies-row">
        {
          allMovies?.map(item=>(
            <img className='movie' src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt="noimage" srcset="" />
          ))
          }
      </div>
    </div>
  )
}

export default Row