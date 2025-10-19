import React from 'react'
import { useState, useEffect } from 'react';
export const MovieContext = React.createContext();
const MovieContextWrapper = ({children}) => {
  const [watchlist,setWatchlist] = useState([]);
    const addtowatchlist = (movie) => {
      const updatedwatchlist = [...watchlist,movie]
        setWatchlist(updatedwatchlist)
        localStorage.setItem("watchlist", JSON.stringify(updatedwatchlist))
    }
    
    const removefromwatchlist = (movie) => {
      const updatedwatchlist = watchlist.filter(watchlistmovie => {
        return watchlistmovie.id != movie.id
      })
      setWatchlist(updatedwatchlist)
      localStorage.setItem("watchlist", JSON.stringify(updatedwatchlist))
    }
    useEffect(() => {
      const watchlist = localStorage.getItem('watchlist')
      if(watchlist){
        setWatchlist(JSON.parse(watchlist))
      }
    },[])
  return (
    <MovieContext.Provider value = {{addtowatchlist,removefromwatchlist, watchlist, setWatchlist}}>{children}</MovieContext.Provider>
  )
}

export default MovieContextWrapper